// SCFP Module Pages - Individual module data for dedicated pages
// Based on the 7 modules in the SCFP-HNWI certification program
// Updated with accurate TPG references, durations, TSCs, and Areas of Competencies

export interface SCFPModulePage {
  id: string;
  slug: string;
  moduleNumber: string;
  tpgReference: string;
  title: string;
  subtitle: string;
  type: 'core' | 'elective';
  description: string;
  focus: string;
  challenge: string;
  solution: string;
  duration: string;
  totalHours: string;
  cpdHours: string;
  format: string;
  assessment: string;
  prerequisites: string;
  tscs: {
    name: string;
    proficiencyLevel: number;
  }[];
  color: {
    primary: string;
    gradient: string;
    hover: string;
  };
  objectives: string[];
  keyOutcomes: string[];
  whatYouLearn: {
    category: string;
    topics: string[];
  }[];
  outcomes: string[];
  whoShouldAttend: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  partOfCertification: boolean;
  certificationNote: string;
  brochureUrl?: string;
}

export const scfpModulePages: SCFPModulePage[] = [
  {
    id: "module-1",
    slug: "segmentation-targeting",
    moduleNumber: "Module 1",
    tpgReference: "TGS-2025052815",
    title: "Segmentation & Targeting for Effective Positioning & Propositions",
    subtitle: "Create Personal Brand & Value Positioning for HNWI Segment",
    type: "core",
    description: "This module provides learners with a comprehensive understanding and action plan to develop personal branding, and effectively segment and target potential customers in the HNWI and Family-owned Business segment.",
    focus: "Client acquisition frameworks and strategies for HNWI and Family-owned businesses, creating personal brand and value positioning and propositions.",
    challenge: "The HNWI advisory market is highly competitive. Generic approaches don't work with sophisticated wealthy clients who demand specialized expertise. Most advisors struggle to break into this exclusive market segment and differentiate themselves.",
    solution: "Develop a blend of theory, practical frameworks, and real-world applications to strategically attract and manage customer relationships. Learn to create targeted strategies for customer acquisition and design value propositions that resonate with HNWI clients.",
    duration: "2 Days",
    totalHours: "14 hours (including 2-hour MCQ Assessment)",
    cpdHours: "14 Non-core Supplementary CPD Hours",
    format: "In-Person Masterclass",
    assessment: "2-hour online Multiple-Choice Question (MCQ) Assessment",
    prerequisites: "GCE 'A' Level (2 'A's and 2 'O's) or Diploma + 3 years relevant working experience",
    tscs: [
      {
        name: "Customer Acquisition Management",
        proficiencyLevel: 4
      },
      {
        name: "Account Management",
        proficiencyLevel: 4
      }
    ],
    color: {
      primary: "#7C3AED",
      gradient: "from-purple-600 to-violet-700",
      hover: "hover:bg-purple-700"
    },
    objectives: [
      "Create targeted strategies for customer acquisition and account management",
      "Analyze client behavior and financial needs to identify actionable segments",
      "Understand the principles of market segmentation and target to attract clients in the HNWI and Family-owned Business segment",
      "Design value propositions and action plan to attract target customer segments",
      "Design an effective personal brand and targeted customer acquisition strategies"
    ],
    keyOutcomes: [
      "Develop your personal brand identity to attract HNWI and Family-owned business segment",
      "Effectively segment the market and develop differentiated propositions to manage customer relationships to improve acquisition and cross-sell ratios"
    ],
    whatYouLearn: [
      {
        category: "Personal Branding & Market Segmentation",
        topics: [
          "Creating your personal brand identity for HNWI segment",
          "Understanding principles of market segmentation",
          "Identifying and targeting potential HNWI and Family-owned Business clients",
          "Analyzing client behavior and financial needs"
        ]
      },
      {
        category: "Value Proposition Development",
        topics: [
          "Crafting differentiated value propositions",
          "Positioning yourself effectively in competitive market",
          "Communicating your unique value to wealthy clients",
          "Building compelling client acquisition messaging"
        ]
      },
      {
        category: "Customer Acquisition Strategies",
        topics: [
          "Designing targeted customer acquisition strategies",
          "Strategic networking in affluent circles",
          "Building referral networks in HNWI segment",
          "Managing customer relationships for cross-sell opportunities"
        ]
      },
      {
        category: "Practical Application",
        topics: [
          "Develop personalized customer acquisition plan",
          "Create customer acquisition strategies for HNWI segment",
          "Design action plan to attract target customers",
          "Implement effective account management approaches"
        ]
      }
    ],
    outcomes: [
      "Develop your personal brand identity to attract HNWI and Family-owned business clients",
      "Segment market effectively and create differentiated propositions",
      "Design targeted customer acquisition strategies with specific focus on HNWI segment",
      "Manage customer relationships to improve acquisition and cross-sell ratios",
      "Create actionable plans for attracting and retaining wealthy clients",
      "Apply practical frameworks for sustainable business growth in HNWI market"
    ],
    whoShouldAttend: [
      "Licensed representatives working as Financial Planners",
      "Insurance Agents and Bancassurance Specialists",
      "Financial advisors seeking to enter HNWI market segment",
      "Practitioners looking to differentiate themselves as specialists"
    ],
    faqs: [
      {
        question: "What are the TSCs covered in this module?",
        answer: "This module addresses Customer Acquisition Management (Proficiency Level 4) and Account Management (Proficiency Level 4)."
      },
      {
        question: "How many CPD hours will I earn?",
        answer: "You will earn 14 Supplementary (Non-Core) CPD Hours upon completion of this module."
      },
      {
        question: "What is the end-of-module activity?",
        answer: "You will develop your personalized customer acquisition plan and customer acquisition strategies with a specific focus on the HNWI and Family-owned Business segments."
      },
      {
        question: "Is this module part of the full SCFP-HNWI certification?",
        answer: "Yes, this is Module 1 of the 5 core modules required for SCFP-HNWI™ certification. You must complete all 5 core modules plus 1 elective to earn the full certification."
      }
    ],
    partOfCertification: true,
    certificationNote: "This is a core module of the SCFP-HNWI certification program.",
    brochureUrl: "/brochures/scfp-module-1.pdf"
  },
  {
    id: "module-2",
    slug: "advising-hnw-individuals",
    moduleNumber: "Module 2",
    tpgReference: "TGS-2025052473",
    title: "Strategies for Advising High-Net-Worth Individuals",
    subtitle: "Master HNWI Advisory & Relationship Building",
    type: "core",
    description: "Building and maintaining relationships with HNWIs and Family-owned Businesses is both an art and a science. This module equips learners with the tools, insights, and strategies necessary to attract, engage, and advise affluent clients effectively.",
    focus: "HNWI and Family-owned business client acquisition strategies and frameworks, relevant products set and client suitability for propositions comprising multi-generational succession planning and business continuity, philanthropy and cross-border wealth issues.",
    challenge: "Advising HNWIs requires understanding their unique psychology, priorities, and complex financial needs. Generic advisory approaches fail to build the trust and rapport necessary for serving this sophisticated client segment.",
    solution: "Master the breadth and depth of product sets in the industry and learn to create propositions that address complex needs. Build trust through meaningful interactions and handle complex conversations with confidence to position yourself as a trusted family advisor.",
    duration: "1 Day",
    totalHours: "7.5 hours (including 0.5-hour MCQ Assessment)",
    cpdHours: "7.5 Non-core Supplementary CPD Hours",
    format: "In-Person Masterclass",
    assessment: "0.5-hour online Multiple-Choice Question (MCQ) Assessment",
    prerequisites: "GCE 'A' Level (2 'A's and 2 'O's) or Diploma + 3 years relevant working experience",
    tscs: [
      {
        name: "Client Investment Suitability",
        proficiencyLevel: 4
      }
    ],
    color: {
      primary: "#7C3AED",
      gradient: "from-purple-600 to-violet-700",
      hover: "hover:bg-purple-700"
    },
    objectives: [
      "Design client acquisition strategies to specifically target potential HNWIs and Family-owned Businesses clients",
      "Build trust and rapport through meaningful interactions and handle complex conversations with confidence",
      "Master the breadth and depth of product sets in the industry and create propositions to address complex needs",
      "Understand the risks of different product structures and structure effective solutions that meet client's product suitability"
    ],
    keyOutcomes: [
      "Understand the psychology and priorities of HNWIs and Family-owned businesses and their key concerns and decision-making factors",
      "Craft personalized financial plans, exploring investment, estate planning, and risk management options for the targeted client segment",
      "Build trust and rapport through meaningful interactions and handle complex conversations with confidence and professionalism to position yourself as a trusted family advisor"
    ],
    whatYouLearn: [
      {
        category: "Understanding HNWI Psychology",
        topics: [
          "Psychology and priorities of HNWIs and Family-owned businesses",
          "Key concerns and decision-making factors of wealthy clients",
          "Behavioral patterns of ultra-high-net-worth individuals",
          "Family dynamics in wealth advisory relationships"
        ]
      },
      {
        category: "Product Knowledge & Suitability",
        topics: [
          "Breadth and depth of product sets for HNWI clients",
          "Risk profiles of different product structures",
          "Client investment suitability assessment",
          "Product provider risk appetite thresholds"
        ]
      },
      {
        category: "Complex Advisory Solutions",
        topics: [
          "Multi-generational succession planning strategies",
          "Business continuity planning for family businesses",
          "Cross-border wealth management issues",
          "Philanthropy planning and structures"
        ]
      },
      {
        category: "Relationship Building",
        topics: [
          "Building trust and rapport with wealthy clients",
          "Handling complex conversations with confidence",
          "Positioning as trusted family advisor",
          "Meaningful client interactions and engagement"
        ]
      }
    ],
    outcomes: [
      "Understand psychology and priorities of HNWIs and Family-owned businesses",
      "Design targeted client acquisition strategies for wealthy clients",
      "Craft personalized financial plans for complex client needs",
      "Master product sets and create suitable propositions",
      "Handle complex advisory conversations with confidence",
      "Position yourself as trusted family advisor for HNWI segment"
    ],
    whoShouldAttend: [
      "Financial advisors currently serving or aspiring to serve HNWI clients",
      "Licensed representatives working with affluent families",
      "Bancassurance specialists targeting wealthy segment",
      "Advisors ready to elevate their practice to HNWI advisory"
    ],
    faqs: [
      {
        question: "What TSCs are covered in this module?",
        answer: "This module addresses Client Investment Suitability (Proficiency Level 4)."
      },
      {
        question: "How long is this module?",
        answer: "This is a 1-day module comprising 7.5 total hours, including a 0.5-hour assessment."
      },
      {
        question: "How many CPD hours will I earn?",
        answer: "You will earn 7 Supplementary (Non-Core) CPD Hours upon completion."
      },
      {
        question: "What makes this different from Module 1?",
        answer: "Module 1 focuses on market segmentation and client acquisition. Module 2 covers the actual advisory process, relationship building, and product suitability once you've acquired HNWI clients."
      }
    ],
    partOfCertification: true,
    certificationNote: "This is a core module of the SCFP-HNWI certification program.",
    brochureUrl: "/brochures/scfp-module-2.pdf"
  },
  {
    id: "module-3",
    slug: "products-structures",
    moduleNumber: "Module 3",
    tpgReference: "TGS-2025053419",
    title: "Products Propositions and Structures for Wealthy Individuals",
    subtitle: "Bespoke Wealth Management Structures & Solutions",
    type: "core",
    description: "Designed for advisors serving HNWIs and Family-owned businesses, this module provides in-depth understanding of wealth management strategies and product structuring of bespoke financial solutions that address the unique needs of these clients.",
    focus: "Examine advanced products strategies and features to create bespoke insurance and investment products structures to meet the financial objectives of HNWIs and Family-owned business clients.",
    challenge: "HNWIs face complex wealth structuring challenges that require sophisticated product knowledge. Generic product recommendations don't address the customization, tax efficiency, and regulatory considerations needed for wealthy clients.",
    solution: "Gain advanced knowledge on investment product solutions, estate planning, and tax-efficient wealth structuring. Learn to evaluate and customize products using proof-of-concept modelling and competitive analysis to serve clients in this segment effectively.",
    duration: "2 Days",
    totalHours: "14 hours (including 0.5-hour MCQ Assessment)",
    cpdHours: "14 Non-core Supplementary CPD Hours",
    format: "In-Person Masterclass",
    assessment: "0.5-hour online Multiple-Choice Question (MCQ) Assessment",
    prerequisites: "GCE 'A' Level (2 'A's and 2 'O's) or Diploma + 3 years relevant working experience",
    tscs: [
      {
        name: "Product Advisory",
        proficiencyLevel: 4
      }
    ],
    color: {
      primary: "#7C3AED",
      gradient: "from-purple-600 to-violet-700",
      hover: "hover:bg-purple-700"
    },
    objectives: [
      "Understand the challenges faced by HNWIs and Family-owned businesses",
      "Understand various considerations in structuring end-to-end product solutions",
      "Understand range of product metrics and limitations of products structuring",
      "Evaluate outcomes of customization using proof-of-concept modelling",
      "Conduct competitive analysis using electronic platforms and information sources",
      "Facilitate setting up of product structures including trusts and buy-sell agreements"
    ],
    keyOutcomes: [
      "Evaluate and structure investment products to meet sophisticated client goals",
      "Compare local vs. offshore offerings and align with client suitability",
      "Master bespoke structures: UL/VUL/IUL, PPLI, ILPs, EAM, trusts and alternative investments"
    ],
    whatYouLearn: [
      {
        category: "Advanced Product Structures",
        topics: [
          "Universal Life (UL/VUL/IUL) structures and applications",
          "Private Placement Life Insurance (PPLI) for HNWIs",
          "Structured products and customization options",
          "Investment-Linked Products (ILPs) for wealthy clients"
        ]
      },
      {
        category: "Trust & Estate Structures",
        topics: [
          "Trust applications and structures",
          "Private Trust Company (PTC) setup and management",
          "Buy-sell agreements for business owners",
          "Estate planning product structures"
        ]
      },
      {
        category: "Investment Solutions",
        topics: [
          "External Asset Management (EAM) arrangements",
          "Alternative investment structures",
          "Local vs offshore product offerings",
          "Tax-efficient investment structuring"
        ]
      },
      {
        category: "Product Structuring & Analysis",
        topics: [
          "Regulatory and tax considerations in solutions",
          "Product metrics and limitations understanding",
          "Proof-of-concept modelling for customization",
          "Competitive analysis using electronic platforms"
        ]
      }
    ],
    outcomes: [
      "Structure bespoke insurance and investment products for HNWIs",
      "Evaluate and customize products to meet sophisticated goals",
      "Understand and apply regulatory and tax considerations",
      "Compare local vs offshore offerings effectively",
      "Facilitate setup of trusts, PTCs, and alternative structures",
      "Conduct thorough competitive analysis for product selection"
    ],
    whoShouldAttend: [
      "Financial advisors requiring advanced product knowledge",
      "Wealth managers serving sophisticated clients",
      "Insurance professionals working with HNWI segment",
      "Advisors wanting to master bespoke product structuring"
    ],
    faqs: [
      {
        question: "What TSCs are covered in this module?",
        answer: "This module addresses Product Advisory (Proficiency Level 4)."
      },
      {
        question: "What products will be covered in detail?",
        answer: "UL/VUL/IUL, PPLI, Structured Products, ILPs, External Asset Management, Trusts, Private Trust Companies, and Alternative Investments."
      },
      {
        question: "Will I learn about offshore structures?",
        answer: "Yes, you'll learn to compare local vs. offshore offerings and understand when each is appropriate for client suitability."
      },
      {
        question: "How many CPD hours will I earn?",
        answer: "You will earn 14 Supplementary (Non-Core) CPD Hours upon completion."
      }
    ],
    partOfCertification: true,
    certificationNote: "This is a core module of the SCFP-HNWI certification program.",
    brochureUrl: "/brochures/scfp-module-3.pdf"
  },
  {
    id: "module-4",
    slug: "financial-planning-sme",
    moduleNumber: "Module 4",
    tpgReference: "TGS-2025052232",
    title: "Financial Planning for SME Businesses",
    subtitle: "Specialized Financial Planning for SMEs & Family Businesses",
    type: "core",
    description: "SMEs and Family-owned businesses are the backbone of Singapore's economy. This module equips learners with skills and knowledge to effectively identify and address financial challenges and provide bespoke financial solutions for SME clients.",
    focus: "Operational risk management, creditor and debtor protection, business continuity planning, employee benefits and talent retention planning, succession planning and successor protection, exit planning for (family-owned) businesses.",
    challenge: "SME business owners face unique financial challenges requiring specialized planning strategies. Most advisors lack the corporate accounting knowledge and financial analysis frameworks needed to serve business-owning clients effectively.",
    solution: "Learn to understand corporate accounting principles, assess financial positions using financial ratios, and apply frameworks to facilitate needs quantification and product recommendations specifically tailored for SMEs and Family-owned businesses.",
    duration: "2 Days",
    totalHours: "14 hours (including 0.5-hour MCQ Assessment)",
    cpdHours: "14 Non-core Supplementary CPD Hours",
    format: "In-Person Masterclass",
    assessment: "0.5-hour online Multiple-Choice Question (MCQ) Assessment",
    prerequisites: "GCE 'A' Level (2 'A's and 2 'O's) or Diploma + 3 years relevant working experience",
    tscs: [
      {
        name: "Personal Finance Advisory",
        proficiencyLevel: 4
      }
    ],
    color: {
      primary: "#7C3AED",
      gradient: "from-purple-600 to-violet-700",
      hover: "hover:bg-purple-700"
    },
    objectives: [
      "Understand corporate accounting principles",
      "Assess financial position of a business using financial ratios and frameworks",
      "Analyze SME financial statements to identify strengths, weaknesses, opportunities and threats (SWOT Analysis)",
      "Apply financial analysis frameworks to facilitate needs quantification and products recommendations",
      "Articulate strategies for SMEs to manage risk exposures and strengthen competitive advantage"
    ],
    keyOutcomes: [
      "Understand corporate accounting principles",
      "Apply frameworks for financial analysis to facilitate needs quantification and products recommendations",
      "Implement effective strategies to meet business and owner's financial objectives",
      "Develop and structure propositions for SMEs and Family-owned businesses",
      "Structure bespoke insurance and investment propositions with personal wealth planning"
    ],
    whatYouLearn: [
      {
        category: "Corporate Financial Analysis",
        topics: [
          "Corporate accounting principles fundamentals",
          "Financial ratios and framework analysis",
          "SME financial statement analysis",
          "SWOT Analysis for business assessment"
        ]
      },
      {
        category: "Risk Management & Protection",
        topics: [
          "Operational risk management for SMEs",
          "Creditor and debtor protection strategies",
          "Business continuity and keyman structures",
          "Risk exposure management frameworks"
        ]
      },
      {
        category: "Business Planning",
        topics: [
          "Employee benefits and talent retention planning",
          "Succession planning for family businesses",
          "Successor protection strategies",
          "Exit planning and structures for business owners"
        ]
      },
      {
        category: "Product Solutions for SMEs",
        topics: [
          "Insurance structures for business protection",
          "Investment products for business goals",
          "Bespoke propositions for SMEs",
          "Integrating personal and business wealth planning"
        ]
      }
    ],
    outcomes: [
      "Master corporate accounting principles for advisory work",
      "Analyze SME financial statements effectively",
      "Apply financial analysis frameworks for needs quantification",
      "Structure protection solutions for operational risks",
      "Design business continuity and succession plans",
      "Develop comprehensive exit planning strategies"
    ],
    whoShouldAttend: [
      "Advisors serving SME and business-owning clients",
      "Financial planners working with family businesses",
      "Insurance professionals targeting business owners",
      "Advisors wanting to specialize in SME financial planning"
    ],
    faqs: [
      {
        question: "What TSCs are covered in this module?",
        answer: "This module addresses Personal Finance Advisory (Proficiency Level 4)."
      },
      {
        question: "Do I need accounting background?",
        answer: "No accounting background required. The module teaches corporate accounting principles from an advisory perspective to help you serve business-owning clients."
      },
      {
        question: "What types of business planning will be covered?",
        answer: "Operational risk, business continuity, employee benefits, talent retention, succession planning, and exit planning using different structures."
      },
      {
        question: "How many CPD hours will I earn?",
        answer: "You will earn 14 Supplementary (Non-Core) CPD Hours upon completion."
      }
    ],
    partOfCertification: true,
    certificationNote: "This is a core module of the SCFP-HNWI certification program.",
    brochureUrl: "/brochures/scfp-module-4.pdf"
  },
  {
    id: "module-5",
    slug: "customer-onboarding-ethics",
    moduleNumber: "Module 5",
    tpgReference: "TGS-2025058974",
    title: "Customer Onboarding & Ethical Culture in Financial Advisory (E-Learning)",
    subtitle: "Ethics, Compliance & Professional Standards for HNWI Advisory",
    type: "core",
    description: "The financial advisory profession demands more than technical knowledge; it requires unwavering ethical practices and leadership. This module transforms compliance obligations into competitive advantage, giving learners a framework to excel where regulations and ethics meet everyday practice.",
    focus: "HNWIs and Family-owned businesses customer onboarding processes, compliance and AML safeguards, ethical code and professional conduct, building a culture of ethics, trust and professionalism.",
    challenge: "HNWI advisory involves complex ethical situations, regulatory requirements, and professional liability risks. Advisors must navigate AML, KYC, and fiduciary responsibilities while maintaining highest professional standards.",
    solution: "Learn to lead professional practice with integrity, incorporate ethical risk controls into every stage of the client-advisor journey, and demonstrate to clients, regulators, and employers that you are the trusted professional of choice.",
    duration: "Asynchronous E-Learning",
    totalHours: "6 hours (including 1-hour MCQ Assessment)",
    cpdHours: "6 Core FAA-FACPD Hours",
    format: "E-Learning",
    assessment: "1-hour online Multiple-Choice Question (MCQ) Assessment",
    prerequisites: "GCE 'A' Level (2 'A's and 2 'O's) or Diploma + 3 years relevant working experience",
    tscs: [
      {
        name: "Ethical Culture",
        proficiencyLevel: 4
      },
      {
        name: "Customer Acceptance Checking and Onboarding",
        proficiencyLevel: 4
      }
    ],
    color: {
      primary: "#7C3AED",
      gradient: "from-purple-600 to-violet-700",
      hover: "hover:bg-purple-700"
    },
    objectives: [
      "Understand and apply KYC/CDD/AML regulations relating to their job role",
      "Apply fraud and AML detection procedures",
      "Be kept abreast on trends about mitigation of CFT and Proliferation Financing scenarios",
      "Appreciate Financial Services Industry CFT and Proliferation Financing best practices",
      "Articulate and appreciate relevant ethics pronouncements",
      "Discuss and articulate relevant codes of professional conduct and ethics",
      "Apply ethical principles, financial markets code of conduct, and market practices into practice"
    ],
    keyOutcomes: [
      "Apply MAS requirements for customer onboarding and AML/CFT controls",
      "Apply ethical principles, financial markets code of conduct, and market practices into financial planning practices",
      "Foster ethical decision-making and organisational culture"
    ],
    whatYouLearn: [
      {
        category: "Customer Onboarding & AML",
        topics: [
          "KYC/CDD/AML regulations for financial advisors",
          "Customer acceptance checking procedures",
          "Fraud and AML detection techniques",
          "MAS requirements for customer onboarding"
        ]
      },
      {
        category: "Counter-Terrorism & Financial Crime",
        topics: [
          "Counter-Financing of Terrorism (CFT) scenarios",
          "Proliferation Financing mitigation",
          "Financial Services Industry best practices",
          "Regulatory compliance frameworks"
        ]
      },
      {
        category: "Ethics & Professional Conduct",
        topics: [
          "Ethical principles in financial advisory",
          "Financial markets code of conduct",
          "Professional ethics pronouncements",
          "Market practices and standards"
        ]
      },
      {
        category: "Ethical Culture Building",
        topics: [
          "Fostering ethical decision-making",
          "Building organisational ethical culture",
          "Social and environmental performance reporting",
          "Leading with integrity in HNWI advisory"
        ]
      }
    ],
    outcomes: [
      "Apply MAS requirements for customer onboarding effectively",
      "Implement robust AML/CFT controls",
      "Detect and prevent fraud and financial crimes",
      "Apply ethical principles in financial planning practice",
      "Foster ethical decision-making in your organization",
      "Build culture of trust and professionalism"
    ],
    whoShouldAttend: [
      "All financial advisors completing SCFP-HNWI certification",
      "Licensed representatives requiring ethics and compliance training",
      "Advisors managing HNWI client onboarding",
      "Practice owners building ethical frameworks"
    ],
    faqs: [
      {
        question: "What TSCs are covered in this module?",
        answer: "This module addresses Ethical Culture (Proficiency Level 4) and Customer Acceptance Checking and Onboarding (Proficiency Level 4)."
      },
      {
        question: "Is this module entirely online?",
        answer: "Yes, this is delivered via asynchronous e-learning, allowing you to complete it at your own pace."
      },
      {
        question: "What type of CPD hours will I earn?",
        answer: "You will earn 6 Core FAA-FACPD Hours (not supplementary) upon completion."
      },
      {
        question: "Why is this module important?",
        answer: "HNWI advisory involves significant ethical and regulatory complexity. This module protects both your clients and your practice by ensuring highest professional standards."
      }
    ],
    partOfCertification: true,
    certificationNote: "This is a core module of the SCFP-HNWI certification program.",
    brochureUrl: "/brochures/scfp-module-5.pdf"
  },
  {
    id: "module-6a",
    slug: "gig-economy-planning",
    moduleNumber: "Module 6A",
    tpgReference: "TGS-2024052176",
    title: "Financial Planning for Gig Economy Workers in Singapore",
    subtitle: "Elective: Specialized Planning for Non-Traditional Income",
    type: "elective",
    description: "The gig economy comprises many potential client segments by income, from low-income platform workers to high-income freelance consultants. This module equips learners with knowledge and competencies to navigate complexities of financial planning for gig economy workers.",
    focus: "Financial planning strategies for gig economy workers, self-employed individuals and professionals.",
    challenge: "Gig workers face unique challenges - irregular income, lack of CPF contributions, no employer benefits, and exposure to market uncertainties. Traditional financial planning approaches don't address these realities effectively.",
    solution: "Learn to address income and savings irregularities, structure product solutions suited to variable income streams, and guide gig workers towards long-term financial security despite unique challenges they face.",
    duration: "2 Days",
    totalHours: "14 hours (including 1-hour MCQ Assessment)",
    cpdHours: "14 Non-core Supplementary CPD Hours",
    format: "In-Person Masterclass",
    assessment: "1-hour online Multiple-Choice Question (MCQ) Assessment",
    prerequisites: "GCE 'A' Level (2 'A's and 2 'O's) or Diploma + 3 years relevant working experience",
    tscs: [
      {
        name: "Personal Finance Advisory",
        proficiencyLevel: 4
      }
    ],
    color: {
      primary: "#7C3AED",
      gradient: "from-purple-600 to-violet-700",
      hover: "hover:bg-purple-700"
    },
    objectives: [
      "Comprehend the gig-economy landscape in Singapore",
      "Understand relevant financial planning methodologies and estate planning approaches for gig economy workers",
      "Collect and analyze financial documents to develop strategies addressing irregular income",
      "Implement holistic financial plan for clients in different segments (low-income to high-income)",
      "Implement investment planning strategies to meet client's financial objectives",
      "Manage customer relationships to build credibility and trust"
    ],
    keyOutcomes: [
      "Address challenges of income and savings irregularities facing clients in the gig economy",
      "Structure product solutions suited to variable income streams, including retirement security planning",
      "Guide gig workers towards long-term financial security despite lack of CPF contribution and irregular income"
    ],
    whatYouLearn: [
      {
        category: "Gig Economy Landscape",
        topics: [
          "Understanding Singapore's gig economy ecosystem",
          "Different client segments: platform workers to consultants",
          "Income patterns and volatility analysis",
          "Market uncertainties and business environment"
        ]
      },
      {
        category: "Financial Planning for Variable Income",
        topics: [
          "Strategies for irregular income management",
          "Savings approaches for volatile earnings",
          "Cash flow planning for self-employed",
          "Integrating government support schemes"
        ]
      },
      {
        category: "Retirement & Investment Planning",
        topics: [
          "Retirement planning without CPF contributions",
          "Building financial security for future exit",
          "Investment strategies for gig workers",
          "Supplementary savings options and structures"
        ]
      },
      {
        category: "Holistic Planning & Relationship Management",
        topics: [
          "Estate planning for self-employed professionals",
          "Document collection and analysis frameworks",
          "Building credibility and trust with gig clients",
          "Managing and resolving client issues effectively"
        ]
      }
    ],
    outcomes: [
      "Comprehend gig economy landscape and client segments in Singapore",
      "Develop strategies for irregular income and savings challenges",
      "Structure product solutions for variable income streams",
      "Plan retirement security without traditional CPF structure",
      "Implement holistic financial plans across income segments",
      "Build strong relationships with gig economy clients"
    ],
    whoShouldAttend: [
      "Advisors serving entrepreneurs and self-employed clients",
      "Financial planners targeting gig economy segment",
      "Advisors wanting niche specialization in non-traditional income",
      "Practitioners serving high-income freelance professionals"
    ],
    faqs: [
      {
        question: "What TSCs are covered in this module?",
        answer: "This module addresses Personal Finance Advisory (Proficiency Level 4)."
      },
      {
        question: "Why choose this elective over Module 6B?",
        answer: "Choose Module 6A if your target clients include entrepreneurs, gig workers, self-employed professionals, or high-earning freelancers with variable income."
      },
      {
        question: "Is this elective required for certification?",
        answer: "You must complete ONE elective (either 6A or 6B) for SCFP-HNWI certification. Choose based on your practice focus."
      },
      {
        question: "How many CPD hours will I earn?",
        answer: "You will earn 14 Supplementary (Non-Core) CPD Hours upon completion."
      }
    ],
    partOfCertification: true,
    certificationNote: "This is an elective module. Choose either Module 6A or 6B for certification.",
    brochureUrl: "/brochures/scfp-module-6a.pdf"
  },
  {
    id: "module-6b",
    slug: "retirement-planning-hnw",
    moduleNumber: "Module 6B",
    tpgReference: "TGS-2025052345",
    title: "Retirement Planning for High-Net-Worth Individuals and Business Owners",
    subtitle: "Elective: Advanced Retirement & Exit Planning for HNWIs",
    type: "elective",
    description: "This rigorous, industry-focused program equips learners with advanced knowledge and competencies to address retirement challenges of HNWIs and Family-owned businesses, incorporating practical application for exceptional advisory services.",
    focus: "Retirement as a form of anticipated exit for members of Family-owned businesses and HNWIs. Accumulation and decumulation planning, integration of succession and retirement planning, apply tax-efficient retirement structures.",
    challenge: "HNWIs and business owners face unique retirement challenges - timing business exits, integrating succession with retirement, managing complex portfolios, and addressing multi-jurisdictional considerations that standard retirement planning doesn't cover.",
    solution: "Learn to structure retirement planning portfolios that integrate exit strategies and succession planning. Apply trust, insurance, and investment solutions to ensure income continuity while addressing multi-jurisdictional retirement and estate considerations.",
    duration: "2 Days",
    totalHours: "14 hours (including 1-hour MCQ Assessment)",
    cpdHours: "14 Non-core Supplementary CPD Hours",
    format: "In-Person Masterclass",
    assessment: "1-hour online Multiple-Choice Question (MCQ) Assessment",
    prerequisites: "GCE 'A' Level (2 'A's and 2 'O's) or Diploma + 3 years relevant working experience",
    tscs: [
      {
        name: "Personal Finance Advisory",
        proficiencyLevel: 4
      }
    ],
    color: {
      primary: "#7C3AED",
      gradient: "from-purple-600 to-violet-700",
      hover: "hover:bg-purple-700"
    },
    objectives: [
      "Apply business ownership and retirement planning processes to develop holistic retirement plans",
      "Confidently articulate retirement planning process to strengthen credibility",
      "Navigate Singapore's legal framework for estate planning in retirement context",
      "Conduct document analysis to identify cash flow and estate planning gaps",
      "Understand financial products criteria and apply structures to retirement objectives",
      "Apply investment planning methodologies for accumulation and decumulation portfolios",
      "Establish and maintain long-term client relationships"
    ],
    keyOutcomes: [
      "Structure retirement planning portfolios that integrate exit strategies and succession planning",
      "Apply trust, insurance, and investment solutions to ensure income continuity",
      "Address multi-jurisdictional retirement and estate considerations for HNWIs"
    ],
    whatYouLearn: [
      {
        category: "HNWI Retirement Framework",
        topics: [
          "Business ownership and retirement planning integration",
          "Retirement as anticipated exit for business owners",
          "Holistic retirement planning for HNWIs",
          "Articulating retirement process to wealthy clients"
        ]
      },
      {
        category: "Estate Planning in Retirement",
        topics: [
          "Singapore's legal framework for estate planning",
          "Estate planning concerns in retirement context",
          "Document analysis for gap identification",
          "Cash flow and estate planning integration"
        ]
      },
      {
        category: "Product Structures & Solutions",
        topics: [
          "Financial products for retirement objectives",
          "Trust structures for income continuity",
          "Insurance solutions in retirement planning",
          "Tax-efficient retirement structures"
        ]
      },
      {
        category: "Investment & Portfolio Planning",
        topics: [
          "Accumulation portfolio construction",
          "Decumulation strategies for retirement income",
          "Multi-jurisdictional retirement considerations",
          "Investment methodologies for HNWIs in retirement"
        ]
      }
    ],
    outcomes: [
      "Develop holistic retirement plans integrating business exit",
      "Structure portfolios for accumulation and decumulation phases",
      "Apply tax-efficient retirement structures effectively",
      "Address multi-jurisdictional retirement considerations",
      "Ensure income continuity through trust and insurance solutions",
      "Build long-term relationships through retirement advisory"
    ],
    whoShouldAttend: [
      "Advisors serving HNWIs approaching retirement",
      "Financial planners working with business owners planning exits",
      "Wealth managers focused on retirement income planning",
      "Advisors wanting to specialize in HNWI retirement strategies"
    ],
    faqs: [
      {
        question: "What TSCs are covered in this module?",
        answer: "This module addresses Personal Finance Advisory (Proficiency Level 4)."
      },
      {
        question: "Why choose this elective over Module 6A?",
        answer: "Choose Module 6B if your target clients are HNWIs or business owners approaching or in retirement, particularly those planning business exits and succession."
      },
      {
        question: "Is this elective required for certification?",
        answer: "You must complete ONE elective (either 6A or 6B) for SCFP-HNWI certification. Choose based on your client demographics."
      },
      {
        question: "How many CPD hours will I earn?",
        answer: "You will earn 14 Supplementary (Non-Core) CPD Hours upon completion."
      }
    ],
    partOfCertification: true,
    certificationNote: "This is an elective module. Choose either Module 6A or 6B for certification.",
    brochureUrl: "/brochures/scfp-module-6b.pdf"
  }
];

export function getSCFPModuleBySlug(slug: string): SCFPModulePage | undefined {
  return scfpModulePages.find(module => module.slug === slug);
}

export function getAllSCFPModuleSlugs(): string[] {
  return scfpModulePages.map(module => module.slug);
}

export function getCoreModules(): SCFPModulePage[] {
  return scfpModulePages.filter(module => module.type === 'core');
}

export function getElectiveModules(): SCFPModulePage[] {
  return scfpModulePages.filter(module => module.type === 'elective');
}
