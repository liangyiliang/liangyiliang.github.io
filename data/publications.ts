export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "Conference" | "Workshop" | "Journal" | "Preprint";
  links?: {
    pdf?: string;
    arxiv?: string;
    code?: string;
    project?: string;
  };
  abstract?: string;
  bibtex?: string;
}

// Replace these with your actual publications.
// Your name in the authors array will be bolded automatically.
const SELF = "Yiliang Liang";

export const publications: Publication[] = [
  {
    id: "consistency-study-paper",
    title: "Visual Consistency in Formal Modeling: An Empirical Evaluation",
    authors: [SELF, "Avinash Palliyil", "Eunsuk Kang", "Joshua Sunshine"],
    venue: "ACM Transactions on Software Engineering and Methodology (TOSEM)",
    year: 2026,
    type: "Journal",
    abstract:
      "Formal modeling tools rely on visualizations to help users explore models, identify errors, and build confidence in system correctness. However, visualizers often produce inconsistent layouts across instances, making it difficult to track structural similarities and changes. In this paper, we present the first human-subject study of visual consistency in formal modeling, examining how consistent layouts influence users’ ability to understand and debug models. Through a controlled experiment, participants completed tasks using either manually created consistent visualizations or visualizations created by the Alloy formal modeling tool. Our findings show that full (strict) visual consistency significantly improves both the speed and correctness of bug detection and localization. We also observe that partial consistency – where diagrams need not be fully identical but preserve enough recognizable structure for users to perceive similarities – offers a similar set of improvements to user performance, offering a practical alternative to full consistency. Subjective findings through post-experiment interviews reveal that consistency lowers cognitive overhead by helping participants more naturally and efficiently detect differences and track corresponding elements across states.",
    links: {
      pdf: "https://dl.acm.org/doi/10.1145/3809502",
    },
    bibtex: `@article{liang2026visual,
  title={Visual Consistency in Formal Modeling: An Empirical Evaluation},
  author={Liang, Yiliang and Palliyil, Avinash and Kang, Eunsuk and Sunshine, Joshua},
  journal={ACM Transactions on Software Engineering and Methodology},
  year={2026},
  publisher={ACM New York, NY}
}`,
  },
  {
    id: "plateau-2026",
    title: "Synthesizing Visual Specifications",
    authors: [SELF, "Eunsuk Kang", "Joshua Sunshine"],
    venue: "PLATEAU",
    year: 2026,
    type: "Workshop",
    abstract:
      "Creating custom visualizations is difficult because users must specify layout rules even when they only have an example diagram in mind. We explore an alternative approach: synthesizing visual specifications from user-edited example diagrams. Focusing on relational data and Alloy instances, we outline a workflow where users iteratively correct generated diagrams, and the system infers generalizable layout constraints. We also introduce an early visual-specification language to express these inferred rules. This work sketches a first step toward example-driven visual specification synthesis.",
    links: {
      pdf: "papers/plateau-2026.pdf",
    },
  },
  {
    id: "plateau-2025",
    title: "Towards Better Formal Methods Visualizations",
    authors: [SELF, "Avinash Palliyil", "Eunsuk Kang", "Joshua Sunshine"],
    venue: "PLATEAU",
    year: 2025,
    type: "Workshop",
    abstract:
      "Formal methods are mathematical techniques for specifying and verifying complex systems. While powerful, they can be difficult to understand, validate, and debug, which can limit their adoption. Visualizations can aid these processes. In this work, we present an interview study to understand how users of formal methods use visualizations in their workflow. The results of the interview study inspire the designs of Penlloy – a domain-specific visualizer for the Alloy modeling language – and our preliminary work on formalizing the notions of visual consistency.",
    links: {
      pdf: "https://kilthub.cmu.edu/ndownloader/files/54600830",
    },
    bibtex: `@inproceedings{liang2025towards,
  title={Towards Better Formal Methods Visualizations},
  author={Liang, Yiliang and Palliyil, Avinash and Kang, Eunsuk and Sunshine, Joshua},
  year={2025},
  organization={Plateau Workshop}
}`,
  },
];
