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
      metaTitle: "POS System Development in Egypt — Custom Point of Sale | Sahlaa.AI",
      metaDescription:
        "Need a POS system for your shop, restaurant, or retail chain in Egypt? Sahlaa.AI builds custom point-of-sale software with inventory, multi-branch, loyalty, Fawry & Vodafone Cash. Get a quote.",
      keywords: [
        "POS system Egypt",
        "point of sale software Cairo",
        "restaurant POS Egypt",
        "retail POS system",
        "cashier system Egypt",
        "multi-branch POS",
      ],
      hero:
        "If you run a shop, restaurant, pharmacy, or a chain of branches, you need a point-of-sale system that is fast at the counter and accurate in the back office. Sahlaa.AI builds custom POS software tailored to how your business actually sells — not a rigid template you have to fight.",
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
        { q: "How much does a POS system cost in Egypt?", a: "It depends on the number of branches, hardware, and features like loyalty or accounting integration. Sahlaa.AI provides a fixed, itemized quote after a short discovery call — most single-branch systems start small and scale with add-ons." },
        { q: "Does the POS work without internet?", a: "Yes. Our POS is offline-capable — the checkout keeps working during outages and syncs to the cloud automatically once the connection returns." },
        { q: "Can it support Fawry and Vodafone Cash?", a: "Yes. We integrate the local payment methods your customers use, including Fawry, Vodafone Cash, InstaPay, and card terminals." },
        { q: "Can I manage multiple branches from one place?", a: "Absolutely. Owners get a single dashboard covering sales, inventory, and staff performance across every branch in real time." },
      ],
      cta: "Tell us about your shop and get a POS quote",
    },
    ar: {
      name: "نظام نقاط البيع (POS)",
      intent: "أريد نظام نقاط بيع لمحلي أو مطعمي",
      tagline: "بِع بشكل أسرع، وتابع كل فرع، ولا تفقد صنفاً واحداً من مخزونك.",
      metaTitle: "برمجة أنظمة نقاط البيع في مصر — نظام كاشير مخصص | سهلة.AI",
      metaDescription:
        "هل تحتاج إلى نظام نقاط بيع لمحلك أو مطعمك أو سلسلة فروعك في مصر؟ تبني سهلة.AI أنظمة نقاط بيع مخصصة تشمل إدارة المخزون والفروع المتعددة وبرامج الولاء، مع دعم فوري وفودافون كاش. اطلب عرض سعر.",
      keywords: [
        "نظام نقاط بيع مصر",
        "برنامج كاشير القاهرة",
        "نظام نقاط بيع مطاعم",
        "برنامج نقاط بيع محلات",
        "نظام كاشير مصر",
        "نقاط بيع متعددة الفروع",
      ],
      hero:
        "إذا كنت تدير محلاً أو مطعماً أو صيدلية أو سلسلة فروع، فأنت بحاجة إلى نظام نقاط بيع سريع عند الكاشير ودقيق في الإدارة. تبني سهلة.AI أنظمة نقاط بيع مخصصة تتناسب مع طريقة عملك الفعلية — وليست قالباً جاهزاً عليك أن تتأقلم معه.",
      problem:
        "تتعطل الأنظمة الجاهزة مع نمو أعمالك: يختلف المخزون بين الفروع، ولا تعكس التقارير الواقع، ولا تُدعم طرق الدفع المحلية. نبني نظاماً يناسب سير عملك، ويعمل دون اتصال بالإنترنت عند انقطاعه، ويمنح المالك رؤية واضحة لكل فرع.",
      features: [
        { title: "كاشير سريع يعمل دون إنترنت", desc: "واجهة بيع سهلة الاستخدام تواصل العمل حتى عند انقطاع الإنترنت، وتتزامن تلقائياً بعد عودة الاتصال." },
        { title: "مخزون فوري", desc: "تُحدَّث مستويات المخزون لحظياً عبر جميع الفروع، مع تنبيهات النقص وأوامر الشراء التلقائية." },
        { title: "لوحة تحكم لجميع الفروع", desc: "رؤية موحّدة للمالك تشمل المبيعات وأداء الموظفين والمخزون في كل فرع." },
        { title: "طرق دفع محلية", desc: "نقداً، وبالبطاقات، وعبر فوري وفودافون كاش وإنستا باي — الطرق التي يفضّلها عملاؤك فعلاً." },
        { title: "الولاء وإدارة العملاء", desc: "نقاط ولاء، وملفات عملاء، وعروض ترويجية موجّهة، جميعها مدمجة في النظام." },
        { title: "تقارير مالية دقيقة", desc: "تقارير يومية، ولكل وردية، وشهرية، تتطابق تماماً مع سجلاتك المحاسبية." },
      ],
      process: [
        { title: "دراسة سير العمل", desc: "نراقب طريقة بيعك وتخزينك عن قرب، ثم نصمم النظام بما يخدم عملك تحديداً." },
        { title: "البناء والتجربة", desc: "نطلق النظام في فرع واحد أولاً، ونطوّره بناءً على الملاحظات، ثم نوسّعه لبقية الفروع." },
        { title: "التدريب والدعم", desc: "تدريب شامل للموظفين، ونقل آمن للبيانات، ودعم فني مستمر بعد الإطلاق." },
      ],
      idealFor: ["محلات وسلاسل تجزئة", "مطاعم ومقاهٍ", "صيدليات", "أسواق تجارية", "شركات الجملة والتوزيع"],
      timeline: "عادةً من ٦ إلى ١٢ أسبوعاً، حسب عدد الفروع والتكاملات المطلوبة.",
      startingFrom: "يُحدَّد السعر حسب عدد الفروع والمزايا المطلوبة — تواصل معنا للحصول على عرض سعر ثابت.",
      faqs: [
        { q: "كم تبلغ تكلفة نظام نقاط البيع في مصر؟", a: "تعتمد التكلفة على عدد الفروع، والأجهزة المطلوبة، والمزايا الإضافية مثل برامج الولاء أو التكامل المحاسبي. تقدّم سهلة.AI عرض سعر ثابتاً ومفصّلاً بعد مكالمة استكشافية قصيرة؛ ومعظم الأنظمة أحادية الفرع تبدأ بتكلفة معقولة وتتوسع تدريجياً بالإضافات." },
        { q: "هل يعمل النظام بدون اتصال بالإنترنت؟", a: "نعم. يدعم نظامنا العمل دون اتصال — يواصل الكاشير عمله أثناء انقطاع الإنترنت، ويتزامن تلقائياً مع السحابة فور عودة الاتصال." },
        { q: "هل يدعم النظام فوري وفودافون كاش؟", a: "نعم. ندمج طرق الدفع المحلية التي يستخدمها عملاؤك فعلاً، بما في ذلك فوري وفودافون كاش وإنستا باي وأجهزة الدفع بالبطاقة." },
        { q: "هل يمكنني إدارة عدة فروع من مكان واحد؟", a: "بالتأكيد. يحصل المالك على لوحة تحكم واحدة تغطي المبيعات والمخزون وأداء الموظفين في كل فرع، لحظياً." },
      ],
      cta: "أخبرنا عن محلك واحصل على عرض سعر",
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
      metaTitle: "Custom ERP Development in Egypt — Business Management System | Sahlaa.AI",
      metaDescription:
        "Replace scattered spreadsheets with a custom ERP built for your business. Sahlaa.AI develops HR, finance, inventory, and operations systems for Egyptian and MENA companies. Request a demo.",
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
        "Generic ERPs are expensive, bloated, and force your team to work the vendor's way. Sahlaa.AI builds a right-sized ERP around your real processes — you get exactly the modules you need, in Arabic and English, without paying for features you'll never use.",
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
        { q: "Custom ERP vs. ready-made like Odoo or SAP?", a: "Ready-made ERPs work if your processes fit their model. Many Egyptian businesses find them costly and rigid. Sahlaa.AI builds a right-sized custom ERP around your actual workflow — you own it, it's bilingual, and you only pay for the modules you use." },
        { q: "How long does ERP implementation take?", a: "We deliver module by module, so you get value in the first weeks rather than waiting months. A typical mid-size rollout runs 3–6 months depending on scope." },
        { q: "Is the system available in Arabic?", a: "Yes — the entire interface is fully bilingual Arabic/English with proper right-to-left support." },
      ],
      cta: "Book an ERP discovery call",
    },
    ar: {
      name: "نظام تخطيط موارد المؤسسات (ERP)",
      intent: "أريد نظاماً واحداً يدير شركتي بالكامل",
      tagline: "الموارد البشرية، والمالية، والمخزون، والعمليات — موحّدة في منصة واحدة.",
      metaTitle: "تطوير أنظمة ERP مخصصة في مصر — نظام إدارة الأعمال | سهلة.AI",
      metaDescription:
        "استبدل ملفات الإكسل المتناثرة بنظام ERP مخصص لأعمالك. تطوّر سهلة.AI أنظمة الموارد البشرية والمالية والمخزون والعمليات للشركات في مصر والمنطقة. اطلب عرضاً تعريفياً.",
      keywords: [
        "ERP مصر",
        "تطوير أنظمة ERP القاهرة",
        "نظام إدارة الأعمال مصر",
        "برنامج ERP مخصص",
        "نظام موارد بشرية ومالية",
        "نظام إدارة مخزون",
      ],
      hero:
        "عندما تعتمد شركتك على رسائل واتساب، وملفات إكسل متفرقة، وتطبيقات غير مترابطة، تضيع أمور كثيرة دون أن تلاحظ. يجمع نظام ERP الموارد البشرية والمالية والمشتريات والمخزون والعمليات في نظام واحد، بحيث يعمل الجميع من مصدر بيانات موثوق واحد.",
      problem:
        "أنظمة ERP الجاهزة غالية الثمن ومعقدة، وتجبر فريقك على العمل بطريقة المورّد. نبني نظام ERP بالمقاس المناسب حول عملياتك الفعلية — فتحصل بالضبط على الوحدات التي تحتاجها، بالعربية والإنجليزية، دون أن تدفع ثمن مزايا لن تستخدمها.",
      features: [
        { title: "المالية والمحاسبة", desc: "الفواتير والمصروفات والرواتب، وتقارير تتوافق مع المتطلبات المصرية." },
        { title: "الموارد البشرية والرواتب", desc: "بيانات الموظفين والحضور والانصراف والإجازات والرواتب في مكان واحد." },
        { title: "المخزون والمشتريات", desc: "المخزون والموردون وأوامر الشراء والمخازن، مترابطة بالكامل من طرف إلى طرف." },
        { title: "الأدوار والصلاحيات", desc: "يرى كل فريق البيانات الخاصة بعمله فقط، دون سواها." },
        { title: "لوحات ومؤشرات أداء", desc: "مؤشرات أداء حيّة للإدارة، وتقارير قابلة للتصدير لأغراض المحاسبة والتدقيق." },
        { title: "ثنائي اللغة وسحابي", desc: "واجهة عربية/إنجليزية كاملة، يمكن الوصول إليها بأمان من أي مكان." },
      ],
      process: [
        { title: "دراسة العمليات", desc: "نوثّق طريقة عمل كل قسم، ونحدد مواضع إهدار الوقت والجهد." },
        { title: "بناء تدريجي", desc: "نسلّم النظام وحدة تلو الأخرى، لتلمس القيمة الفعلية منذ الأسابيع الأولى." },
        { title: "الإطلاق والتدريب", desc: "نقل البيانات، وتدريب الموظفين، وإطلاق تدريجي مدروس." },
      ],
      idealFor: ["الشركات الصغيرة والمتوسطة النامية", "المصانع ومنشآت التصنيع", "شركات التوزيع واللوجستيات", "الشركات متعددة الأقسام", "شركات الخدمات"],
      timeline: "عادةً من ٣ إلى ٦ أشهر، تُسلَّم وحدة تلو الأخرى.",
      startingFrom: "يُحدَّد السعر حسب عدد الوحدات والمستخدمين — احجز مكالمة استكشافية للحصول على عرض سعر.",
      faqs: [
        { q: "ما هو نظام ERP، وهل أحتاج إليه؟", a: "نظام ERP (تخطيط موارد المؤسسات) يوحّد الوظائف الأساسية لعملك — المالية والموارد البشرية والمخزون والعمليات — في منصة واحدة مترابطة. إذا كان فريقك يتنقّل بين ملفات وتطبيقات متعددة لا تتواصل فيما بينها، فإن نظام ERP المخصص يزيل الازدواجية في إدخال البيانات، ويمنح الإدارة صورة دقيقة وموحّدة." },
        { q: "ERP مخصص أم نظام جاهز مثل Odoo أو SAP؟", a: "تنجح الأنظمة الجاهزة عندما تتوافق عملياتك مع نموذجها. لكن كثيراً من الشركات المصرية تجدها مكلفة وغير مرنة. تبني سهلة.AI نظام ERP مخصصاً بالمقاس المناسب حول سير عملك الفعلي — تملكه بالكامل، وهو ثنائي اللغة، وتدفع فقط مقابل الوحدات التي تستخدمها." },
        { q: "كم يستغرق تطبيق نظام ERP؟", a: "نسلّم النظام وحدة تلو الأخرى، فتحصل على قيمة ملموسة خلال الأسابيع الأولى بدلاً من الانتظار شهوراً. يستغرق التطبيق المتوسط عادةً من ٣ إلى ٦ أشهر حسب النطاق." },
        { q: "هل النظام متاح باللغة العربية؟", a: "نعم — الواجهة بالكامل ثنائية اللغة (عربي/إنجليزي)، مع دعم كامل للكتابة من اليمين إلى اليسار." },
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
      metaTitle: "Build Your Startup MVP in Egypt — Idea to Product | Sahlaa.AI",
      metaDescription:
        "Have a startup idea? Sahlaa.AI helps founders in Egypt and MENA turn it into a launch-ready MVP — web or mobile app — with clean code you own. Start building.",
      keywords: [
        "startup MVP Egypt",
        "build a startup app",
        "MVP development Cairo",
        "app for my idea Egypt",
        "software for startups MENA",
        "technical co-founder alternative",
      ],
      hero:
        "You have an idea and you need to see it live — in the hands of real users — without burning your budget. Sahlaa.AI acts as your product and engineering team, taking you from concept to a launch-ready MVP with clean, scalable code that you fully own.",
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
        { q: "How much does it cost to build an MVP in Egypt?", a: "It depends on scope, but building in Egypt with Sahlaa.AI is significantly more cost-effective than agencies abroad. We scope a fixed price after a short workshop so there are no surprises." },
      ],
      cta: "Tell us your startup idea",
    },
    ar: {
      name: "منتج أولي للشركات الناشئة (MVP)",
      intent: "لديّ فكرة مشروع ناشئ وأريد تنفيذها",
      tagline: "حوّل فكرتك إلى منتج حقيقي يجرّبه المستخدمون — بسرعة.",
      metaTitle: "بناء المنتج الأولي لمشروعك الناشئ في مصر — من الفكرة إلى المنتج | سهلة.AI",
      metaDescription:
        "هل لديك فكرة مشروع ناشئ؟ تساعد سهلة.AI المؤسسين في مصر والمنطقة على تحويلها إلى منتج أولي جاهز للإطلاق — تطبيق ويب أو موبايل — بكود نظيف تملكه بالكامل. ابدأ الآن.",
      keywords: [
        "منتج أولي مصر",
        "بناء تطبيق مشروع ناشئ",
        "تطوير MVP القاهرة",
        "تطبيق لفكرتي مصر",
        "برمجيات للشركات الناشئة",
        "شريك تقني للمؤسسين",
      ],
      hero:
        "لديك فكرة، وتحتاج أن تراها واقعاً ملموساً بين أيدي مستخدمين حقيقيين — دون استنزاف ميزانيتك. تعمل سهلة.AI كفريق المنتج والهندسة الخاص بك، فتأخذك من الفكرة إلى منتج أولي جاهز للإطلاق، بكود نظيف وقابل للتوسّع، تملكه بالكامل.",
      problem:
        "لا تفشل معظم الأفكار لأنها سيئة، بل لأن المؤسسين يبنون أكثر مما ينبغي قبل التأكد من صحة الفكرة. نساعدك على اختصار فكرتك إلى أدق نسخة تثبت قيمتها الأساسية، وإطلاقها بسرعة، ثم تطويرها بناءً على سلوك المستخدمين الحقيقيين.",
      features: [
        { title: "من الفكرة إلى النطاق", desc: "نساعدك على تحديد أصغر منتج قادر على إثبات قيمتك الأساسية." },
        { title: "منتج أولي عبر الويب أو الموبايل", desc: "تطبيق أنيق وجاهز للإطلاق، على المنصة التي يتواجد عليها مستخدموك." },
        { title: "كود نظيف تملكه بالكامل", desc: "دون أي قيود — تملك الكود المصدري بالكامل، وتستطيع توسيعه أو تسليمه لفريقك." },
        { title: "الدفع وتسجيل الدخول", desc: "التسجيل والاشتراكات وطرق الدفع المحلية، جميعها مدمجة من البداية." },
        { title: "تحليلات منذ اليوم الأول", desc: "تابع سلوك المستخدمين لتقرر بثقة ما ستبنيه بعد ذلك." },
        { title: "أساس جاهز للتوسّع", desc: "بنية تقنية تنمو معك من أول مئة مستخدم إلى أول مئة ألف." },
      ],
      process: [
        { title: "تحديد ملامح المنتج الأولي", desc: "ورشة عمل مركّزة لتحديد النطاق والمستخدمين المستهدفين ومقاييس النجاح." },
        { title: "التصميم والبناء", desc: "عروض أسبوعية تتيح لك توجيه المنتج أثناء تشكّله." },
        { title: "الإطلاق والتطوير", desc: "نطلق المنتج، ونراقب الاستخدام الفعلي، ونحسّنه بسرعة." },
      ],
      idealFor: ["المؤسسون لأول مرة", "المؤسسون غير التقنيين", "الشركات الناشئة الممولة", "فرق الابتكار داخل الشركات", "المشاريع الجانبية المتحوّلة إلى مشاريع كاملة"],
      timeline: "يُطلَق المنتج الأولي المركّز عادةً خلال ٦ إلى ١٢ أسبوعاً.",
      startingFrom: "باقات منتج أولي بنطاق ثابت — أخبرنا بفكرتك للحصول على عرض سعر.",
      faqs: [
        { q: "ما هو المنتج الأولي (MVP)، ولماذا نبدأ به؟", a: "المنتج الأولي هو أبسط نسخة من منتجك تقدّم قيمة حقيقية للمستخدمين الأوائل. يتيح لك البدء به التحقق من وجود طلب حقيقي والتعلّم من الاستخدام الفعلي، قبل الاستثمار في بناء كامل — مما يوفّر الوقت والمال." },
        { q: "لست شخصاً تقنياً، فهل يمكنكم مساعدتي؟", a: "بالتأكيد. كثير من عملائنا المؤسسين غير تقنيين. نتولّى قرارات المنتج والتصميم والهندسة، ونشرح كل الخيارات بلغة بسيطة وواضحة، مع إبقائك مسيطراً على خارطة الطريق بالكامل." },
        { q: "هل أملك الكود المصدري؟", a: "بالكامل. لا توجد أي قيود — تملك الكود المصدري والحسابات والبنية التحتية بالكامل، ويمكنك ضم فريقك الخاص في أي وقت." },
        { q: "كم تبلغ تكلفة بناء منتج أولي في مصر؟", a: "تعتمد التكلفة على نطاق المشروع، إلا أن البناء في مصر مع سهلة.AI أوفر بكثير مقارنة بالوكالات في الخارج. نحدد سعراً ثابتاً بعد ورشة عمل قصيرة، دون أي مفاجآت لاحقة." },
      ],
      cta: "أخبرنا عن فكرة مشروعك الناشئ",
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
      metaTitle: "Mobile App Development in Egypt — iOS & Android | Sahlaa.AI",
      metaDescription:
        "Sahlaa.AI builds fast, modern iOS and Android apps for businesses and startups in Egypt and MENA — with offline support, payments, and clean UX. Get a quote.",
      keywords: [
        "mobile app development Egypt",
        "iOS Android app Cairo",
        "app developers Egypt",
        "build a mobile app MENA",
        "flutter app development",
        "delivery app Egypt",
      ],
      hero:
        "Whether you need a delivery app, a booking platform, or a companion app for your service, Sahlaa.AI builds fast, reliable mobile apps that feel native on both iOS and Android — with the polish users expect.",
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
        { q: "How much does it cost to build a mobile app in Egypt?", a: "Cost depends on features, platforms, and integrations. Building with Sahlaa.AI in Egypt is far more affordable than overseas agencies, and we provide a fixed quote after scoping your requirements." },
        { q: "Will the app work on both iPhone and Android?", a: "Yes. We build with a shared codebase that delivers a native-quality experience on both iOS and Android, which keeps cost and timeline efficient." },
        { q: "Can the app work offline?", a: "Yes, where it makes sense. We add offline support so the app stays usable on weak connections and syncs when back online." },
        { q: "Do you handle publishing to the app stores?", a: "We do — we manage the full submission and approval process for both the Apple App Store and Google Play." },
      ],
      cta: "Get a mobile app quote",
    },
    ar: {
      name: "تطوير تطبيقات الموبايل",
      intent: "أريد تطبيق موبايل لمشروعي أو فكرتي",
      tagline: "تطبيقات iOS و Android بجودة أصلية يحبّها عملاؤك.",
      metaTitle: "تطوير تطبيقات الموبايل في مصر — iOS و Android | سهلة.AI",
      metaDescription:
        "تبني سهلة.AI تطبيقات iOS و Android سريعة وعصرية للشركات والمشاريع الناشئة في مصر والمنطقة، مع دعم العمل دون إنترنت، وأنظمة دفع، وتجربة استخدام متقنة. اطلب عرض سعر.",
      keywords: [
        "تطوير تطبيقات موبايل مصر",
        "تطبيق iOS Android القاهرة",
        "مطورو تطبيقات مصر",
        "بناء تطبيق موبايل",
        "تطوير تطبيقات فلاتر",
        "تطبيق توصيل مصر",
      ],
      hero:
        "سواء احتجت إلى تطبيق توصيل، أو منصة حجز، أو تطبيق مصاحب لخدمتك، تبني سهلة.AI تطبيقات موبايل سريعة وموثوقة، تمنح إحساساً أصلياً على نظامي iOS و Android، بمستوى الإتقان الذي يتوقعه المستخدمون.",
      problem:
        "يُحذَف التطبيق البطيء والمعقّد سريعاً. نركّز على الأداء، وتجربة استخدام نظيفة، والتفاصيل التي تجعل المستخدم يعود مجدداً — دعم العمل دون إنترنت، والإشعارات الفورية، وطرق دفع محلية سلسة.",
      features: [
        { title: "iOS و Android معاً", desc: "قاعدة كود واحدة، وإحساس أصلي على المنصتين، بتكلفة أقل واتساق أعلى." },
        { title: "دعم العمل دون إنترنت", desc: "يظل التطبيق مفيداً حتى مع ضعف الاتصال بالإنترنت." },
        { title: "إشعارات فورية", desc: "أعِد جذب المستخدمين برسائل مناسبة في التوقيت المناسب." },
        { title: "أنظمة دفع مدمجة", desc: "بطاقات، ومحافظ إلكترونية، وفوري، وفودافون كاش، حسب احتياجك." },
        { title: "تجربة استخدام عصرية", desc: "واجهات نظيفة وسريعة، مصممة للاستخدام الفعلي، بالعربية والإنجليزية." },
        { title: "إطلاق على المتاجر", desc: "نتولّى عملية رفع التطبيق والموافقة عليه في App Store و Google Play." },
      ],
      process: [
        { title: "التحديد والتصميم", desc: "نرسم مسارات الاستخدام ونصمم الشاشات قبل البدء بكتابة الكود." },
        { title: "البناء والاختبار", desc: "إصدارات منتظمة يمكنك تثبيتها وتجربتها على هاتفك الخاص." },
        { title: "الإطلاق والدعم", desc: "رفع التطبيق على المتاجر، والإطلاق، والتحديثات المستمرة بعده." },
      ],
      idealFor: ["التوصيل واللوجستيات", "الحجز والخدمات", "التجزئة وبرامج الولاء", "الشركات الناشئة", "تطبيقات المحتوى والمجتمعات"],
      timeline: "عادةً من ٨ إلى ١٦ أسبوعاً، حسب المزايا المطلوبة.",
      startingFrom: "يُحدَّد السعر حسب المزايا والمنصات المطلوبة — تواصل معنا للحصول على عرض سعر.",
      faqs: [
        { q: "كم تبلغ تكلفة بناء تطبيق موبايل في مصر؟", a: "تعتمد التكلفة على المزايا والمنصات والتكاملات المطلوبة. البناء مع سهلة.AI في مصر أوفر بكثير من الوكالات الخارجية، ونقدّم عرض سعر ثابتاً بعد تحديد متطلباتك بدقة." },
        { q: "هل يعمل التطبيق على iPhone و Android معاً؟", a: "نعم. نبني التطبيق بقاعدة كود مشتركة تمنح تجربة بجودة أصلية على المنصتين، بما يحافظ على كفاءة التكلفة والوقت." },
        { q: "هل يمكن أن يعمل التطبيق دون اتصال بالإنترنت؟", a: "نعم، حيثما كان ذلك مناسباً. نضيف دعماً للعمل دون إنترنت بحيث يبقى التطبيق قابلاً للاستخدام مع ضعف الاتصال، ويتزامن تلقائياً عند عودته." },
        { q: "هل تتولّون عملية النشر على متاجر التطبيقات؟", a: "نعم — ندير عملية الرفع والموافقة بالكامل، سواء على متجر Apple App Store أو Google Play." },
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
      metaTitle: "Website Development in Egypt — Business Sites & Web Apps | Sahlaa.AI",
      metaDescription:
        "Sahlaa.AI builds professional, SEO-optimized websites and web applications for businesses in Egypt and MENA — fast, bilingual, and built to convert. Get started.",
      keywords: [
        "website development Egypt",
        "web design Cairo",
        "business website Egypt",
        "web application development",
        "SEO website Egypt",
        "bilingual website Arabic English",
      ],
      hero:
        "Your website is often the first impression customers get. Sahlaa.AI builds fast, modern, bilingual websites and web applications that look premium, rank well on Google, and turn visitors into leads.",
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
        { q: "How much does a professional website cost in Egypt?", a: "It depends on the number of pages, whether you need a web app or e-commerce, and languages. Sahlaa.AI provides a fixed quote after understanding your goals — a marketing site costs less than a full web application." },
        { q: "Will my website be found on Google?", a: "Yes. We build with SEO best practices — fast loading, structured data, clean semantic content, and separately-indexed Arabic and English pages — so both search engines and AI answer engines can find and cite you." },
        { q: "Can the site be in both Arabic and English?", a: "Yes. Bilingual is our default, with proper right-to-left support and each language on its own indexable URL for maximum reach." },
        { q: "Can my team update the website ourselves?", a: "Yes. We include a simple content admin so your team can edit text and content without needing a developer." },
      ],
      cta: "Get a website quote",
    },
    ar: {
      name: "المواقع الإلكترونية وتطبيقات الويب",
      intent: "أريد موقعاً احترافياً أو تطبيق ويب",
      tagline: "موقع سريع ومهيأ لمحركات البحث يحوّل الزوّار إلى عملاء.",
      metaTitle: "تطوير المواقع الإلكترونية في مصر — مواقع الشركات وتطبيقات الويب | سهلة.AI",
      metaDescription:
        "تبني سهلة.AI مواقع وتطبيقات ويب احترافية ومهيأة لمحركات البحث للشركات في مصر والمنطقة — سريعة، وثنائية اللغة، ومصمّمة لتحقيق التحويل. ابدأ الآن.",
      keywords: [
        "تطوير مواقع مصر",
        "تصميم مواقع القاهرة",
        "موقع شركة مصر",
        "تطوير تطبيقات ويب",
        "موقع محسّن لمحركات البحث",
        "موقع ثنائي اللغة عربي إنجليزي",
      ],
      hero:
        "غالباً ما يكون موقعك الإلكتروني هو الانطباع الأول الذي يكوّنه العميل عن شركتك. تبني سهلة.AI مواقع وتطبيقات ويب سريعة وعصرية وثنائية اللغة، تبدو احترافية، وتحقق ترتيباً جيداً على جوجل، وتحوّل الزوّار إلى عملاء محتملين.",
      problem:
        "الموقع البطيء أو القديم أو المعتمد كلياً على قوالب جاهزة يُكلّفك عملاء دون أن تشعر. نبني مواقع تُحمَّل بسرعة، وتعمل بسلاسة تامة على الجوال، ومهيأة للظهور في محركات البحث وأدوات الذكاء الاصطناعي، وسهلة التحديث لفريقك.",
      features: [
        { title: "مهيأ لمحركات البحث والذكاء الاصطناعي", desc: "مبني وفق معايير جوجل ومحركات الإجابة بالذكاء الاصطناعي — بيانات منظَّمة، وسرعة عالية، ومحتوى واضح." },
        { title: "ثنائي اللغة افتراضياً", desc: "دعم كامل للعربية والإنجليزية باتجاه الكتابة الصحيح، وفهرسة منفصلة لكل لغة لأوسع انتشار." },
        { title: "سريع ومتجاوب", desc: "أداء محسَّن وتجربة استخدام مثالية على جميع الأجهزة." },
        { title: "تطبيقات ويب وبوابات إلكترونية", desc: "لوحات تحكم وأنظمة حجز وبوابات عملاء — وليس مجرد موقع تعريفي بسيط." },
        { title: "سهل التحديث", desc: "لوحة إدارة بسيطة تتيح لفريقك تعديل المحتوى دون الحاجة إلى مطوّر." },
        { title: "مصمَّم لتحقيق التحويل", desc: "دعوات واضحة لاتخاذ إجراء، ونماذج فعّالة تحوّل الزوّار إلى عملاء محتملين." },
      ],
      process: [
        { title: "التخطيط والتصميم", desc: "نحدد الأهداف والبنية، ونضع اتجاهاً تصميمياً احترافياً." },
        { title: "البناء والتحسين", desc: "تطوير سريع، وسهل الوصول، ومهيأ لمحركات البحث." },
        { title: "الإطلاق والنمو", desc: "ننشر الموقع، ونقيس أداءه، ونحسّنه بناءً على بيانات الزيارات الفعلية." },
      ],
      idealFor: ["الشركات والعلامات التجارية", "الخدمات المهنية", "التجارة الإلكترونية", "الشركات الناشئة", "البوابات الإلكترونية ولوحات التحكم"],
      timeline: "عادةً من ٣ إلى ٨ أسابيع، حسب نطاق المشروع.",
      startingFrom: "يُحدَّد السعر حسب عدد الصفحات والمزايا المطلوبة — تواصل معنا للحصول على عرض سعر.",
      faqs: [
        { q: "كم تبلغ تكلفة موقع احترافي في مصر؟", a: "تعتمد التكلفة على عدد الصفحات، وما إذا كنت تحتاج إلى تطبيق ويب أو متجر إلكتروني، وعدد اللغات المطلوبة. تقدّم سهلة.AI عرض سعر ثابتاً بعد فهم أهدافك بدقة — والموقع التسويقي البسيط أقل تكلفة من تطبيق الويب الكامل." },
        { q: "هل سيظهر موقعي على جوجل؟", a: "نعم. نبني المواقع وفق أفضل ممارسات تحسين محركات البحث — تحميل سريع، وبيانات منظَّمة، ومحتوى واضح ودلالي، وصفحات عربية وإنجليزية مفهرسة بشكل منفصل — حتى تتمكن محركات البحث وأدوات الإجابة بالذكاء الاصطناعي من العثور على موقعك والاستشهاد به." },
        { q: "هل يمكن أن يكون الموقع بالعربية والإنجليزية معاً؟", a: "نعم. ثنائية اللغة هي الخيار الافتراضي لدينا، مع دعم كامل للكتابة من اليمين إلى اليسار، ورابط مستقل قابل للفهرسة لكل لغة، لتحقيق أوسع انتشار ممكن." },
        { q: "هل يمكن لفريقنا تحديث الموقع بأنفسنا؟", a: "نعم. نوفّر لوحة إدارة محتوى بسيطة تتيح لفريقك تعديل النصوص والمحتوى دون الحاجة إلى مطوّر." },
      ],
      cta: "احصل على عرض سعر لموقعك الإلكتروني",
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
      metaTitle: "Custom Software Development in Egypt — Built for You | Sahlaa.AI",
      metaDescription:
        "Sahlaa.AI designs and builds custom software for businesses in Egypt and MENA — internal tools, automation, portals, and integrations tailored to your exact process.",
      keywords: [
        "custom software Egypt",
        "software development company Cairo",
        "bespoke software Egypt",
        "internal tools development",
        "business automation Egypt",
        "system integration MENA",
      ],
      hero:
        "Some problems don't have a product you can buy. When your process is your advantage, Sahlaa.AI designs and builds custom software that fits it exactly — internal tools, automation, integrations, and portals that make your team faster.",
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
      intent: "أحتاج إلى برنامج مخصص لحل مشكلة محددة في عملي",
      tagline: "عندما لا يناسبك الجاهز، نبني لك بالضبط ما تحتاجه.",
      metaTitle: "تطوير البرمجيات المخصصة في مصر — مبنية خصيصاً لك | سهلة.AI",
      metaDescription:
        "تصمم سهلة.AI وتبني برمجيات مخصصة للشركات في مصر والمنطقة — أدوات داخلية، وأتمتة، وبوابات إلكترونية، وتكاملات، مصممة بدقة حسب طبيعة عملك.",
      keywords: [
        "برمجيات مخصصة مصر",
        "شركة تطوير برمجيات القاهرة",
        "برامج حسب الطلب مصر",
        "تطوير أدوات داخلية",
        "أتمتة الأعمال مصر",
        "تكامل الأنظمة",
      ],
      hero:
        "بعض المشكلات لا يوجد لها منتج جاهز يمكنك شراؤه. عندما تكون طريقة عملك هي ميزتك التنافسية، تصمم سهلة.AI وتبني برمجيات مخصصة تناسبها تماماً — أدوات داخلية، وأتمتة، وتكاملات، وبوابات إلكترونية تجعل فريقك أسرع في الإنجاز.",
      problem:
        "إجبار عملك على التكيّف مع برمجيات عامة يعني حلولاً التفافية لا تنتهي وأعمالاً يدوية متكررة. تزيل البرمجيات المخصصة هذا الاحتكاك: فهي تؤدي بالضبط ما تحتاجه، وتتكامل مع الأدوات التي تستخدمها بالفعل، وتنمو مع نمو عملك.",
      features: [
        { title: "مبنية خصيصاً حولك", desc: "برمجيات مصممة على سير عملك الفعلي بدقة، وليست قالباً جاهزاً." },
        { title: "الأتمتة", desc: "استبدل الأعمال اليدوية المتكررة بأتمتة موثوقة." },
        { title: "التكاملات", desc: "اربط الأدوات والحسابات والأنظمة التي تستخدمها بالفعل ببعضها البعض." },
        { title: "أدوات وبوابات داخلية", desc: "لوحات تحكم وبوابات إلكترونية مخصصة للموظفين أو العملاء أو الشركاء." },
        { title: "آمنة وقابلة للتوسع", desc: "مبنية مع مراعاة الأمان وإمكانية النمو منذ اليوم الأول." },
        { title: "تملكها بالكامل", desc: "ملكية كاملة للكود المصدري والبنية التحتية." },
      ],
      process: [
        { title: "فهم المشكلة", desc: "نتعمّق في فهم عنق الزجاجة الحقيقي في عملك قبل اقتراح أي حل." },
        { title: "التصميم والبناء", desc: "تسليم تدريجي مع نقاط مراجعة منتظمة طوال المشروع." },
        { title: "النشر والدعم", desc: "الإطلاق، والتدريب، والدعم الفني المستمر بعد التسليم." },
      ],
      idealFor: ["سير عمل فريد من نوعه", "العمليات والأتمتة", "شركات تجاوزت حدود جداول البيانات", "شركات تحتاج إلى تكاملات متقدمة", "الأدوات الداخلية"],
      timeline: "يُحدَّد نطاق كل مشروع بعد جلسة استكشافية.",
      startingFrom: "يُسعَّر كل مشروع على حدة — احجز مكالمة استكشافية للبدء.",
      faqs: [
        { q: "ما المقصود بالبرمجيات المخصصة؟", a: "البرمجيات المخصصة تُبنى خصيصاً لعملك، بدلاً من بيعها كمنتج جاهز للجميع. وتشمل الأدوات الداخلية، والأتمتة، والبوابات الإلكترونية، ولوحات التحكم، والتكاملات المصممة بدقة حول طبيعة عملياتك." },
        { q: "متى أختار الحل المخصص بدلاً من الجاهز؟", a: "اختر الحل المخصص عندما تجبرك الأدوات الجاهزة على حلول التفافية مرهقة، أو عندما تكون طريقة عملك ميزة تنافسية بحد ذاتها، أو عندما تحتاج إلى تكاملات لا توفرها المنتجات الجاهزة. وسننصحك بصدق إن كان الحل الجاهز هو الأنسب لك فعلاً." },
        { q: "هل يمكنكم التكامل مع أنظمتنا الحالية؟", a: "نعم. تُعد التكاملات جزءاً أساسياً من عملنا — نربط نظام المحاسبة، وإدارة علاقات العملاء (CRM)، وأنظمة الدفع، وأدواتك الأخرى، بحيث تتدفق البيانات بينها تلقائياً." },
        { q: "هل نملك البرمجيات بعد تسليمها؟", a: "نعم — تملك الكود المصدري والبنية التحتية بالكامل، دون أي قيود أو ارتباط بمورّد." },
      ],
      cta: "احجز مكالمة استكشافية",
    },
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export const solutionSlugs = solutions.map((s) => s.slug);
