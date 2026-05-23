export function sharedApi(): string {
  return 'shared-api';
}

export interface InitiativeDraftInput {
  rawIdea: string;
}

export interface InitiativeDraft {
  title: string;
  summary: string;
  problem: string;
  audience: string;
  category: string;
  estimatedTime: string;
  activities: string[];
  requirements: string[];
  impact: string[];
}

type CategoryRule = {
  category: string;
  title: string;
  audience: string;
  estimatedTime: string;
  problem: string;
  activities: string[];
  requirements: string[];
  impact: string[];
  keywords: RegExp[];
};

const DEFAULT_RULE: CategoryRule = {
  category: 'comunidad y voluntariado',
  title: 'Iniciativa comunitaria',
  audience: 'jovenes, voluntarios y organizaciones locales',
  estimatedTime: '4 horas por semana',
  problem: 'La propuesta necesita una estructura clara para avanzar con orden.',
  activities: [
    'Definir el alcance de la iniciativa',
    'Convocar personas interesadas',
    'Ejecutar un piloto corto y medir resultados',
  ],
  requirements: [
    'Un objetivo claro y medible',
    'Un grupo coordinador minimo',
  ],
  impact: ['Mejor organizacion de la propuesta', 'Mayor facilidad para sumar aliados'],
  keywords: [],
};

const CATEGORY_RULES: CategoryRule[] = [
  {
    category: 'medio ambiente y reciclaje',
    title: 'Programa de reciclaje comunitario',
    audience: 'vecinos, estudiantes y brigadas barriales',
    estimatedTime: '4 a 6 horas por semana',
    problem: 'La comunidad necesita reducir residuos y ordenar los puntos criticos de limpieza.',
    activities: [
      'Mapear zonas con acumulacion de residuos',
      'Organizar jornadas de limpieza y separacion',
      'Promover habitos de reciclaje con material educativo',
    ],
    requirements: [
      'Coordinacion con vecinos o aliados locales',
      'Material basico de limpieza y segregacion',
    ],
    impact: ['Espacios publicos mas limpios', 'Participacion vecinal constante'],
    keywords: [/recicl|residu|limpi|ambient|sosten/i],
  },
  {
    category: 'educacion y capacitacion',
    title: 'Talleres de aprendizaje comunitario',
    audience: 'jovenes, familias y lideres comunitarios',
    estimatedTime: '2 a 5 horas por semana',
    problem: 'Hace falta reforzar habilidades utiles con contenido claro y cercano.',
    activities: [
      'Definir sesiones practicas y materiales',
      'Convocar participantes por perfil',
      'Evaluar avances con ejercicios sencillos',
    ],
    requirements: [
      'Espacio para reuniones o sesiones virtuales',
      'Facilitador o voluntarios de apoyo',
    ],
    impact: ['Mas habilidades para los participantes', 'Mejor conexion entre juventud y comunidad'],
    keywords: [/educ|taller|capacit|aprend|formac/i],
  },
  {
    category: 'salud y bienestar',
    title: 'Red de bienestar barrial',
    audience: 'familias, adultos mayores y jovenes voluntarios',
    estimatedTime: '3 a 4 horas por semana',
    problem: 'Se necesitan acciones cercanas para promover bienestar fisico y emocional.',
    activities: [
      'Organizar chequeos o charlas preventivas',
      'Activar sesiones de apoyo y orientacion',
      'Crear material de autocuidado accesible',
    ],
    requirements: ['Aliados de salud o bienestar', 'Material informativo y seguimiento'],
    impact: ['Mejor prevencion comunitaria', 'Mayor confianza en la red local'],
    keywords: [/salud|bienestar|medic|nutric|emocion/i],
  },
  {
    category: 'tecnologia e innovacion',
    title: 'Laboratorio digital comunitario',
    audience: 'jovenes, emprendedores y organizaciones locales',
    estimatedTime: '4 a 8 horas por semana',
    problem: 'Hay iniciativas utiles que necesitan herramientas digitales para escalar.',
    activities: [
      'Capturar necesidades y propuestas en formato claro',
      'Prototipar soluciones digitales simples',
      'Acompanhar el uso y ajustar mejoras',
    ],
    requirements: ['Conexion a internet y equipo basico', 'Personas con interes en tecnologia'],
    impact: ['Procesos mas simples y medibles', 'Mayor visibilidad para las iniciativas'],
    keywords: [/tecnolog|digital|software|app|sistema/i],
  },
  {
    category: 'cultura y comunidad',
    title: 'Encuentros culturales del barrio',
    audience: 'familias, artistas y colectivos juveniles',
    estimatedTime: '3 a 6 horas por semana',
    problem: 'La comunidad necesita espacios para expresion y vinculo social.',
    activities: [
      'Disenar actividades artisticas o recreativas',
      'Invitar participantes y difundir el evento',
      'Documentar resultados y testimonios',
    ],
    requirements: [
      'Espacio comunitario o alianzas culturales',
      'Materiales creativos y logistica basica',
    ],
    impact: ['Mas sentido de pertenencia', 'Mejor participacion social'],
    keywords: [/cultura|arte|musica|teatro|festival/i],
  },
];

function normalizeText(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

function splitSentences(value: string): string[] {
  return value
    .split(/(?<=[.!?])\s+|\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function truncateWords(value: string, maxWords: number): string {
  return value
    .split(/\s+/)
    .slice(0, maxWords)
    .join(' ')
    .replace(/[,:;\-]+$/g, '');
}

function deriveRule(rawIdea: string): CategoryRule {
  const lowerText = rawIdea.toLowerCase();

  return CATEGORY_RULES.find((rule) =>
    rule.keywords.some((keyword) => keyword.test(lowerText)),
  ) ?? DEFAULT_RULE;
}

export function synthesizeInitiativeProposal(
  input: InitiativeDraftInput | string,
): InitiativeDraft {
  const rawIdea = typeof input === 'string' ? input : input.rawIdea;
  const cleanedIdea = normalizeText(rawIdea);
  const sentences = splitSentences(cleanedIdea);
  const rule = deriveRule(cleanedIdea);

  const titleCandidate = truncateWords(sentences[0] || cleanedIdea || rule.title, 10);

  return {
    title: titleCandidate || rule.title,
    summary:
      sentences.slice(0, 2).join(' ') ||
      'Propuesta sintetizada para convertir una idea abierta en una iniciativa clara y accionable.',
    problem: rule.problem,
    audience: rule.audience,
    category: rule.category,
    estimatedTime: rule.estimatedTime,
    activities: rule.activities,
    requirements: rule.requirements,
    impact: rule.impact,
  };
}
