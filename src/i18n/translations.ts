export type Lang = "es" | "pt" | "en";

export const translations = {
  hero: {
    title: { es: "TRAJE NEGRO", pt: "TRAJE NEGRO", en: "TRAJE NEGRO" },
    subtitle: {
      es: "El carácter no se negocia.",
      pt: "O caráter não se negocia.",
      en: "Character is non-negotiable.",
    },
  },

  blocks: [
    {
      lines: {
        es: [
          "No es un vino.",
          "Es una forma de estar.",
          "",
          "Hay elecciones que no necesitan explicación.",
          "Traje Negro representa eso:",
          "presencia, decisión y carácter.",
        ],
        pt: [
          "Não é um vinho.",
          "É uma forma de estar.",
          "",
          "Há escolhas que não precisam de explicação.",
          "Traje Negro representa isso:",
          "presença, decisão e caráter.",
        ],
        en: [
          "It's not just a wine.",
          "It's a way of being.",
          "",
          "Some choices need no explanation.",
          "Traje Negro represents that:",
          "presence, decision and character.",
        ],
      },
    },
    {
      lines: {
        es: [
          "La elegancia no se fuerza.",
          "Se sostiene.",
          "",
          "No buscamos impacto inmediato.",
          "Buscamos permanencia.",
          "",
          "Porque lo importante no es llamar la atención,",
          "es no pasar desapercibido.",
        ],
        pt: [
          "A elegância não se força.",
          "Ela se sustenta.",
          "",
          "Não buscamos impacto imediato.",
          "Buscamos permanência.",
          "",
          "Porque o importante não é chamar a atenção,",
          "é não passar despercebido.",
        ],
        en: [
          "Elegance is not forced.",
          "It sustains itself.",
          "",
          "We don't seek immediate impact.",
          "We seek permanence.",
          "",
          "Because what matters is not drawing attention,",
          "it's being impossible to overlook.",
        ],
      },
    },
    {
      lines: {
        es: [
          "Cada detalle importa.",
          "",
          "Desde el origen hasta la botella,",
          "cada decisión construye identidad.",
          "",
          "Nada es casual.",
          "Nada está de más.",
        ],
        pt: [
          "Cada detalhe importa.",
          "",
          "Da origem à garrafa,",
          "cada decisão constrói identidade.",
          "",
          "Nada é casual.",
          "Nada está a mais.",
        ],
        en: [
          "Every detail matters.",
          "",
          "From origin to bottle,",
          "every decision builds identity.",
          "",
          "Nothing is casual.",
          "Nothing is superfluous.",
        ],
      },
    },
    {
      lines: {
        es: [
          "No es para todos.",
          "Y está bien.",
          "",
          "Traje Negro es para quienes entienden",
          "que elegir también define quién sos.",
        ],
        pt: [
          "Não é para todos.",
          "E está tudo bem.",
          "",
          "Traje Negro é para quem entende",
          "que escolher também define quem você é.",
        ],
        en: [
          "It's not for everyone.",
          "And that's fine.",
          "",
          "Traje Negro is for those who understand",
          "that choosing also defines who you are.",
        ],
      },
    },
  ],

  cta: {
    line1: {
      es: "Algunos vinos acompañan, otros definen.",
      pt: "Alguns vinhos acompanham, outros definem.",
      en: "Some wines accompany, others define.",
    },
    line2: {
      es: "Beber para creer.",
      pt: "Beber para crer.",
      en: "Drink to believe.",
    },
    button: {
      es: "EXPLORAR TRAJE NEGRO",
      pt: "EXPLORAR TRAJE NEGRO",
      en: "EXPLORE TRAJE NEGRO",
    },
    disclaimer: {
      es: "Contiene alcohol. Prohibido el consumo a menores de 18 años. Beber responsablemente.",
      pt: "Contém álcool. Proibido o consumo para menores de 18 anos. Beba com responsabilidade.",
      en: "Contains alcohol. Not for sale to persons under 18. Drink responsibly.",
    },
  },

  footer: {
    title: { es: "TRAJE NEGRO", pt: "TRAJE NEGRO", en: "TRAJE NEGRO" },
    subtitle: {
      es: "Primera edición disponible próximamente",
      pt: "Primeira edição disponível em breve",
      en: "First edition available soon",
    },
  },
} as const;
