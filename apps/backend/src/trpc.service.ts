import { Injectable } from '@nestjs/common';
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

@Injectable()
export class TrpcService {
  public router = t.router;
  public procedure = t.procedure;
}