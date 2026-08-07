// =========================
// 🌙 DARK MODE
// =========================

function toggleTheme() {

  document.body.classList.toggle("dark");

  const toggle =
    document.getElementById("themeToggle");

  localStorage.setItem(
    "theme",
    toggle.checked ? "dark" : "light"
  );

}

// =========================
// 🌐 LANGUAGE SWITCH
// =========================

const translations = {

  en: {
    "nav.about": "About Me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.contact": "Contact",

    "hero.greeting": "Hello, i am",
    "hero.namee": "Rauf Allahverdiev",
    "hero.btnProjects": "My Projects",
    "hero.btnContact": "Contact",

    "about.title": "About Me",
    "about.text": "I am interested in IT and enjoy learning new technologies. I have experience creating responsive websites using HTML, CSS, JavaScript, React and Bootstrap through personal projects. I like building simple, user-friendly interfaces and improving my frontend skills.I also have knowledge of IT support based on the CompTIA A+ Core 1 and Core 2 topics, including computer hardware, Windows, networking, troubleshooting, and Help Desk basics. I have worked with network switches using PuTTY and understand basic switch configuration, VLANs, and network connectivity.I enjoy solving technical problems and learning how different systems work. In my free time, I build personal projects, practice new technologies, and continue improving my skills. My goal is to start a career in IT, gain real-world experience, and keep growing as a professional.",

    "skills.title": "Skills",
    "skills.troubleshooting": "System Troubleshooting",
    "skills.hwsw": "Hardware & Software Installation",
    "skills.hwsw1": "Operating System Installation & Configuration",

    "projects.title": "Projects",

    "project1.title": "Movie Tracker",
    "project1.desc": "An advanced movie search application built with the TMDB API. Users can search for movies, explore detailed information including ratings, genres, and plot summaries, watch official trailers.",

    "project2.title": "Notepad",
    "project2.desc": "A modern note-taking application that allows users to create, edit, pin, and delete notes with ease. The application provides an intuitive and responsive interface for organizing personal notes, ensuring quick access to important information.",

    "project3.title": "Registration/Login",
    "project3.desc": "A responsive user authentication system with registration and login functionality powered by Local Storage. The application includes form validation, input restrictions for invalid characters, secure credential verification, and user-friendly error handling.",

    "project4.title": "ABB Web-Site",
    "project4.desc": "A modern banking website built with HTML and CSS, featuring a responsive design",

    "project5.title": "Code Academy Web-Site",
    "project5.desc": "A responsive website built with HTML and Bootstrap, featuring a responsive design",

    "project6.title": "Mini-Shop (In Development)",
    "project6.desc": "A fully functional online store with an admin dashboard that allows administrators to manage the store, add, edit, and delete products, while providing users with registration, login, and a seamless shopping experience using Local Storage.",

    "project7.title": "Task Flow",
    "project7.desc": "Task Flow is an advanced application built with HTML, CSS, JavaScript, and LocalStorage. It features a secure authentication system with user registration and login, allowing each user to manage their own projects and tasks. Users can organize their work using Kanban boards, monitor project progress, search and filter tasks, and receive deadline notifications.",

    "project8.title": "Resume Builder",
    "project8.desc": "Resume Builder is a modern web application(built with React) for creating professional resumes with customizable templates, real-time editing, PDF export, autosave, and responsive design. It offers multiple resume layouts, font and color customization, drag-and-drop section management, and an intuitive interface for quickly building ATS-friendly resumes.",


    "project.openBtn": "Open Project",

    "cv.title": "CV",
    "cv.btn": "Download CV",

    "contact.title": "Contact",
    "contact.email": "Email: rauf.allahverdievv@mail.ru",
    "contact.phone": "Phone: +994-70-203-43-05"
  },

  ru: {
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.cv": "Резюме",
    "nav.contact": "Контакты",

    "hero.greeting": "Привет, я",
    "hero.namee": "Рауф Аллахвердиев",
    "hero.btnProjects": "Мои проекты",
    "hero.btnContact": "Связаться",

    "about.title": "Обо мне",
    "about.text": "Я интересуюсь информационными технологиями и с удовольствием изучаю новые технологии. У меня есть опыт создания адаптивных веб-сайтов с использованием HTML, CSS, JavaScript, React и Bootstrap в рамках личных проектов. Мне нравится создавать простые, удобные для пользователя интерфейсы и совершенствовать свои навыки фронтенд-разработки.Также у меня есть знания в области ИТ-поддержки, основанные на темах CompTIA A+ Core 1 и Core 2, включая компьютерное оборудование, Windows, сети, устранение неполадок и основы работы службы поддержки. Я работал с сетевыми коммутаторами, используя PuTTY, и понимаю базовую конфигурацию коммутаторов, VLAN и сетевое подключение.Мне нравится решать технические проблемы и изучать, как работают различные системы. В свободное время я занимаюсь личными проектами, изучаю новые технологии и постоянно совершенствую свои навыки. Моя цель — начать карьеру в сфере ИТ, получить реальный опыт и продолжать расти как профессионал.",

    "skills.title": "Навыки",
    "skills.troubleshooting": "Устранение неполадок",
    "skills.hwsw": "Установка оборудования и ПО",
    "skills.hwsw1": "Установка и настройка операционной системы",

    "projects.title": "Проекты",

    "project1.title": "Movie Tracker",
    "project1.desc": "Продвинутое приложение для поиска фильмов, созданное с использованием TMDB API. Пользователи могут искать фильмы, изучать подробную информацию, включая рейтинги, жанры и описания сюжета, а также смотреть официальные трейлеры.",

    "project2.title": "Notepad",
    "project2.desc": "Современное приложение для заметок, позволяющее легко создавать, редактировать, закреплять и удалять заметки. Приложение предоставляет интуитивно понятный и адаптивный интерфейс для организации личных заметок и быстрого доступа к важной информации.",

    "project3.title": "Registration/Login",
    "project3.desc": "Адаптивная система аутентификации пользователей с функциями регистрации и входа на базе Local Storage. Приложение включает валидацию форм, ограничения на ввод недопустимых символов, безопасную проверку учётных данных и удобную обработку ошибок.",

    "project4.title": "ABB Web-Site",
    "project4.desc": "Современный банковский сайт, созданный с использованием HTML и CSS, с адаптивным дизайном.",

    "project5.title": "Code Academy Web-Site",
    "project5.desc": "Адаптивный сайт, созданный с использованием HTML и Bootstrap, с адаптивным дизайном.",

    "project6.title": "Mini-Shop (в разработке)",
    "project6.desc": "Полнофункциональный интернет-магазин с панелью администратора, позволяющей добавлять, редактировать и удалять товары, а также предоставляющий пользователям регистрацию, вход и удобный процесс покупок с использованием Local Storage.",

    "project7.title": "Task Flow",
    "project7.desc": "Task Flow — это продвинутое приложение, созданное с использованием HTML, CSS, JavaScript и LocalStorage. Оно включает в себя безопасную систему аутентификации с регистрацией и входом пользователей, позволяющую каждому пользователю управлять своими проектами и задачами. Пользователи могут организовывать свою работу с помощью досок Kanban, отслеживать ход выполнения проекта, искать и фильтровать задачи, а также получать уведомления о сроках выполнения.",

    "project8.title": "Resume-Builder",
    "project8.desc": "Resume Builder — это современное веб-приложение(создано с помощью React) для создания профессиональных резюме с настраиваемыми шаблонами, редактированием в реальном времени, экспортом в PDF, автосохранением и адаптивным интерфейсом. Приложение предлагает множество макетов резюме, настройку шрифтов и цветов, управление разделами с помощью drag-and-drop, а также интуитивно понятный интерфейс для быстрого создания резюме, оптимизированных для ATS-систем.",

    "project.openBtn": "Открыть проект",

    "cv.title": "Резюме",
    "cv.btn": "Скачать резюме",

    "contact.title": "Контакты",
    "contact.email": "Email: rauf.allahverdievv@mail.ru",
    "contact.phone": "Телефон: +994-70-203-43-05"
  },

  az: {
    "nav.about": "Haqqımda",
    "nav.skills": "Bacarıqlar",
    "nav.projects": "Layihələr",
    "nav.cv": "CV",
    "nav.contact": "Əlaqə",

    "hero.greeting": "Salam, mən",
    "hero.namee": "Rauf Allahverdiyevəm",
    "hero.btnProjects": "Layihələrim",
    "hero.btnContact": "Əlaqə",

    "about.title": "Haqqımda",
    "about.text": "Mən İT ilə maraqlanıram və yeni texnologiyalar öyrənməyi sevirəm. Şəxsi layihələr vasitəsilə HTML, CSS, JavaScript, React və Bootstrap istifadə edərək cavabdeh veb saytlar yaratmaq təcrübəm var. Sadə, istifadəçi dostu interfeyslər qurmağı və ön cəbhə bacarıqlarımı inkişaf etdirməyi xoşlayıram.Həmçinin, kompüter avadanlığı, Windows, şəbəkə, problemlərin aradan qaldırılması və Yardım Masası əsasları da daxil olmaqla CompTIA A+ Core 1 və Core 2 mövzularına əsaslanan İT dəstəyi haqqında biliklərim var. PuTTY istifadə edərək şəbəkə kommutatorları ilə işləmişəm və əsas kommutator konfiqurasiyasını, VLAN-ları və şəbəkə bağlantısını başa düşürəm.Texniki problemləri həll etməkdən və müxtəlif sistemlərin necə işlədiyini öyrənməkdən zövq alıram. Boş vaxtlarımda şəxsi layihələr qururam, yeni texnologiyalar tətbiq edirəm və bacarıqlarımı təkmilləşdirməyə davam edirəm. Məqsədim İT sahəsində karyeraya başlamaq, real təcrübə qazanmaq və peşəkar kimi inkişaf etməkdir.",

    "skills.title": "Bacarıqlar",
    "skills.troubleshooting": "Nasazlıqların aradan qaldırılması",
    "skills.hwsw": "Avadanlıq və Proqram Təminatının Quraşdırılması",
    "skills.hwsw1": "Əməliyyat Sisteminin Quraşdırılması və Konfiqurasiyası",

    "projects.title": "Layihələr",

    "project1.title": "Movie Tracker",
    "project1.desc": "TMDB API əsasında hazırlanmış qabaqcıl film axtarış tətbiqi. İstifadəçilər filmləri axtara, reytinqlər, janrlar və süjet təsvirləri daxil olmaqla ətraflı məlumatları araşdıra və rəsmi treylerlərə baxa bilərlər.",

    "project2.title": "Notepad",
    "project2.desc": "İstifadəçilərə qeydləri asanlıqla yaratmağa, redaktə etməyə, sabitləməyə və silməyə imkan verən müasir qeyd tətbiqi. Tətbiq şəxsi qeydlərin təşkili və vacib məlumatlara sürətli çıxış üçün intuitiv və adaptiv interfeys təqdim edir.",

    "project3.title": "Registration/Login",
    "project3.desc": "Local Storage əsasında işləyən qeydiyyat və giriş funksiyalı adaptiv istifadəçi autentifikasiya sistemi. Tətbiq form validasiyası, yanlış simvolların girişinin məhdudlaşdırılması, təhlükəsiz məlumat yoxlanışı və istifadəçi dostu xəta idarəetməsini əhatə edir.",

    "project4.title": "ABB Web-Site",
    "project4.desc": "HTML və CSS ilə hazırlanmış, adaptiv dizaynlı müasir bank sayt.",

    "project5.title": "Code Academy Web-Site",
    "project5.desc": "HTML və Bootstrap ilə hazırlanmış, adaptiv dizaynlı sayt.",

    "project6.title": "Mini-Shop (Hazırlanma mərhələsində)",
    "project6.desc": "Adminlərə mağazanı idarə etməyə, məhsul əlavə etməyə, redaktə etməyə və silməyə imkan verən admin paneli olan tam funksional onlayn mağaza, eyni zamanda istifadəçilərə Local Storage vasitəsilə qeydiyyat, giriş və rahat alış-veriş təcrübəsi təqdim edir.",

    "project7.title": "Task Flow",
    "project7.desc": "Task Flow HTML, CSS, JavaScript və LocalStorage ilə qurulmuş qabaqcıl bir tətbiqdir. İstifadəçi qeydiyyatı və girişi ilə təhlükəsiz identifikasiya sisteminə malikdir və hər bir istifadəçiyə öz layihələrini və tapşırıqlarını idarə etməyə imkan verir. İstifadəçilər Kanban lövhələrindən istifadə edərək işlərini təşkil edə, layihənin gedişatını izləyə, tapşırıqları axtara və süzgəcdən keçirə və son tarix bildirişləri ala bilərlər.",

    "project8.title": "Resume Builder",
    "project8.desc": "Resume Builder — peşəkar CV-lərin hazırlanması üçün nəzərdə tutulmuş müasir veb tətbiqidir(React ilə qurulmuşdur). Tətbiq fərdiləşdirilə bilən şablonlar, real vaxtda redaktə, PDF ixracı, avtomatik yadda saxlama (Auto Save) və adaptiv interfeys təqdim edir. O, müxtəlif CV dizaynları, şrift və rəng fərdiləşdirməsi, bölmələrin drag-and-drop ilə idarə olunması və ATS sistemləri üçün optimallaşdırılmış CV-lərin tez və rahat hazırlanması üçün intuitiv interfeys təklif edir.",
     
    "project.openBtn": "Layihəni Aç",

    "cv.title": "CV",
    "cv.btn": "CV-ni Yüklə",

    "contact.title": "Əlaqə",
    "contact.email": "Email: rauf.allahverdievv@mail.ru",
    "contact.phone": "Telefon: +994-70-203-43-05"
  }

};

function setLanguage(lang) {

  if (!translations[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {

    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];

    if (value) {
      el.textContent = value;
    }

  });

  document.documentElement.lang = lang;

  const label = document.getElementById("langLabel");
  if (label) {
    label.textContent = lang.toUpperCase();
  }

  document.querySelectorAll("#langMenu button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);

  closeLangMenu();

}

function toggleLangMenu(event) {

  event.stopPropagation();

  const menu = document.getElementById("langMenu");
  const btn = document.getElementById("langBtn");

  const isOpen = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");

}

function closeLangMenu() {

  const menu = document.getElementById("langMenu");
  const btn = document.getElementById("langBtn");

  if (menu) menu.classList.remove("open");
  if (btn) btn.setAttribute("aria-expanded", "false");

}

document.addEventListener("click", (event) => {

  const switcher = document.getElementById("langSwitch");

  if (switcher && !switcher.contains(event.target)) {
    closeLangMenu();
  }

});

// =========================
// 🚀 PAGE LOAD
// =========================

window.addEventListener("load", () => {

  const saved =
    localStorage.getItem("theme");

  const toggle =
    document.getElementById("themeToggle");

  if (saved === "dark") {

    document.body.classList.add("dark");

    if (toggle) {
      toggle.checked = true;
    }

  }

  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

});

// =========================
// ✨ SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(
(entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

},
{
  threshold: 0.15
});

document.querySelectorAll(
  ".card, .project-card"
).forEach(el => {
  observer.observe(el);
});
