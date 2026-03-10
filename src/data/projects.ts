export interface ProjectType {
  id: string;
  title: string;
  description: string;
  tag: string;
  image?: string;
  link: string;
}

export const projectsMock: ProjectType[] = [
  {
    id: "1",
    title: "Fundamentos do Design System \u2013 Bemol",
    description: "Unifiquei a identidade visual da Bemol Varejo, documentando e padronizando componentes no Figma",
    tag: "Design System & Ops",
    image: "",
    link: "#"
  },
  {
    id: "2",
    title: "Redesign do App \u2013 Bemol",
    description: "Liderei o redesign do aplicativo mobile focado em convers\u00e3o e usabilidade para milhares de usu\u00e1rios.",
    tag: "UX/UI Design",
    image: "",
    link: "#"
  },
  {
    id: "3",
    title: "Plataforma de Cr\u00e9dito",
    description: "Desenho da nova jornada de solicita\u00e7\u00e3o de cr\u00e9dito reduzindo o tempo de aprova\u00e7\u00e3o e atrito no processo.",
    tag: "Product Design",
    image: "",
    link: "#"
  },
];
