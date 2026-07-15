export interface SolutionContent {
  name: string;
  /** The buyer's own phrasing — powers headings and AI intent matching. */
  intent: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: string;
  problem: string;
  features: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  idealFor: string[];
  timeline: string;
  startingFrom: string;
  faqs: { q: string; a: string }[];
  cta: string;
}

export interface Solution {
  slug: string;
  icon: string; // lucide icon key, resolved in the page
  projectType: string; // maps to Project.type for related work
  en: SolutionContent;
  ar: SolutionContent;
}

export const solutions: Solution[] = [
  {
    slug: "pos",
    icon: "ShoppingCart",
    projectType: "POS System",
    en: {
      name: "POS / Point-of-Sale System",
      intent: "I want a POS system for my shop or restaurant",
      tagline: "Sell faster, track every branch, and never lose an item of inventory.",
      metaTitle: "POS System Development in Egypt — Custom Point of Sale | Sahlaa",
      metaDescription:
        "Need a POS system for your shop, restaurant, or retail chain in Egypt? Sahlaa builds custom point-of-sale software with inventory, multi-branch, loyalty, Fawry & Vodafone Cash. Get a quote.",
      keywords: [
        "POS system Egypt",
        "point of sale software Cairo",
        "restaurant POS Egypt",
        "retail POS system",
        "cashier system Egypt",
        "multi-branch POS",
      ],
      hero:
        "If you run a shop, restaurant, pharmacy, or a chain of branches, you need a point-of-sale system that is fast at the counter and accurate in the back office. Sahlaa builds custom POS software tailored to how your business actually sells — not a rigid template you have to fight.",
      problem:
        "Off-the-shelf POS tools break down when you grow: inventory drifts out of sync between branches, reports don't match reality, and local payment methods aren't supported. We build a system that fits your workflow, works offline when the internet drops, and gives the owner one clear view of every branch.",
      features: [
        { title: "Fast, offline-ready checkout", desc: "A touch-friendly counter interface that keeps selling even when the connection drops, then syncs automatically." },
        { title: "Real-time inventory", desc: "Stock levels update instantly across every branch, with low-stock alerts and purchase orders." },
        { title: "Multi-branch dashboard", desc: "One owner view of sales, staff performance, and stock across all locations." },
        { title: "Local payments", desc: "Cash, cards, Fawry, Vodafone Cash, InstaPay — the methods your customers actually use." },
        { title: "Loyalty & customers", desc: "Loyalty points, customer profiles, and targeted promotions built in." },
        { title: "Financial reports", desc: "Daily, shift, and monthly reports that reconcile with your accounting." },
      ],
      process: [
        { title: "Map your workflow", desc: "We watch how you sell and stock, then design the system around it." },
        { title: "Build & pilot", desc: "We roll out to one branch first, refine, then scale to the rest." },
        { title: "Train & support", desc: "Staff training, data migration, and ongoing technical support." },
      ],
      idealFor: ["Retail shops & chains", "Restaurants & cafés", "Pharmacies", "Supermarkets", "Wholesale & distribution"],
      timeline: "Typically 6–12 weeks depending on branches and integrations.",
      startingFrom: "Scoped per branch count and features — request a fixed quote.",
      faqs: [
        { q: "How much does a POS system cost in Egypt?", a: "It depends on the number of branches, hardware, and features like loyalty or accounting integration. Sahlaa provides a fixed, itemized quote after a short discovery call — most single-branch systems start small and scale with add-ons." },
        { q: "Does the POS work without internet?", a: "Yes. Our POS is offline-capable — the checkout keeps working during outages and syncs to the cloud automatically once the connection returns." },
        { q: "Can it support Fawry and Vodafone Cash?", a: "Yes. We integrate the local payment methods your customers use, including Fawry, Vodafone Cash, InstaPay, and card terminals." },
        { q: "Can I manage multiple branches from one place?", a: "Absolutely. Owners get a single dashboard covering sales, inventory, and staff performance across every branch in real time." },
      ],
      cta: "Tell us about your shop and get a POS quote",
    },
    ar: {
      name: "نظام نقاط البيع (POS)",
      intent: "عايز نظام نقاط بيع لمحلي أو مطعمي",
      tagline: "بِع أسرع، تابع كل فرع، ولا تفقد أي صنف في المخزون.",
      metaTitle: "برمجة أنظمة نقاط البيع في مصر — نظام كاشير مخصص | سهلة",
      metaDescription:
        "محتاج نظام نقاط بيع لمحلك أو مطعمك أو سلسلة فروعك في مصر؟ سهلة تبني أنظمة POS مخصصة مع إدارة مخزون وفروع متعددة وبرامج ولاء ودعم فوري وفودافون كاش. اطلب عرض سعر.",
      keywords: [
        "نظام نقاط بيع مصر",
        "برنامج كاشير القاهرة",
        "نظام نقاط بيع مطاعم",
        "برنامج نقاط بيع محلات",
        "نظام كاشير مصر",
        "نقاط بيع متعددة الفروع",
      ],
      hero:
        "لو عندك محل أو مطعم أو صيدلية أو سلسلة فروع، محتاج نظام نقاط بيع سريع عند الكاشير ودقيق في الإدارة. سهلة تبني نظام POS مخصص حسب طريقة بيعك فعلاً — مش قالب جامد تضطر تتأقلم معاه.",
      problem:
        "الأنظمة الجاهزة بتتعطل مع النمو: المخزون يختلف بين الفروع، التقارير متطابقش الواقع، وطرق الدفع المحلية مش مدعومة. إحنا نبني نظام يناسب سير عملك، يشتغل أوفلاين لما النت يفصل، ويعطي المالك رؤية واضحة لكل فرع.",
      features: [
        { title: "كاشير سريع يعمل أوفلاين", desc: "واجهة بيع سهلة اللمس تكمل شغل حتى لو النت فصل، وتتزامن تلقائياً بعد رجوعه." },
        { title: "مخزون فوري", desc: "مستويات المخزون تتحدث لحظياً عبر كل الفروع مع تنبيهات النقص وأوامر الشراء." },
        { title: "لوحة تحكم للفروع", desc: "رؤية واحدة للمالك للمبيعات وأداء الموظفين والمخزون في كل الفروع." },
        { title: "طرق دفع محلية", desc: "كاش، بطاقات، فوري، فودافون كاش، إنستا باي — الطرق اللي عملاؤك بيستخدموها فعلاً." },
        { title: "الولاء والعملاء", desc: "نقاط ولاء وملفات عملاء وعروض موجهة مدمجة." },
        { title: "تقارير مالية", desc: "تقارير يومية وللورديات وشهرية تتطابق مع حساباتك." },
      ],
      process: [
        { title: "دراسة سير العمل", desc: "نراقب طريقة بيعك وتخزينك ونصمم النظام حولها." },
        { title: "البناء والتجربة", desc: "نبدأ بفرع واحد، نحسّن، ثم نوسّع للباقي." },
        { title: "التدريب والدعم", desc: "تدريب الموظفين ونقل البيانات ودعم فني مستمر." },
      ],
      idealFor: ["محلات وسلاسل تجزئة", "مطاعم وكافيهات", "صيدليات", "سوبر ماركت", "جملة وتوزيع"],
      timeline: "عادة من ٦ إلى ١٢ أسبوعاً حسب عدد الفروع والتكاملات.",
      startingFrom: "يُحدَّد حسب عدد الفروع والمميزات — اطلب عرض سعر ثابت.",
      faqs: [
        { q: "كم تكلفة نظام نقاط البيع في مصر؟", a: "تعتمد على عدد الفروع والأجهزة ومميزات مثل الولاء أو التكامل المحاسبي. سهلة تقدم عرض سعر ثابت ومفصّل بعد مكالمة قصيرة — معظم الأنظمة أحادية الفرع تبدأ صغيرة وتتوسع بالإضافات." },
        { q: "هل يعمل النظام بدون إنترنت؟", a: "نعم. نظامنا يعمل أوفلاين — الكاشير يكمل شغل أثناء انقطاع النت ويتزامن تلقائياً بعد رجوع الاتصال." },
        { q: "هل يدعم فوري وفودافون كاش؟", a: "نعم. ندمج طرق الدفع المحلية التي يستخدمها عملاؤك، بما فيها فوري وفودافون كاش وإنستا باي وأجهزة البطاقات." },
        { q: "هل أقدر أدير عدة فروع من مكان واحد؟", a: "بالتأكيد. يحصل المالك على لوحة واحدة تغطي المبيعات والمخزون وأداء الموظفين في كل فرع لحظياً." },
      ],
      cta: "احكِ لنا عن محلك واحصل على عرض سعر",
    },
  },
  {
    slug: "erp",
    icon: "Building2",
    projectType: "ERP Platform",
    en: {
      name: "ERP / Business Management System",
      intent: "I want one system to run my whole company",
      tagline: "HR, finance, inventory, and operations — unified in one platform.",
      metaTitle: "Custom ERP Development in Egypt — Business Management System | Sahlaa",
      metaDescription:
        "Replace scattered spreadsheets with a custom ERP built for your business. Sahlaa develops HR, finance, inventory, and operations systems for Egyptian and MENA companies. Request a demo.",
      keywords: [
        "ERP Egypt",
        "ERP development Cairo",
        "business management system Egypt",
        "custom ERP software",
        "HR and finance system Egypt",
        "inventory management system",
      ],
      hero:
        "When your company runs on WhatsApp messages, spreadsheets, and disconnected apps, things slip through the cracks. An ERP brings HR, finance, procurement, inventory, and operations into one system so everyone works from the same source of truth.",
      problem:
        "Generic ERPs are expensive, bloated, and force your team to work the vendor's way. Sahlaa builds a right-sized ERP around your real processes — you get exactly the modules you need, in Arabic and English, without paying for features you'll never use.",
      features: [
        { title: "Finance & accounting", desc: "Invoicing, expenses, payroll, and reports that match Egyptian requirements." },
        { title: "HR & payroll", desc: "Employees, attendance, leave, and salary in one place." },
        { title: "Inventory & procurement", desc: "Stock, suppliers, purchase orders, and warehouses connected end to end." },
        { title: "Roles & permissions", desc: "Every team sees exactly what they should — nothing more." },
        { title: "Dashboards & reports", desc: "Live KPIs for management, exportable reports for accounting and audits." },
        { title: "Bilingual & cloud", desc: "Full Arabic/English interface, accessible securely from anywhere." },
      ],
      process: [
        { title: "Process discovery", desc: "We document how each department works and where time is lost." },
        { title: "Modular build", desc: "We deliver module by module so you see value early." },
        { title: "Rollout & training", desc: "Data migration, staff training, and phased go-live." },
      ],
      idealFor: ["Growing SMEs", "Manufacturers & factories", "Distribution & logistics", "Multi-department companies", "Service businesses"],
      timeline: "Typically 3–6 months, delivered module by module.",
      startingFrom: "Priced by modules and users — book a discovery call for a quote.",
      faqs: [
        { q: "What is an ERP and do I need one?", a: "An ERP (Enterprise Resource Planning) system unifies your core business functions — finance, HR, inventory, operations — into one connected platform. If your team juggles multiple spreadsheets and apps that don't talk to each other, a custom ERP removes the double-entry and gives management one accurate picture." },
        { q: "Custom ERP vs. ready-made like Odoo or SAP?", a: "Ready-made ERPs work if your processes fit their model. Many Egyptian businesses find them costly and rigid. Sahlaa builds a right-sized custom ERP around your actual workflow — you own it, it's bilingual, and you only pay for the modules you use." },
        { q: "How long does ERP implementation take?", a: "We deliver module by module, so you get value in the first weeks rather than waiting months. A typical mid-size rollout runs 3–6 months depending on scope." },
        { q: "Is the system available in Arabic?", a: "Yes — the entire interface is fully bilingual Arabic/English with proper right-to-left support." },
      ],
      cta: "Book an ERP discovery call",
    },
    ar: {
      name: "نظام تخطيط موارد المؤسسات (ERP)",
      intent: "عايز نظام واحد يدير شركتي كلها",
      tagline: "الموارد البشرية والمالية والمخزون والعمليات — موحّدة في منصة واحدة.",
      metaTitle: "تطوير أنظمة ERP مخصصة في مصر — نظام إدارة الأعمال | سهلة",
      metaDescription:
        "استبدل ملفات الإكسل المبعثرة بنظام ERP مخصص لأعمالك. سهلة تطوّر أنظمة موارد بشرية ومالية ومخزون وعمليات للشركات في مصر والمنطقة. اطلب عرضاً توضيحياً.",
      keywords: [
        "ERP مصر",
        "تطوير أنظمة ERP القاهرة",
        "نظام إدارة الأعمال مصر",
        "برنامج ERP مخصص",
        "نظام موارد بشرية ومالية",
        "نظام إدارة مخزون",
      ],
      hero:
        "لما شركتك بتشتغل على رسائل واتساب وملفات إكسل وتطبيقات منفصلة، حاجات كتير بتضيع. نظام ERP بيجمع الموارد البشرية والمالية والمشتريات والمخزون والعمليات في نظام واحد عشان الكل يشتغل من مصدر واحد للحقيقة.",
      problem:
        "أنظمة ERP الجاهزة غالية ومعقدة وبتجبر فريقك يشتغل بطريقة المورّد. سهلة تبني ERP بالمقاس حول عملياتك الفعلية — تحصل على الوحدات اللي محتاجها بالضبط، بالعربي والإنجليزي، بدون ما تدفع لمميزات مش هتستخدمها.",
      features: [
        { title: "المالية والمحاسبة", desc: "فواتير ومصروفات ورواتب وتقارير تطابق المتطلبات المصرية." },
        { title: "الموارد البشرية والرواتب", desc: "الموظفون والحضور والإجازات والرواتب في مكان واحد." },
        { title: "المخزون والمشتريات", desc: "المخزون والموردون وأوامر الشراء والمخازن مترابطة بالكامل." },
        { title: "الأدوار والصلاحيات", desc: "كل فريق يرى ما يخصه فقط — لا أكثر." },
        { title: "لوحات وتقارير", desc: "مؤشرات أداء حية للإدارة وتقارير قابلة للتصدير للمحاسبة والتدقيق." },
        { title: "ثنائي اللغة وسحابي", desc: "واجهة عربية/إنجليزية كاملة، متاحة بأمان من أي مكان." },
      ],
      process: [
        { title: "دراسة العمليات", desc: "نوثّق طريقة عمل كل قسم وأين يضيع الوقت." },
        { title: "بناء تدريجي", desc: "نسلّم وحدة بعد وحدة لترى القيمة مبكراً." },
        { title: "الإطلاق والتدريب", desc: "نقل البيانات وتدريب الموظفين وإطلاق تدريجي." },
      ],
      idealFor: ["الشركات الصغيرة والمتوسطة النامية", "المصانع", "التوزيع واللوجستيات", "الشركات متعددة الأقسام", "شركات الخدمات"],
      timeline: "عادة من ٣ إلى ٦ أشهر، تُسلَّم وحدة بعد وحدة.",
      startingFrom: "يُسعَّر حسب الوحدات والمستخدمين — احجز مكالمة لعرض السعر.",
      faqs: [
        { q: "ما هو نظام ERP وهل أحتاجه؟", a: "نظام ERP يوحّد وظائف عملك الأساسية — المالية والموارد البشرية والمخزون والعمليات — في منصة واحدة مترابطة. لو فريقك بيتنقّل بين ملفات وتطبيقات متكلمش بعض، ERP المخصص بيشيل الإدخال المزدوج ويعطي الإدارة صورة دقيقة واحدة." },
        { q: "ERP مخصص أم جاهز مثل Odoo أو SAP؟", a: "الأنظمة الجاهزة تنفع لو عملياتك تناسب نموذجها. كثير من الشركات المصرية تجدها مكلفة وجامدة. سهلة تبني ERP مخصصاً بالمقاس حول سير عملك الفعلي — أنت تملكه، ثنائي اللغة، وتدفع فقط للوحدات التي تستخدمها." },
        { q: "كم يستغرق تطبيق نظام ERP؟", a: "نسلّم وحدة بعد وحدة، فتحصل على قيمة في الأسابيع الأولى بدلاً من الانتظار شهوراً. التطبيق المتوسط يستغرق من ٣ إلى ٦ أشهر حسب النطاق." },
        { q: "هل النظام متاح بالعربية؟", a: "نعم — الواجهة بالكامل ثنائية اللغة عربي/إنجليزي مع دعم كامل للكتابة من اليمين لليسار." },
      ],
      cta: "احجز مكالمة استكشافية لنظام ERP",
    },
  },
  {
    slug: "startup-mvp",
    icon: "Rocket",
    projectType: "Mobile App",
    en: {
      name: "Startup MVP",
      intent: "I have a startup idea and want to build it",
      tagline: "Turn your idea into a real product users can try — fast.",
      metaTitle: "Build Your Startup MVP in Egypt — Idea to Product | Sahlaa",
      metaDescription:
        "Have a startup idea? Sahlaa helps founders in Egypt and MENA turn it into a launch-ready MVP — web or mobile app — with clean code you own. Start building.",
      keywords: [
        "startup MVP Egypt",
        "build a startup app",
        "MVP development Cairo",
        "app for my idea Egypt",
        "software for startups MENA",
        "technical co-founder alternative",
      ],
      hero:
        "You have an idea and you need to see it live — in the hands of real users — without burning your budget. Sahlaa acts as your product and engineering team, taking you from concept to a launch-ready MVP with clean, scalable code that you fully own.",
      problem:
        "Most ideas fail not because they're bad, but because founders over-build before they validate. We help you cut the idea down to the sharpest version that proves the value, ship it quickly, and iterate based on what real users do.",
      features: [
        { title: "Idea to scope", desc: "We help you define the smallest product that proves your core value." },
        { title: "Web or mobile MVP", desc: "A polished, launch-ready app on the platform your users are on." },
        { title: "Clean, owned code", desc: "No lock-in — you own the codebase and can scale or hand it to your team." },
        { title: "Payments & auth", desc: "Sign-up, subscriptions, and local payment methods built in." },
        { title: "Analytics from day one", desc: "See how users behave so you can decide what to build next." },
        { title: "Scale-ready foundation", desc: "Architecture that grows from your first 100 to your first 100,000 users." },
      ],
      process: [
        { title: "Shape the MVP", desc: "A focused workshop to define scope, users, and success metrics." },
        { title: "Design & build", desc: "Weekly demos so you steer the product as it takes shape." },
        { title: "Launch & iterate", desc: "We ship, watch real usage, and improve fast." },
      ],
      idealFor: ["First-time founders", "Non-technical founders", "Funded startups", "Corporate innovation teams", "Side projects going full-time"],
      timeline: "A focused MVP typically ships in 6–12 weeks.",
      startingFrom: "Fixed-scope MVP packages — tell us your idea for a quote.",
      faqs: [
        { q: "What is an MVP and why start there?", a: "An MVP (Minimum Viable Product) is the simplest version of your product that delivers real value to early users. Starting there lets you validate demand and learn from real usage before investing in a full build — saving time and money." },
        { q: "I'm not technical — can you still help?", a: "Yes. Many of our founders are non-technical. We handle product decisions, design, and engineering, explain trade-offs in plain language, and keep you in control of the roadmap." },
        { q: "Do I own the code?", a: "Completely. There's no lock-in — you own the full codebase, accounts, and infrastructure, and can bring in your own team any time." },
        { q: "How much does it cost to build an MVP in Egypt?", a: "It depends on scope, but building in Egypt with Sahlaa is significantly more cost-effective than agencies abroad. We scope a fixed price after a short workshop so there are no surprises." },
      ],
      cta: "Tell us your startup idea",
    },
    ar: {
      name: "منتج أولي للشركات الناشئة (MVP)",
      intent: "عندي فكرة مشروع ناشئ وعايز أنفّذها",
      tagline: "حوّل فكرتك إلى منتج حقيقي يجرّبه المستخدمون — بسرعة.",
      metaTitle: "بناء المنتج الأولي لمشروعك الناشئ في مصر — من الفكرة للمنتج | سهلة",
      metaDescription:
        "عندك فكرة مشروع ناشئ؟ سهلة تساعد المؤسسين في مصر والمنطقة على تحويلها إلى منتج أولي جاهز للإطلاق — ويب أو موبايل — بكود نظيف تملكه. ابدأ الآن.",
      keywords: [
        "منتج أولي مصر",
        "بناء تطبيق مشروع ناشئ",
        "تطوير MVP القاهرة",
        "تطبيق لفكرتي مصر",
        "برمجيات للشركات الناشئة",
        "شريك تقني للمؤسسين",
      ],
      hero:
        "عندك فكرة وعايز تشوفها شغالة — في إيد مستخدمين حقيقيين — من غير ما تستهلك ميزانيتك. سهلة بتشتغل كفريق المنتج والهندسة بتاعك، وتاخدك من الفكرة لمنتج أولي جاهز للإطلاق بكود نظيف وقابل للتوسع تملكه بالكامل.",
      problem:
        "معظم الأفكار بتفشل مش لأنها سيئة، لكن لأن المؤسسين بيبنوا أكتر من اللازم قبل ما يتأكدوا. إحنا نساعدك تختصر الفكرة لأقوى نسخة تثبت القيمة، تطلقها بسرعة، وتطوّرها بناءً على تصرفات المستخدمين الحقيقيين.",
      features: [
        { title: "من الفكرة للنطاق", desc: "نساعدك تحدد أصغر منتج يثبت قيمتك الأساسية." },
        { title: "منتج أولي ويب أو موبايل", desc: "تطبيق أنيق جاهز للإطلاق على المنصة اللي مستخدميك عليها." },
        { title: "كود نظيف تملكه", desc: "بدون تقييد — تملك الكود وتقدر توسّع أو تسلّمه لفريقك." },
        { title: "دفع وتسجيل دخول", desc: "تسجيل واشتراكات وطرق دفع محلية مدمجة." },
        { title: "تحليلات من اليوم الأول", desc: "شوف سلوك المستخدمين عشان تقرر تبني إيه بعد كده." },
        { title: "أساس جاهز للتوسع", desc: "بنية تنمو من أول ١٠٠ مستخدم إلى أول ١٠٠ ألف." },
      ],
      process: [
        { title: "تحديد المنتج الأولي", desc: "ورشة مركّزة لتحديد النطاق والمستخدمين ومقاييس النجاح." },
        { title: "التصميم والبناء", desc: "عروض أسبوعية عشان توجّه المنتج وهو بيتشكّل." },
        { title: "الإطلاق والتطوير", desc: "نطلق، نراقب الاستخدام الفعلي، ونحسّن بسرعة." },
      ],
      idealFor: ["المؤسسون لأول مرة", "المؤسسون غير التقنيين", "الشركات الناشئة الممولة", "فرق الابتكار بالشركات", "المشاريع الجانبية"],
      timeline: "المنتج الأولي المركّز يُطلَق عادة خلال ٦ إلى ١٢ أسبوعاً.",
      startingFrom: "باقات منتج أولي بنطاق ثابت — احكِ لنا فكرتك لعرض السعر.",
      faqs: [
        { q: "ما هو المنتج الأولي (MVP) ولماذا نبدأ به؟", a: "المنتج الأولي هو أبسط نسخة من منتجك تقدّم قيمة حقيقية للمستخدمين الأوائل. البدء به يتيح لك التأكد من الطلب والتعلّم من الاستخدام الفعلي قبل الاستثمار في بناء كامل — يوفّر الوقت والمال." },
        { q: "أنا لست تقنياً — هل تقدروا تساعدوني؟", a: "نعم. كثير من مؤسسينا غير تقنيين. نتولى قرارات المنتج والتصميم والهندسة، ونشرح الخيارات بلغة بسيطة، ونبقيك مسيطراً على خارطة الطريق." },
        { q: "هل أملك الكود؟", a: "بالكامل. لا يوجد تقييد — تملك الكود والحسابات والبنية التحتية، وتقدر تضم فريقك في أي وقت." },
        { q: "كم تكلفة بناء منتج أولي في مصر؟", a: "تعتمد على النطاق، لكن البناء في مصر مع سهلة أوفر بكثير من الوكالات في الخارج. نحدد سعراً ثابتاً بعد ورشة قصيرة بدون مفاجآت." },
      ],
      cta: "احكِ لنا فكرة مشروعك",
    },
  },
  {
    slug: "mobile-app",
    icon: "Smartphone",
    projectType: "Mobile App",
    en: {
      name: "Mobile App Development",
      intent: "I want a mobile app for my business or idea",
      tagline: "Native-quality iOS & Android apps your customers will love.",
      metaTitle: "Mobile App Development in Egypt — iOS & Android | Sahlaa",
      metaDescription:
        "Sahlaa builds fast, modern iOS and Android apps for businesses and startups in Egypt and MENA — with offline support, payments, and clean UX. Get a quote.",
      keywords: [
        "mobile app development Egypt",
        "iOS Android app Cairo",
        "app developers Egypt",
        "build a mobile app MENA",
        "flutter app development",
        "delivery app Egypt",
      ],
      hero:
        "Whether you need a delivery app, a booking platform, or a companion app for your service, Sahlaa builds fast, reliable mobile apps that feel native on both iOS and Android — with the polish users expect.",
      problem:
        "A slow, clunky app gets deleted. We focus on performance, clean UX, and the details that keep users coming back — offline support, push notifications, and smooth local payments.",
      features: [
        { title: "iOS & Android", desc: "One codebase, native feel, both stores — cost-effective and consistent." },
        { title: "Offline support", desc: "The app stays useful even on a weak connection." },
        { title: "Push notifications", desc: "Re-engage users with timely, relevant messages." },
        { title: "Payments built in", desc: "Cards, wallets, Fawry, and Vodafone Cash where you need them." },
        { title: "Modern UX", desc: "Clean, fast interfaces designed for real usage, in Arabic and English." },
        { title: "Store launch", desc: "We handle App Store and Google Play submission and approval." },
      ],
      process: [
        { title: "Define & design", desc: "We map the flows and design the screens before writing code." },
        { title: "Build & test", desc: "Regular builds you can install and try on your own phone." },
        { title: "Launch & support", desc: "Store submission, launch, and ongoing updates." },
      ],
      idealFor: ["Delivery & logistics", "Booking & services", "Retail & loyalty", "Startups", "Community & content apps"],
      timeline: "Typically 8–16 weeks depending on features.",
      startingFrom: "Scoped by features and platforms — request a quote.",
      faqs: [
        { q: "How much does it cost to build a mobile app in Egypt?", a: "Cost depends on features, platforms, and integrations. Building with Sahlaa in Egypt is far more affordable than overseas agencies, and we provide a fixed quote after scoping your requirements." },
        { q: "Will the app work on both iPhone and Android?", a: "Yes. We build with a shared codebase that delivers a native-quality experience on both iOS and Android, which keeps cost and timeline efficient." },
        { q: "Can the app work offline?", a: "Yes, where it makes sense. We add offline support so the app stays usable on weak connections and syncs when back online." },
        { q: "Do you handle publishing to the app stores?", a: "We do — we manage the full submission and approval process for both the Apple App Store and Google Play." },
      ],
      cta: "Get a mobile app quote",
    },
    ar: {
      name: "تطوير تطبيقات الموبايل",
      intent: "عايز تطبيق موبايل لمشروعي أو فكرتي",
      tagline: "تطبيقات iOS و Android بجودة أصلية يحبّها عملاؤك.",
      metaTitle: "تطوير تطبيقات الموبايل في مصر — iOS و Android | سهلة",
      metaDescription:
        "سهلة تبني تطبيقات iOS و Android سريعة وعصرية للشركات والمشاريع الناشئة في مصر والمنطقة — مع دعم أوفلاين ودفع وتجربة استخدام نظيفة. اطلب عرض سعر.",
      keywords: [
        "تطوير تطبيقات موبايل مصر",
        "تطبيق iOS Android القاهرة",
        "مطورو تطبيقات مصر",
        "بناء تطبيق موبايل",
        "تطوير تطبيقات فلاتر",
        "تطبيق توصيل مصر",
      ],
      hero:
        "سواء محتاج تطبيق توصيل أو منصة حجز أو تطبيق مصاحب لخدمتك، سهلة تبني تطبيقات موبايل سريعة وموثوقة تحس أصلية على iOS و Android — بالإتقان اللي المستخدمون بيتوقعوه.",
      problem:
        "التطبيق البطيء والمعقد بيتحذف. إحنا نركّز على الأداء وتجربة الاستخدام النظيفة والتفاصيل اللي بتخلي المستخدم يرجع — دعم أوفلاين وإشعارات ودفع محلي سلس.",
      features: [
        { title: "iOS و Android", desc: "كود واحد، إحساس أصلي، المتجرين — أوفر ومتناسق." },
        { title: "دعم أوفلاين", desc: "التطبيق يفضل مفيد حتى على اتصال ضعيف." },
        { title: "إشعارات فورية", desc: "أعِد جذب المستخدمين برسائل مناسبة في وقتها." },
        { title: "دفع مدمج", desc: "بطاقات ومحافظ وفوري وفودافون كاش حيث تحتاج." },
        { title: "تجربة عصرية", desc: "واجهات نظيفة وسريعة مصممة للاستخدام الحقيقي، بالعربي والإنجليزي." },
        { title: "إطلاق على المتاجر", desc: "نتولى رفع التطبيق على App Store و Google Play والموافقة." },
      ],
      process: [
        { title: "التحديد والتصميم", desc: "نرسم المسارات ونصمم الشاشات قبل كتابة الكود." },
        { title: "البناء والاختبار", desc: "نسخ منتظمة تقدر تثبّتها وتجرّبها على موبايلك." },
        { title: "الإطلاق والدعم", desc: "الرفع على المتاجر والإطلاق والتحديثات المستمرة." },
      ],
      idealFor: ["التوصيل واللوجستيات", "الحجز والخدمات", "التجزئة والولاء", "الشركات الناشئة", "تطبيقات المحتوى والمجتمعات"],
      timeline: "عادة من ٨ إلى ١٦ أسبوعاً حسب المميزات.",
      startingFrom: "يُحدَّد حسب المميزات والمنصات — اطلب عرض سعر.",
      faqs: [
        { q: "كم تكلفة بناء تطبيق موبايل في مصر؟", a: "التكلفة تعتمد على المميزات والمنصات والتكاملات. البناء مع سهلة في مصر أوفر بكثير من الوكالات الخارجية، ونقدم عرض سعر ثابت بعد تحديد المتطلبات." },
        { q: "هل يعمل التطبيق على iPhone و Android؟", a: "نعم. نبني بكود مشترك يقدم تجربة بجودة أصلية على الاثنين، مما يوفّر التكلفة والوقت." },
        { q: "هل يعمل التطبيق بدون إنترنت؟", a: "نعم حيث يكون منطقياً. نضيف دعم أوفلاين ليبقى التطبيق قابلاً للاستخدام على الاتصال الضعيف ويتزامن عند العودة." },
        { q: "هل تتولون النشر على المتاجر؟", a: "نعم — ندير عملية الرفع والموافقة بالكامل على App Store و Google Play." },
      ],
      cta: "احصل على عرض سعر لتطبيق موبايل",
    },
  },
  {
    slug: "website",
    icon: "Globe",
    projectType: "Website",
    en: {
      name: "Website & Web App",
      intent: "I want a professional website or web app",
      tagline: "A fast, SEO-ready website that turns visitors into customers.",
      metaTitle: "Website Development in Egypt — Business Sites & Web Apps | Sahlaa",
      metaDescription:
        "Sahlaa builds professional, SEO-optimized websites and web applications for businesses in Egypt and MENA — fast, bilingual, and built to convert. Get started.",
      keywords: [
        "website development Egypt",
        "web design Cairo",
        "business website Egypt",
        "web application development",
        "SEO website Egypt",
        "bilingual website Arabic English",
      ],
      hero:
        "Your website is often the first impression customers get. Sahlaa builds fast, modern, bilingual websites and web applications that look premium, rank well on Google, and turn visitors into leads.",
      problem:
        "A slow, dated, or template-heavy site quietly costs you customers. We build sites that load fast, work perfectly on mobile, are optimized for search and AI discovery, and are easy for your team to update.",
      features: [
        { title: "SEO & AI-ready", desc: "Built for Google and AI answer engines — structured data, speed, and clean content." },
        { title: "Bilingual by default", desc: "Full Arabic/English with proper RTL, indexed separately for reach." },
        { title: "Fast & responsive", desc: "Optimized performance and a flawless mobile experience." },
        { title: "Web apps & portals", desc: "Dashboards, booking systems, and customer portals — not just brochure sites." },
        { title: "Easy to update", desc: "A simple admin so your team edits content without a developer." },
        { title: "Conversion-focused", desc: "Clear calls to action and forms that turn visitors into leads." },
      ],
      process: [
        { title: "Plan & design", desc: "We define goals, structure, and a premium design direction." },
        { title: "Build & optimize", desc: "Fast, accessible, SEO-ready development." },
        { title: "Launch & grow", desc: "Go live, measure, and improve based on real traffic." },
      ],
      idealFor: ["Companies & brands", "Professional services", "E-commerce", "Startups", "Portals & dashboards"],
      timeline: "Typically 3–8 weeks depending on scope.",
      startingFrom: "Scoped by pages and features — request a quote.",
      faqs: [
        { q: "How much does a professional website cost in Egypt?", a: "It depends on the number of pages, whether you need a web app or e-commerce, and languages. Sahlaa provides a fixed quote after understanding your goals — a marketing site costs less than a full web application." },
        { q: "Will my website be found on Google?", a: "Yes. We build with SEO best practices — fast loading, structured data, clean semantic content, and separately-indexed Arabic and English pages — so both search engines and AI answer engines can find and cite you." },
        { q: "Can the site be in both Arabic and English?", a: "Yes. Bilingual is our default, with proper right-to-left support and each language on its own indexable URL for maximum reach." },
        { q: "Can my team update the website ourselves?", a: "Yes. We include a simple content admin so your team can edit text and content without needing a developer." },
      ],
      cta: "Get a website quote",
    },
    ar: {
      name: "المواقع وتطبيقات الويب",
      intent: "عايز موقع احترافي أو تطبيق ويب",
      tagline: "موقع سريع ومهيأ لمحركات البحث يحوّل الزوّار إلى عملاء.",
      metaTitle: "تطوير المواقع في مصر — مواقع الشركات وتطبيقات الويب | سهلة",
      metaDescription:
        "سهلة تبني مواقع وتطبيقات ويب احترافية ومهيأة لمحركات البحث للشركات في مصر والمنطقة — سريعة وثنائية اللغة ومصممة للتحويل. ابدأ الآن.",
      keywords: [
        "تطوير مواقع مصر",
        "تصميم مواقع القاهرة",
        "موقع شركة مصر",
        "تطوير تطبيقات ويب",
        "موقع محسّن لمحركات البحث",
        "موقع ثنائي اللغة عربي إنجليزي",
      ],
      hero:
        "موقعك غالباً أول انطباع بياخده العميل. سهلة تبني مواقع وتطبيقات ويب سريعة وعصرية وثنائية اللغة تبان احترافية، تظهر كويس على جوجل، وتحوّل الزوّار لعملاء محتملين.",
      problem:
        "الموقع البطيء أو القديم أو المبني على قوالب بيكلّفك عملاء بصمت. إحنا نبني مواقع تحمّل بسرعة، تشتغل مظبوط على الموبايل، مهيأة للبحث واكتشاف الذكاء الاصطناعي، وسهلة التحديث لفريقك.",
      features: [
        { title: "مهيأ للبحث والذكاء الاصطناعي", desc: "مبني لجوجل ومحركات إجابات الذكاء الاصطناعي — بيانات منظمة وسرعة ومحتوى نظيف." },
        { title: "ثنائي اللغة افتراضياً", desc: "عربي/إنجليزي كامل مع دعم RTL، مفهرس منفصلاً لأوسع وصول." },
        { title: "سريع ومتجاوب", desc: "أداء محسّن وتجربة موبايل مثالية." },
        { title: "تطبيقات ويب وبوابات", desc: "لوحات تحكم وأنظمة حجز وبوابات عملاء — مش مجرد موقع تعريفي." },
        { title: "سهل التحديث", desc: "لوحة إدارة بسيطة يعدّل بها فريقك المحتوى بدون مطوّر." },
        { title: "يركّز على التحويل", desc: "دعوات واضحة للإجراء ونماذج تحوّل الزوّار لعملاء محتملين." },
      ],
      process: [
        { title: "التخطيط والتصميم", desc: "نحدد الأهداف والبنية واتجاه تصميم احترافي." },
        { title: "البناء والتحسين", desc: "تطوير سريع وسهل الوصول ومهيأ لمحركات البحث." },
        { title: "الإطلاق والنمو", desc: "ننشر، نقيس، ونحسّن بناءً على الزيارات الفعلية." },
      ],
      idealFor: ["الشركات والعلامات التجارية", "الخدمات المهنية", "التجارة الإلكترونية", "الشركات الناشئة", "البوابات ولوحات التحكم"],
      timeline: "عادة من ٣ إلى ٨ أسابيع حسب النطاق.",
      startingFrom: "يُحدَّد حسب الصفحات والمميزات — اطلب عرض سعر.",
      faqs: [
        { q: "كم تكلفة موقع احترافي في مصر؟", a: "تعتمد على عدد الصفحات وهل تحتاج تطبيق ويب أو متجراً واللغات. سهلة تقدم عرض سعر ثابت بعد فهم أهدافك — الموقع التسويقي أقل تكلفة من تطبيق الويب الكامل." },
        { q: "هل سيظهر موقعي على جوجل؟", a: "نعم. نبني وفق أفضل ممارسات SEO — تحميل سريع وبيانات منظمة ومحتوى دلالي نظيف وصفحات عربية وإنجليزية مفهرسة منفصلة — عشان محركات البحث وإجابات الذكاء الاصطناعي تلاقيك وتستشهد بك." },
        { q: "هل يمكن أن يكون الموقع بالعربية والإنجليزية؟", a: "نعم. ثنائية اللغة هي الوضع الافتراضي، مع دعم كامل للاتجاه من اليمين لليسار وكل لغة على رابط مستقل قابل للفهرسة." },
        { q: "هل نقدر نحدّث الموقع بأنفسنا؟", a: "نعم. نضمّن لوحة محتوى بسيطة يعدّل بها فريقك النصوص والمحتوى بدون الحاجة لمطوّر." },
      ],
      cta: "احصل على عرض سعر لموقع",
    },
  },
  {
    slug: "custom-software",
    icon: "Code2",
    projectType: "Custom Software",
    en: {
      name: "Custom Software",
      intent: "I need custom software built for a specific problem",
      tagline: "When off-the-shelf doesn't fit, we build exactly what you need.",
      metaTitle: "Custom Software Development in Egypt — Built for You | Sahlaa",
      metaDescription:
        "Sahlaa designs and builds custom software for businesses in Egypt and MENA — internal tools, automation, portals, and integrations tailored to your exact process.",
      keywords: [
        "custom software Egypt",
        "software development company Cairo",
        "bespoke software Egypt",
        "internal tools development",
        "business automation Egypt",
        "system integration MENA",
      ],
      hero:
        "Some problems don't have a product you can buy. When your process is your advantage, Sahlaa designs and builds custom software that fits it exactly — internal tools, automation, integrations, and portals that make your team faster.",
      problem:
        "Forcing your business into generic software means endless workarounds and manual work. Custom software removes the friction: it does precisely what you need, integrates with the tools you already use, and grows with you.",
      features: [
        { title: "Built around you", desc: "Software shaped to your exact workflow, not a template." },
        { title: "Automation", desc: "Replace repetitive manual work with reliable automation." },
        { title: "Integrations", desc: "Connect the tools, accounts, and systems you already use." },
        { title: "Internal tools & portals", desc: "Dashboards and portals for staff, clients, or partners." },
        { title: "Secure & scalable", desc: "Built with security and growth in mind from day one." },
        { title: "You own it", desc: "Full ownership of the code and infrastructure." },
      ],
      process: [
        { title: "Understand the problem", desc: "We dig into the real bottleneck before proposing a solution." },
        { title: "Design & build", desc: "Iterative delivery with regular checkpoints." },
        { title: "Deploy & support", desc: "Launch, train, and provide ongoing support." },
      ],
      idealFor: ["Unique workflows", "Operations & automation", "Companies outgrowing spreadsheets", "Businesses needing integrations", "Internal tooling"],
      timeline: "Scoped per project after a discovery session.",
      startingFrom: "Priced per project — book a discovery call.",
      faqs: [
        { q: "What counts as custom software?", a: "Custom software is built specifically for your business rather than sold as a ready-made product. It includes internal tools, automation, portals, dashboards, and integrations designed around your exact process." },
        { q: "When should I choose custom over ready-made?", a: "Choose custom when ready-made tools force painful workarounds, when your process is a competitive advantage, or when you need systems to integrate in ways off-the-shelf products can't. We'll advise honestly if a ready-made option would serve you better." },
        { q: "Can you integrate with our existing systems?", a: "Yes. Integrations are a core part of what we do — connecting your accounting, CRM, payment, and other tools so data flows automatically." },
        { q: "Do we own the software?", a: "Yes — you own the full codebase and infrastructure with no lock-in." },
      ],
      cta: "Book a discovery call",
    },
    ar: {
      name: "البرمجيات المخصصة",
      intent: "محتاج برنامج مخصص لمشكلة معينة",
      tagline: "لما الجاهز مايناسبش، نبني بالضبط اللي محتاجه.",
      metaTitle: "تطوير البرمجيات المخصصة في مصر — مبنية لك | سهلة",
      metaDescription:
        "سهلة تصمم وتبني برمجيات مخصصة للشركات في مصر والمنطقة — أدوات داخلية وأتمتة وبوابات وتكاملات مصممة حسب عمليتك بالضبط.",
      keywords: [
        "برمجيات مخصصة مصر",
        "شركة تطوير برمجيات القاهرة",
        "برامج حسب الطلب مصر",
        "تطوير أدوات داخلية",
        "أتمتة الأعمال مصر",
        "تكامل الأنظمة",
      ],
      hero:
        "في مشاكل مالهاش منتج جاهز تشتريه. لما عمليتك هي ميزتك، سهلة تصمم وتبني برمجيات مخصصة تناسبها بالضبط — أدوات داخلية وأتمتة وتكاملات وبوابات تخلي فريقك أسرع.",
      problem:
        "إجبار عملك على برمجيات عامة معناه حلول التفافية لا تنتهي وشغل يدوي. البرمجيات المخصصة بتشيل الاحتكاك: بتعمل بالضبط اللي محتاجه، تتكامل مع أدواتك الحالية، وتنمو معاك.",
      features: [
        { title: "مبنية حولك", desc: "برمجيات مصممة على سير عملك بالضبط، مش قالب." },
        { title: "أتمتة", desc: "استبدل الشغل اليدوي المتكرر بأتمتة موثوقة." },
        { title: "تكاملات", desc: "اربط الأدوات والحسابات والأنظمة اللي بتستخدمها." },
        { title: "أدوات وبوابات داخلية", desc: "لوحات وبوابات للموظفين أو العملاء أو الشركاء." },
        { title: "آمنة وقابلة للتوسع", desc: "مبنية بأمان وقابلية نمو من اليوم الأول." },
        { title: "أنت تملكها", desc: "ملكية كاملة للكود والبنية التحتية." },
      ],
      process: [
        { title: "فهم المشكلة", desc: "نتعمّق في عنق الزجاجة الحقيقي قبل اقتراح حل." },
        { title: "التصميم والبناء", desc: "تسليم تدريجي بنقاط مراجعة منتظمة." },
        { title: "النشر والدعم", desc: "الإطلاق والتدريب والدعم المستمر." },
      ],
      idealFor: ["سير عمل فريد", "العمليات والأتمتة", "شركات تجاوزت الإكسل", "شركات تحتاج تكاملات", "الأدوات الداخلية"],
      timeline: "يُحدَّد لكل مشروع بعد جلسة استكشافية.",
      startingFrom: "يُسعَّر لكل مشروع — احجز مكالمة استكشافية.",
      faqs: [
        { q: "ما هي البرمجيات المخصصة؟", a: "البرمجيات المخصصة تُبنى خصيصاً لعملك بدلاً من بيعها كمنتج جاهز. تشمل الأدوات الداخلية والأتمتة والبوابات ولوحات التحكم والتكاملات المصممة حول عمليتك بالضبط." },
        { q: "متى أختار المخصص بدل الجاهز؟", a: "اختر المخصص عندما تجبرك الأدوات الجاهزة على حلول التفافية مؤلمة، أو عندما تكون عمليتك ميزة تنافسية، أو عندما تحتاج تكاملات لا توفرها المنتجات الجاهزة. سننصحك بصدق لو كان الجاهز أنسب لك." },
        { q: "هل تقدروا تتكاملوا مع أنظمتنا الحالية؟", a: "نعم. التكاملات جزء أساسي من عملنا — نربط المحاسبة و CRM والدفع وأدواتك الأخرى لتتدفق البيانات تلقائياً." },
        { q: "هل نملك البرمجيات؟", a: "نعم — تملك الكود والبنية التحتية بالكامل بدون تقييد." },
      ],
      cta: "احجز مكالمة استكشافية",
    },
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export const solutionSlugs = solutions.map((s) => s.slug);
