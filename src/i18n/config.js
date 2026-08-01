import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      topbar: { sendMail: 'Send mail:', callUs: 'Call us:', location: 'Location', lang: 'Lang:' },
      nav: {
        home: 'Home', about: 'About', services: 'Services', pages: 'Pages', blog: 'Blog', contact: 'Contact',
        homeChildren: { generalHospital: 'General Hospital', healthcareCenter: 'Healthcare Center', childCare: 'Child Care', dentalCare: 'Dental Care', eyeCare: 'Eye Care' },
        pagesChildren: { ourDoctors: 'Our Doctors', partnerHospitals: 'Partner Hospitals', ourPackages: 'Our Packages' },
      },
      buttons: { emergency: 'Emergency', appointment: 'Appointment' },
      search: { placeholder: 'Search Services, Doctors...' },
      footer: {
        desc: 'Top medical treatments and tour packages in India for international patients, with a trusted network of top hospitals and expert doctors.',
        socialMedia: 'Social Media',
        quickLinks: 'Quick Links',
        links: { aboutUs: 'About Us', partnerHospitals: 'Partner Hospitals', treatments: 'Treatments', freeConsultation: 'Free Consultation', faq: 'FAQ', patientFeedback: 'Patient Feedback' },
        specialtiesTitle: 'Specialties',
        spec: { organTransplant: 'Organ Transplant', cardiology: 'Cardiology', neuroSurgery: 'Neuro Surgery', spineSurgery: 'Spine Surgery', orthopedic: 'Orthopedic', cancer: 'Cancer' },
        getInTouch: 'Get in Touch',
        visitUs: 'Visit Us', visitUsSub: 'Delhi, India',
        callSub: 'Monday - Sunday (Working All Day)',
        emailSub: 'Reply Within 2-4 Hours',
        newsletterTitle: 'Health Insights & Updates',
        newsletterSubtitle: 'Subscribe to receive wellness tips, free health checkup offers, and Medicure Trip news.',
        emailPlaceholder: 'Enter your email address',
        subscribe: 'Subscribe',
        copyrightSuffix: 'All Rights Reserved.',
        termsOfUse: 'Terms of Use',
        privacyPolicy: 'Privacy Policy',
      },
    },
  },
  es: {
    translation: {
      topbar: { sendMail: 'Enviar correo:', callUs: 'Llámenos:', location: 'Ubicación', lang: 'Idioma:' },
      nav: {
        home: 'Inicio', about: 'Acerca de', services: 'Servicios', pages: 'Páginas', blog: 'Blog', contact: 'Contacto',
        homeChildren: { generalHospital: 'Hospital General', healthcareCenter: 'Centro de Salud', childCare: 'Cuidado Infantil', dentalCare: 'Cuidado Dental', eyeCare: 'Cuidado Ocular' },
        pagesChildren: { ourDoctors: 'Nuestros Médicos', partnerHospitals: 'Hospitales Asociados', ourPackages: 'Nuestros Paquetes' },
      },
      buttons: { emergency: 'Emergencia', appointment: 'Cita' },
      search: { placeholder: 'Buscar Servicios, Médicos...' },
      footer: {
        desc: 'Los mejores tratamientos médicos y paquetes turísticos en India para pacientes internacionales, con una red confiable de hospitales de primer nivel y médicos expertos.',
        socialMedia: 'Redes Sociales',
        quickLinks: 'Enlaces Rápidos',
        links: { aboutUs: 'Sobre Nosotros', partnerHospitals: 'Hospitales Asociados', treatments: 'Tratamientos', freeConsultation: 'Consulta Gratuita', faq: 'Preguntas Frecuentes', patientFeedback: 'Opiniones de Pacientes' },
        specialtiesTitle: 'Especialidades',
        spec: { organTransplant: 'Trasplante de Órganos', cardiology: 'Cardiología', neuroSurgery: 'Neurocirugía', spineSurgery: 'Cirugía de Columna', orthopedic: 'Ortopedia', cancer: 'Cáncer' },
        getInTouch: 'Contáctenos',
        visitUs: 'Visítenos', visitUsSub: 'Delhi, India',
        callSub: 'Lunes - Domingo (Todo el día)',
        emailSub: 'Respuesta en 2-4 horas',
        newsletterTitle: 'Información y Novedades de Salud',
        newsletterSubtitle: 'Suscríbase para recibir consejos de bienestar, ofertas gratuitas de chequeos de salud y noticias de Medicure Trip.',
        emailPlaceholder: 'Ingrese su correo electrónico',
        subscribe: 'Suscribirse',
        copyrightSuffix: 'Todos los derechos reservados.',
        termsOfUse: 'Términos de Uso',
        privacyPolicy: 'Política de Privacidad',
      },
    },
  },
  fr: {
    translation: {
      topbar: { sendMail: 'Envoyer un e-mail:', callUs: 'Appelez-nous:', location: 'Emplacement', lang: 'Langue:' },
      nav: {
        home: 'Accueil', about: 'À propos', services: 'Services', pages: 'Pages', blog: 'Blog', contact: 'Contact',
        homeChildren: { generalHospital: 'Hôpital Général', healthcareCenter: 'Centre de Santé', childCare: 'Soins Pédiatriques', dentalCare: 'Soins Dentaires', eyeCare: 'Soins Oculaires' },
        pagesChildren: { ourDoctors: 'Nos Médecins', partnerHospitals: 'Hôpitaux Partenaires', ourPackages: 'Nos Forfaits' },
      },
      buttons: { emergency: 'Urgence', appointment: 'Rendez-vous' },
      search: { placeholder: 'Rechercher Services, Médecins...' },
      footer: {
        desc: "Les meilleurs traitements médicaux et forfaits touristiques en Inde pour les patients internationaux, avec un réseau fiable d'hôpitaux de premier plan et de médecins experts.",
        socialMedia: 'Réseaux Sociaux',
        quickLinks: 'Liens Rapides',
        links: { aboutUs: 'À Propos', partnerHospitals: 'Hôpitaux Partenaires', treatments: 'Traitements', freeConsultation: 'Consultation Gratuite', faq: 'FAQ', patientFeedback: 'Avis des Patients' },
        specialtiesTitle: 'Spécialités',
        spec: { organTransplant: "Transplantation d'Organes", cardiology: 'Cardiologie', neuroSurgery: 'Neurochirurgie', spineSurgery: 'Chirurgie de la Colonne Vertébrale', orthopedic: 'Orthopédie', cancer: 'Cancer' },
        getInTouch: 'Nous Contacter',
        visitUs: 'Nous Rendre Visite', visitUsSub: 'Delhi, Inde',
        callSub: 'Lundi - Dimanche (Toute la journée)',
        emailSub: 'Réponse sous 2 à 4 heures',
        newsletterTitle: 'Actualités et Conseils Santé',
        newsletterSubtitle: 'Abonnez-vous pour recevoir des conseils bien-être, des offres de bilans de santé gratuits et les actualités de Medicure Trip.',
        emailPlaceholder: 'Entrez votre adresse e-mail',
        subscribe: "S'abonner",
        copyrightSuffix: 'Tous droits réservés.',
        termsOfUse: "Conditions d'Utilisation",
        privacyPolicy: 'Politique de Confidentialité',
      },
    },
  },
  de: {
    translation: {
      topbar: { sendMail: 'E-Mail senden:', callUs: 'Rufen Sie uns an:', location: 'Standort', lang: 'Sprache:' },
      nav: {
        home: 'Startseite', about: 'Über uns', services: 'Leistungen', pages: 'Seiten', blog: 'Blog', contact: 'Kontakt',
        homeChildren: { generalHospital: 'Allgemeinkrankenhaus', healthcareCenter: 'Gesundheitszentrum', childCare: 'Kinderbetreuung', dentalCare: 'Zahnpflege', eyeCare: 'Augenpflege' },
        pagesChildren: { ourDoctors: 'Unsere Ärzte', partnerHospitals: 'Partnerkrankenhäuser', ourPackages: 'Unsere Pakete' },
      },
      buttons: { emergency: 'Notfall', appointment: 'Termin' },
      search: { placeholder: 'Leistungen, Ärzte suchen...' },
      footer: {
        desc: 'Erstklassige medizinische Behandlungen und Reisepakete in Indien für internationale Patienten, mit einem vertrauenswürdigen Netzwerk führender Krankenhäuser und erfahrener Ärzte.',
        socialMedia: 'Soziale Medien',
        quickLinks: 'Schnellzugriff',
        links: { aboutUs: 'Über Uns', partnerHospitals: 'Partnerkrankenhäuser', treatments: 'Behandlungen', freeConsultation: 'Kostenlose Beratung', faq: 'FAQ', patientFeedback: 'Patientenfeedback' },
        specialtiesTitle: 'Fachgebiete',
        spec: { organTransplant: 'Organtransplantation', cardiology: 'Kardiologie', neuroSurgery: 'Neurochirurgie', spineSurgery: 'Wirbelsäulenchirurgie', orthopedic: 'Orthopädie', cancer: 'Krebs' },
        getInTouch: 'Kontaktieren Sie Uns',
        visitUs: 'Besuchen Sie Uns', visitUsSub: 'Delhi, Indien',
        callSub: 'Montag - Sonntag (Ganztägig)',
        emailSub: 'Antwort innerhalb von 2-4 Stunden',
        newsletterTitle: 'Gesundheitsnews & Updates',
        newsletterSubtitle: 'Abonnieren Sie, um Wellness-Tipps, kostenlose Gesundheitscheck-Angebote und Neuigkeiten von Medicure Trip zu erhalten.',
        emailPlaceholder: 'Geben Sie Ihre E-Mail-Adresse ein',
        subscribe: 'Abonnieren',
        copyrightSuffix: 'Alle Rechte vorbehalten.',
        termsOfUse: 'Nutzungsbedingungen',
        privacyPolicy: 'Datenschutzrichtlinie',
      },
    },
  },
  ar: {
    translation: {
      topbar: { sendMail: 'أرسل بريدًا:', callUs: 'اتصل بنا:', location: 'الموقع', lang: 'اللغة:' },
      nav: {
        home: 'الرئيسية', about: 'من نحن', services: 'الخدمات', pages: 'الصفحات', blog: 'المدونة', contact: 'اتصل بنا',
        homeChildren: { generalHospital: 'مستشفى عام', healthcareCenter: 'مركز الرعاية الصحية', childCare: 'رعاية الأطفال', dentalCare: 'رعاية الأسنان', eyeCare: 'رعاية العيون' },
        pagesChildren: { ourDoctors: 'أطباؤنا', partnerHospitals: 'المستشفيات الشريكة', ourPackages: 'باقاتنا' },
      },
      buttons: { emergency: 'طوارئ', appointment: 'حجز موعد' },
      search: { placeholder: 'ابحث عن الخدمات والأطباء...' },
      footer: {
        desc: 'أفضل العلاجات الطبية والباقات السياحية في الهند للمرضى الدوليين، مع شبكة موثوقة من أفضل المستشفيات وأمهر الأطباء.',
        socialMedia: 'التواصل الاجتماعي',
        quickLinks: 'روابط سريعة',
        links: { aboutUs: 'من نحن', partnerHospitals: 'المستشفيات الشريكة', treatments: 'العلاجات', freeConsultation: 'استشارة مجانية', faq: 'الأسئلة الشائعة', patientFeedback: 'آراء المرضى' },
        specialtiesTitle: 'التخصصات',
        spec: { organTransplant: 'زراعة الأعضاء', cardiology: 'أمراض القلب', neuroSurgery: 'جراحة الأعصاب', spineSurgery: 'جراحة العمود الفقري', orthopedic: 'جراحة العظام', cancer: 'الأورام' },
        getInTouch: 'تواصل معنا',
        visitUs: 'زوروا', visitUsSub: 'دلهي، الهند',
        callSub: 'من الاثنين إلى الأحد (طوال اليوم)',
        emailSub: 'الرد خلال 2-4 ساعات',
        newsletterTitle: 'نصائح وتحديثات صحية',
        newsletterSubtitle: 'اشترك لتصلك نصائح العافية وعروض الفحوصات الصحية المجانية وأخبار Medicure Trip.',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        subscribe: 'اشتراك',
        copyrightSuffix: 'جميع الحقوق محفوظة.',
        termsOfUse: 'شروط الاستخدام',
        privacyPolicy: 'سياسة الخصوصية',
      },
    },
  },
  bn: {
    translation: {
      topbar: { sendMail: 'মেইল পাঠান:', callUs: 'আমাদের কল করুন:', location: 'অবস্থান', lang: 'ভাষা:' },
      nav: {
        home: 'হোম', about: 'আমাদের সম্পর্কে', services: 'সেবাসমূহ', pages: 'পৃষ্ঠাসমূহ', blog: 'ব্লগ', contact: 'যোগাযোগ',
        homeChildren: { generalHospital: 'জেনারেল হাসপাতাল', healthcareCenter: 'স্বাস্থ্যসেবা কেন্দ্র', childCare: 'শিশু পরিচর্যা', dentalCare: 'দন্ত পরিচর্যা', eyeCare: 'চোখের পরিচর্যা' },
        pagesChildren: { ourDoctors: 'আমাদের ডাক্তারগণ', partnerHospitals: 'অংশীদার হাসপাতাল', ourPackages: 'আমাদের প্যাকেজ' },
      },
      buttons: { emergency: 'জরুরি', appointment: 'অ্যাপয়েন্টমেন্ট' },
      search: { placeholder: 'সেবা, ডাক্তার খুঁজুন...' },
      footer: {
        desc: 'আন্তর্জাতিক রোগীদের জন্য ভারতে বিশ্বমানের চিকিৎসা ও ভ্রমণ প্যাকেজ, শীর্ষ হাসপাতাল ও বিশেষজ্ঞ চিকিৎসকদের একটি নির্ভরযোগ্য নেটওয়ার্কের মাধ্যমে।',
        socialMedia: 'সামাজিক যোগাযোগ মাধ্যম',
        quickLinks: 'দ্রুত লিংক',
        links: { aboutUs: 'আমাদের সম্পর্কে', partnerHospitals: 'অংশীদার হাসপাতাল', treatments: 'চিকিৎসা', freeConsultation: 'বিনামূল্যে পরামর্শ', faq: 'সচরাচর জিজ্ঞাসা', patientFeedback: 'রোগীর মতামত' },
        specialtiesTitle: 'বিশেষত্ব',
        spec: { organTransplant: 'অঙ্গ প্রতিস্থাপন', cardiology: 'কার্ডিওলজি', neuroSurgery: 'নিউরো সার্জারি', spineSurgery: 'স্পাইন সার্জারি', orthopedic: 'অর্থোপেডিক', cancer: 'ক্যান্সার' },
        getInTouch: 'যোগাযোগ করুন',
        visitUs: 'পরিদর্শন করুন', visitUsSub: 'দিল্লি, ভারত',
        callSub: 'সোম - রবি (সারাদিন)',
        emailSub: '২-৪ ঘণ্টার মধ্যে উত্তর',
        newsletterTitle: 'স্বাস্থ্য বিষয়ক তথ্য ও আপডেট',
        newsletterSubtitle: 'সুস্থতার পরামর্শ, বিনামূল্যে স্বাস্থ্য পরীক্ষার অফার এবং Medicure Trip-এর খবর পেতে সাবস্ক্রাইব করুন।',
        emailPlaceholder: 'আপনার ইমেইল ঠিকানা লিখুন',
        subscribe: 'সাবস্ক্রাইব করুন',
        copyrightSuffix: 'সর্বস্বত্ব সংরক্ষিত।',
        termsOfUse: 'ব্যবহারের শর্তাবলী',
        privacyPolicy: 'গোপনীয়তা নীতি',
      },
    },
  },
};

const STORAGE_KEY = 'medicure_lang';
const savedLang = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang && resources[savedLang] ? savedLang : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, lng);
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
});

export default i18n;
