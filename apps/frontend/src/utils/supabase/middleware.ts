import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

function getSupabaseUrl() {
  return process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
}

function getSupabaseAnonKey() {
  return (
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    ''
  );
}

export function createSupabaseMiddlewareClient(request: NextRequest, response: NextResponse) {
  return createServerClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value);
          response.cookies.set(name, value, options);
        });
      },
    },
  });
}

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({ request });

  const supabase = createSupabaseMiddlewareClient(request, response);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isOrgPanel = request.nextUrl.pathname.startsWith('/org-panel');
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');
  const isIdeas = request.nextUrl.pathname.startsWith('/ideas');

  const requiresAuth = isOrgPanel || isDashboard || isIdeas;

  if (requiresAuth) {
    if (!user) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/login';
      const redirectRes = NextResponse.redirect(redirectUrl);

      response.cookies.getAll().forEach(cookie => {
        redirectRes.cookies.set(cookie.name, cookie.value);
      });
      return redirectRes;
    }

    const userMetadata = user?.user_metadata || {};
    const isOrg = Boolean(
      userMetadata.organization_verified ||
      userMetadata.is_verified_organization ||
      userMetadata.verified_organization ||
      userMetadata.organization_status === 'verified' ||
      userMetadata.role === 'org' ||
      userMetadata.role === 'organization'
    );

    if (isOrg && (isDashboard || isIdeas)) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/org-panel';
      const redirectRes = NextResponse.redirect(redirectUrl);

      response.cookies.getAll().forEach(cookie => {
        redirectRes.cookies.set(cookie.name, cookie.value);
      });
      return redirectRes;
    }

    if (!isOrg && isOrgPanel) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/dashboard';
      const redirectRes = NextResponse.redirect(redirectUrl);

      response.cookies.getAll().forEach(cookie => {
        redirectRes.cookies.set(cookie.name, cookie.value);
      });
      return redirectRes;
    }
  }

  return response;
}