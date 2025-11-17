   const menu = document.getElementById('menu');
const closebtn = document.getElementById('close-btn');
const closebtn2 = document.getElementById('close-btn2');
const closebtn3 = document.getElementById('close-btn3');
const closebtn4 = document.getElementById('close-btn4');
const closebtn5 = document.getElementById('close-btn5');
const navmobile = document.querySelector('.nav-links-mobile');
const sections = document.querySelectorAll('.section');
const mobmnu = document.querySelector('.mobile-menu');
const alink1 = document.querySelector('.alink1');
const alink2 = document.querySelector('.alink2');
const alink3 = document.querySelector('.alink3');
const alink4 = document.querySelector('.alink4');

const header = document.querySelector('.nav-container');
const option = document.getElementById('option-menu');
const theme = document.getElementById('theme-menu');
const lang = document.getElementById('lang-menu');
const contact = document.getElementById('contact-menu');
const menumobile= document.getElementById('menu-mobile');
const op = document.getElementById('op');
const th = document.querySelector('.themeicon');
const la = document.querySelector('.langicon');
//desktop icons
const thd = document.querySelector('.themeicond');
const lad = document.querySelector('.langicond');
const cod = document.querySelector('.contacticond');
const left =document.querySelectorAll('.left');
//desktop menus
const themedesk = document.querySelector('#themedesk');
const langdesk = document.querySelector('#langdesk');
const condesk = document.querySelector('#condesk');


const desktopMenus = [document.querySelector('#themedesk'), document.querySelector('#langdesk'), document.querySelector('#condesk')];

const settingsContainer = document.querySelector('#settings-container');
  const settingsBtn = document.getElementById('settings-btn');
const settingsMenu = document.querySelector('.settings-menu');
// عناصر القوائم اللي محتاجين نحميها من إغلاق عند الضغط جوّاها
const co = document.querySelector('.contacticon');
const links = [alink1, alink3, alink4];
const menus = {
  menu: document.getElementById('menu-mobile'),
  option: document.getElementById('option-menu'),
  theme: document.getElementById('theme-menu'),
  lang: document.getElementById('lang-menu'),
  contact: document.getElementById('contact-menu'),
settingsmenu: document.querySelector('.settings-menu')};

 // القائمة الرئيسية داخل settings (ul.settings-container)
//==============================
// alinks BG color selector

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active-link'));
    link.classList.add('active-link');
  });
});
  // ترجيع الصفحه للعرض الطبيعي
window.addEventListener("load", () => {
  document.body.style.zoom = "100%";
});

  // قفل كل القوائم
function closeAllMenus() {
  // === قفل قوائم الموبايل ===
  menumobile.style.display = 'none';
  option.style.display = 'none';
  theme.style.display = 'none';
  lang.style.display = 'none';
  contact.style.display = 'none';
  
  mobmnu.style.display = 'flex'; // رجع زرار المنيو فوق
  header.style.cssText = 'background:linear-gradient(to left, rgba(26, 106, 255, 0.5), #ffffff65, #ffffff62 80%, rgba(163, 51, 255, 0.52));';
  sections.forEach(sec => sec.style.filter = "blur(0px)");

  // === قفل قوائم الديسكتوب ===
  settingsContainer.classList.remove('active');
  settingsContainer.style.display = 'none';
  themedesk.style.display = 'none';
  langdesk.style.display = 'none';
  condesk.style.display = 'none';
}

// فتح القائمه لما تضغط على زرار الـ Gear
settingsBtn.addEventListener('click', (event) => {
  if (window.innerWidth > 800) {
    event.stopPropagation();
    
    // لو كانت مقفولة → افتحها
    if (settingsContainer.style.display === 'none' || !settingsContainer.style.display) {
      closeAllMenus(); // قفل أي حاجه مفتوحه قبلها
      settingsContainer.style.display = 'flex';
      settingsContainer.classList.add('active');
    } else {
      // لو كانت مفتوحه → اقفلها
      closeAllMenus();
    }
  }
});

  // رجّع شكل الهيدر

// فتح قائمة الاوبشن
// فتح المنيو الرئيسية
menu.addEventListener('click', () => {
  mobmnu.style.display = 'none';
  header.style.background = 'transparent';
  header.style.boxShadow = 'none';
 menumobile.style.cssText = 'display: flex; position: fixed; top: 0; left: 0; height: 100vh;';
  menumobile.classList.remove('close');
  menumobile.classList.add('open');
  sections.forEach(sec => sec.style.filter = "blur(5px)");
});
// فتح قائمة Options
// === Settings Menu Toggle (Desktop) ===

closebtn.addEventListener('click', () => {
mobmnu.style.display='flex'
 header.style.cssText='background:linear-gradient(to left, rgba(26, 106, 255, 0.5), #ffffff65, #ffffff62 80%, rgba(163, 51, 255, 0.52));'
  navmobile.classList.remove('open');
  navmobile.classList.add('close');
  sections.forEach(sec => sec.style.filter = "blur(0px)");
});

// === Open Option Menu ===
op.addEventListener('click', () => {
  menumobile.style.display = 'none';
  option.style.display = 'flex';
 option.style.cssText = 'display: flex; position: fixed; top: 0; left: 0; height: 100vh;';
  header.style.background = 'transparent';
  header.style.boxShadow = 'none';
  option.classList.add('open');
  option.classList.remove('close');
});

// === Close Option Menu ===
closebtn2.addEventListener('click', () => {
  option.classList.add('close');
  option.classList.remove('open');
  setTimeout(() => {
    option.style.display = 'none';
    menumobile.style.display = 'flex';
  }, 300);
});

// === Open Theme Menu ===
th.addEventListener('click', () => {
  option.style.display = 'none';
  theme.style.display = 'flex';
   theme.style.cssText = 'display: flex; position: fixed; top: 0; left: 0; height: 100vh;';
  header.style.background = 'transparent';
  header.style.boxShadow = 'none';
  theme.classList.remove('close');
  theme.classList.add('open');
 
});

// === Close Theme Menu ===
closebtn3.addEventListener('click', () => {
  theme.classList.add('close');
  theme.classList.remove('open');
  setTimeout(() => {
    theme.style.display = 'none';
    option.style.display = 'flex';
  }, 300);
});

// === Open Lang Menu ===
la.addEventListener('click', () => {
  option.style.display = 'none';
  lang.style.display = 'flex';
 lang.style.cssText = 'display: flex; position: fixed; top: 0; left: 0; height: 100vh;';
  header.style.background = 'transparent';
  header.style.boxShadow = 'none';
  lang.classList.add('open');
  lang.classList.remove('close');
});

// === Close Lang Menu ===
closebtn4.addEventListener('click', () => {
  lang.classList.add('close');
  lang.classList.remove('open');
  setTimeout(() => {
    lang.style.display = 'none';
    option.style.display = 'flex';
  }, 300);
});

// === Open Contact Menu ===
co.addEventListener('click', () => {
  option.style.display = 'none';
  contact.style.display = 'flex';
   contact.style.cssText = 'display: flex; position: fixed; top: 0; left: 0; height: 100vh;';
  header.style.background = 'transparent';
  header.style.boxShadow = 'none';
  contact.classList.add('open');
 contact.classList.remove('close');
});

// === Close Contact Menu ===
closebtn5.addEventListener('click', () => {
  contact.classList.add('close');
  contact.classList.remove('open');
  setTimeout(() => {
    contact.style.display = 'none';
    option.style.display = 'flex';
  }, 300);
});

// === Desktop Menus (Sub Menus) ===
settingsContainer.addEventListener('click', (event) => {
  if (window.innerWidth > 800) {
    event.stopPropagation();
    settingsContainer.classList.toggle('active');
  }
});


thd.addEventListener('click', (event) => {
  if (window.innerWidth > 800) {
    event.stopPropagation();
    settingsContainer.style.display = 'none';
    themedesk.style.display = 'flex';
    themedesk.classList.add('active');
    langdesk.style.display = 'none';
    condesk.style.display = 'none';
  }
});

lad.addEventListener('click', (event) => {
  if (window.innerWidth > 800) {
    event.stopPropagation();
    settingsContainer.style.display = 'none';
    langdesk.style.display = 'flex';
      langdesk.classList.add('active');
    themedesk.style.display = 'none';
    condesk.style.display = 'none';
  }
});

cod.addEventListener('click', (event) => {
  if (window.innerWidth > 800) {
    event.stopPropagation();
    settingsContainer.style.display = 'none';
      condesk.classList.add('active');
    condesk.style.display = 'flex';
    langdesk.style.display = 'none';
    themedesk.style.display = 'none';
  }
});

// رجوع من القوائم التلاتة
left.forEach(btn => {
  btn.addEventListener('click', () => {
  desktopMenus.forEach(m => m.style.display = 'none');
  settingsContainer.style.display = 'flex';
  });
});
// === Desktop Menus ===
document.querySelectorAll('.settings-container, #themedesk, #langdesk, #condesk')
.forEach(el => {
  el.addEventListener('click', (event) => event.stopPropagation());
});

sections.forEach(sec => {
  sec.addEventListener('click', closeAllMenus);
});
closebtn.addEventListener('click', closeAllMenus);
//home section
 function setActiveCard(clickedCard) {
            // Remove active class from all cards
            const allCards = document.querySelectorAll('.card');
            allCards.forEach(card => {
                card.classList.remove('active');
            });
            
            // Add active class to clicked card
            clickedCard.classList.add('active');
            
            // Optional: Remove active state after 3 seconds
            setTimeout(() => {
                clickedCard.classList.remove('active');
            }, 3000);
        }

        // Optional: Click outside to deactivate
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.card')) {
                const allCards = document.querySelectorAll('.card');
                allCards.forEach(card => {
                    card.classList.remove('active');
                });
            }
        });

// نحدد العناصر
const drk = document.querySelectorAll('.drk');
const allElements = document.querySelectorAll('*');

// دالة لتطبيق الثيم بناءً على القيمة المحفوظة
function applyTheme(theme) {
  if (theme === 'dark') {
    allElements.forEach(element => element.classList.add('dark-mode'));
  } else {
    allElements.forEach(element => element.classList.remove('dark-mode'));
  }
}

// نقرأ القيمة من localStorage عند تحميل الصفحة
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// عند الضغط على الزر
drk.forEach(btn => {
  btn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');

    // بدل الثيم
    allElements.forEach(element => {
      element.classList.toggle('dark-mode');
    });

    // احفظ القيمة الجديدة في localStorage
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
  });
});
onload = closeAllMenus();

        // light and dark mode
     //   const drk = document.querySelectorAll('.drk');
     //   const togglep = document.querySelectorAll('.toggle-p');
//const allelemnts = document.querySelectorAll('*')
//drk.forEach(dark => dark.addEventListener('click', () => {
//allelemnts.forEach(element => {
//element.classList.toggle('dark-mode');})
 // }))
 


