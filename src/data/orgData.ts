export type Locale = "es" | "en";

export interface ServiceDetail {
  slug: string;
  category: "taxes" | "immigration" | "family-coaching";
  title: Record<Locale, string>;
  shortDesc: Record<Locale, string>;
  fullDesc: Record<Locale, string>;
  icon: string;
  benefits: Record<Locale, string[]>;
  steps: Record<Locale, string[]>;
  faqs: Record<Locale, { q: string; a: string }[]>;
}

export const orgConfig = {
  name: "Impulsando Latinos",
  fullName: {
    es: "Impulsando Latinos Organization",
    en: "Impulsando Latinos Organization",
  },
  tagline: {
    es: "Apoyo integral para la comunidad hispana: Declaración y Pago de Taxes, Orientación Migratoria y Coach Familiar.",
    en: "Comprehensive support for the Hispanic community: Tax Filing & Payments, Immigration Guidance, and Family Coaching.",
  },
  missionStatement: {
    es: "Nuestra prioridad número uno es ayudarte a presentar y pagar tus impuestos con total tranquilidad, ITIN o SSN, maximizando tus créditos y evitando multas con el IRS. Además, te respaldamos con asesoría en trámites migratorios y coaching para el bienestar integral de tu familia.",
    en: "Our #1 priority is helping you prepare and file your taxes with complete confidence, ITIN or SSN, maximizing your credits and avoiding IRS penalties. We also provide immigration guidance and family coaching for your household's overall wellbeing.",
  },
  contact: {
    phone: "(346) 477-8912",
    phoneHref: "tel:+13464778912",
    whatsapp: "+13464778912",
    whatsappHref: "https://wa.me/13464778912?text=Hola,%20necesito%20apoyo%20con%20taxes%20y%20servicios%20de%20Impulsando%20Latinos",
    email: "apoyo@impulsandolatinos.org",
    address: "1927 W. McKinney St., Houston, TX 77019",
    hours: {
      es: "Lunes a Sábado: 8:00 AM – 7:00 PM | Emergencias comunitarias 24/7",
      en: "Monday to Saturday: 8:00 AM – 7:00 PM | Community emergency support 24/7",
    },
  },
};

export const mainServices: ServiceDetail[] = [
  {
    slug: "pago-de-taxes",
    category: "taxes",
    title: {
      es: "Pago de Taxes & Asesoría Fiscal",
      en: "Tax Filing, Payments & IRS Assistance",
    },
    shortDesc: {
      es: "Nuestro servicio principal: preparación de impuestos con ITIN o SSN, planes de pago con el IRS, créditos familiares y regularización de años anteriores.",
      en: "Our primary service: tax preparation with ITIN or SSN, IRS payment plans, family tax credits, and back tax filing.",
    },
    fullDesc: {
      es: "Sabemos que el sistema fiscal puede ser confuso y estresante. Te guiamos paso a paso para declarar tus impuestos correctamente, solicitar o renovar tu ITIN, estructurar planes de pago accesibles con el IRS si tienes saldo pendiente y reclamar todos los créditos a los que tu familia tiene derecho legítimo.",
      en: "Navigating the U.S. tax system shouldn't be intimidating. We guide you step by step to file accurately, apply for or renew ITINs, set up manageable IRS payment agreements, and claim every child and family credit your household is entitled to.",
    },
    icon: "taxes",
    benefits: {
      es: [
        "Declaración con ITIN (W-7) y Seguro Social (SSN)",
        "Acuerdos y planes de pago directo con el IRS para evitar embargos",
        "Reclamo de Créditos Tributarios por Hijos (CTC) y Trabajo (EITC)",
        "Revisión y corrección de taxes de años anteriores (Enmiendas)",
        "Asesoría para trabajadores independientes (1099) y pequeños negocios (W-2)",
        "Estimador inteligente y atención confidencial 100% en español",
      ],
      en: [
        "Filing with ITIN (Form W-7) and Social Security Numbers",
        "IRS installment payment agreements to prevent penalties and levies",
        "Child Tax Credit (CTC) & Earned Income Tax Credit maximization",
        "Prior-year tax review and amended returns (Form 1040-X)",
        "Guidance for 1099 contractors, gig workers, and small business owners",
        "Smart tax refund estimator and 100% confidential support",
      ],
    },
    steps: {
      es: [
        "Recopila tus documentos (W-2, 1099, ITIN/SSN, recibos de dependientes).",
        "Revisión gratuita de tu situación fiscal previa y estimación de reembolso o pago.",
        "Preparación profesional, aplicación de deducciones legales y firma electrónica.",
        "Envío electrónico directo al IRS y seguimiento hasta que recibas confirmación o reembolso.",
      ],
      en: [
        "Gather your documents (W-2s, 1099s, ITIN/SSN, dependent records).",
        "Free review of your prior tax status and estimate of refund or payment.",
        "Professional preparation, legal deduction checks, and secure e-filing.",
        "Direct electronic submission to the IRS with tracking until confirmed.",
      ],
    },
    faqs: {
      es: [
        {
          q: "¿Puedo pagar taxes si no tengo Seguro Social?",
          a: "¡Sí, totalmente! Te ayudamos a tramitar o renovar tu Número de Identificación Personal del Contribuyente (ITIN W-7) para que cumplas con la ley, generes historial en el país y protejas a tu familia.",
        },
        {
          q: "¿Qué pasa si le debo al IRS y no puedo pagar de golpe?",
          a: "No entres en pánico. Establecemos un Plan de Pagos en Cuotas (Installment Agreement) o exploramos un Ofrecimiento de Transacción (Offer in Compromise) para pagar una fracción de la deuda.",
        },
        {
          q: "¿Pagar taxes beneficia mi récord migratorio?",
          a: "Absolutamente. Demostrar buen carácter moral y cumplimiento tributario continuo es uno de los requisitos más valorados por jueces y oficiales de USCIS en solicitudes de residencia, visas o perdones.",
        },
      ],
      en: [
        {
          q: "Can I file taxes without a Social Security Number?",
          a: "Yes! We help you apply for or renew an Individual Taxpayer Identification Number (ITIN W-7) so you can file legally, build financial history, and protect your family.",
        },
        {
          q: "What if I owe the IRS and cannot afford a lump sum?",
          a: "Don't panic. We set up an IRS Installment Payment Agreement or check eligibility for an Offer in Compromise to settle for less than the full balance.",
        },
        {
          q: "Does paying taxes help my immigration standing?",
          a: "Yes. Demonstrating good moral character and continuous tax compliance is heavily considered by USCIS officers and immigration judges during green card and waiver proceedings.",
        },
      ],
    },
  },
  {
    slug: "casos-de-migracion",
    category: "immigration",
    title: {
      es: "Casos & Trámites de Migración",
      en: "Immigration Case Support & Guidance",
    },
    shortDesc: {
      es: "Orientación integral en formularios de USCIS, peticiones familiares, permisos de trabajo, renovaciones DACA, TPS y preparación para entrevistas.",
      en: "Guidance on USCIS forms, family petitions, work permits, DACA/TPS renewals, and interview readiness.",
    },
    fullDesc: {
      es: "Ofrecemos apoyo estructurado para que conozcas tus derechos, organices tus pruebas y completes tus paquetes migratorios sin errores costosos. Trabajamos junto a ti para asegurar que tu expediente refleje solidez y claridad ante las autoridades.",
      en: "We provide structured guidance to understand your legal rights, assemble documentary evidence, and complete USCIS packets without costly delays or rejections.",
    },
    icon: "immigration",
    benefits: {
      es: [
        "Peticiones familiares (I-130) y Ajuste de Estatus (I-485)",
        "Solicitud y renovación de Permisos de Trabajo (I-765)",
        "Renovaciones de DACA y aplicaciones a TPS",
        "Peticiones de Perdón Legal (Waivers I-601 / I-601A)",
        "Preparación para la entrevista consular y de ciudadanía N-400",
        "Traducción certificada de actas de nacimiento y matrimonio",
      ],
      en: [
        "Family Petitions (I-130) and Adjustment of Status (I-485)",
        "Employment Authorization Document (EAD / I-765) applications",
        "DACA renewals and Temporary Protected Status (TPS)",
        "Inadmissibility Waivers (I-601 / I-601A)",
        "Readiness coaching for consular and N-400 naturalization interviews",
        "Certified translations of birth and marriage certificates",
      ],
    },
    steps: {
      es: [
        "Evaluación inicial del historial migratorio y elegibilidad.",
        "Compilación de paquete probatorio: lazos familiares, solvencia y taxes.",
        "Llenado riguroso de formularios oficiales y revisión legal.",
        "Monitoreo continuo de notificaciones de recibo y citas biométricas.",
      ],
      en: [
        "Initial case evaluation and eligibility assessment.",
        "Document bundle assembly: family ties, financial affidavit, and tax transcripts.",
        "Rigorous form preparation and review.",
        "Tracking of receipt notices, biometrics appointments, and decision letters.",
      ],
    },
    faqs: {
      es: [
        {
          q: "¿Mis taxes están vinculados a mi caso migratorio?",
          a: "Totalmente. El Formulario I-864 (Declaración Jurada de Patrocinio Económico) requiere copias certificadas (transcripts) de los taxes de los últimos 3 años para demostrar autosuficiencia.",
        },
        {
          q: "¿Qué hago si tengo una orden de comparecencia o corte?",
          a: "Te canalizamos de urgencia con recursos legales comunitarios y abogados aliados de confianza mientras preparamos tu historial documental.",
        },
      ],
      en: [
        {
          q: "Are my tax returns linked to my immigration case?",
          a: "Yes. Form I-864 (Affidavit of Support) requires IRS transcripts from the last 3 tax years to prove financial sufficiency.",
        },
        {
          q: "What should I do if I received a Notice to Appear (NTA)?",
          a: "We quickly connect you with trusted community legal networks and pro-bono resources while assembling your vital records and background documents.",
        },
      ],
    },
  },
  {
    slug: "couch-familiar",
    category: "family-coaching",
    title: {
      es: "Coach Familiar & Bienestar Emocional",
      en: "Family Coaching & Emotional Wellbeing",
    },
    shortDesc: {
      es: "Sesiones de coaching para padres e hijos, manejo de estrés por adaptación cultural y migratoria, finanzas del hogar y comunicación saludable.",
      en: "Coaching for parents and youth, cultural adaptation and immigration stress relief, household budgeting, and healthy communication.",
    },
    fullDesc: {
      es: "Emigrar, adaptarse a una nueva cultura y sacar adelante a los hijos en un país diferente conlleva una carga emocional enorme. Nuestro programa de Coach Familiar brinda un espacio seguro, comprensivo y libre de juicio para sanar, dialogar y construir armonía en el hogar.",
      en: "Immigrating, navigating dual cultures, and raising children in a new country carries tremendous emotional strain. Our Family Coaching program provides a safe, welcoming, and non-judgmental space to heal, communicate, and restore family balance.",
    },
    icon: "coach",
    benefits: {
      es: [
        "Talleres para padres sobre crianza bicultural y apoyo escolar",
        "Acompañamiento ante el estrés y ansiedad migratoria / laboral",
        "Coaching de presupuesto familiar y ahorro inteligente",
        "Mediación de conflictos y fortalecimiento de la comunicación entre parejas",
        "Mentoría para jóvenes de primera y segunda generación",
        "Conexión con redes de apoyo comunitario, alimentos y salud mental",
      ],
      en: [
        "Bicultural parenting workshops and school system navigation",
        "Support for immigration and work-related stress and anxiety",
        "Household budgeting coaching and smart savings strategies",
        "Conflict mediation and couples communication strengthening",
        "Youth mentorship for first- and second-generation students",
        "Direct connection to community food, healthcare, and wellness resources",
      ],
    },
    steps: {
      es: [
        "Sesión de diagnóstico gratuita para identificar las prioridades familiares.",
        "Plan personalizado de 4 a 8 sesiones con metas claras y alcanzables.",
        "Ejercicios prácticos semanales de comunicación y gestión emocional.",
        "Evaluación de progreso y acceso continuo al grupo comunitario de apoyo.",
      ],
      en: [
        "Free discovery session to pinpoint family challenges and priorities.",
        "Custom 4-8 session roadmap with clear, achievable goals.",
        "Weekly practical tools for communication and emotional balance.",
        "Progress check-in and ongoing access to community peer support groups.",
      ],
    },
    faqs: {
      es: [
        {
          q: "¿Las sesiones de coach familiar son en español?",
          a: "Sí, todas las sesiones se imparten en español o de manera bilingüe si los hijos se sienten más cómodos comunicándose en inglés.",
        },
        {
          q: "¿Es confidencial lo que hablemos en el coaching?",
          a: "Absolutamente 100% confidencial. Respetamos tu privacidad y la seguridad emocional de tu familia.",
        },
      ],
      en: [
        {
          q: "Are family coaching sessions conducted in Spanish?",
          a: "Yes, sessions are available 100% in Spanish, English, or bilingual formats so youth and parents can express themselves freely.",
        },
        {
          q: "Are the coaching discussions confidential?",
          a: "Completely 100% confidential. We protect your privacy and your family's peace of mind.",
        },
      ],
    },
  },
];

export const taxCalculators = {
  es: {
    title: "Calculadora Rápida de Estimación de Taxes",
    subtitle: "Descubre en 3 sencillos pasos tu estado aproximado y cómo maximizar tus deducciones antes de declarar.",
    filingStatusLabel: "¿Cuál es tu estado civil para la declaración?",
    single: "Soltero(a)",
    marriedJoint: "Casado(a) declarando juntos",
    headOfHousehold: "Cabeza de Familia (con dependientes)",
    incomeLabel: "Ingreso Anual Aproximado ($ USD)",
    dependentsLabel: "Número de Hijos menores de 17 años",
    hasItinLabel: "¿Declaras con Número ITIN?",
    yes: "Sí",
    no: "No (tengo SSN)",
    button: "Calcular Estimado Preliminar",
    disclaimer: "* Estimado de orientación informativa. Las deducciones finales dependen de gastos médicos, donaciones, créditos de educación y estado de residencia.",
  },
  en: {
    title: "Quick Tax Estimate & Credit Calculator",
    subtitle: "Estimate your potential refunds and deductions in 3 easy steps before submitting your return.",
    filingStatusLabel: "What is your tax filing status?",
    single: "Single",
    marriedJoint: "Married Filing Jointly",
    headOfHousehold: "Head of Household (with dependents)",
    incomeLabel: "Approximate Annual Income ($ USD)",
    dependentsLabel: "Number of Qualifying Children under 17",
    hasItinLabel: "Are you filing with an ITIN number?",
    yes: "Yes",
    no: "No (I have an SSN)",
    button: "Calculate Preliminary Estimate",
    disclaimer: "* Informational estimate only. Final results depend on medical expenses, education credits, business write-offs, and state guidelines.",
  },
};

