function loadTranslations(callback) {
    fetch('translations.json')
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(error => console.error('Error loading translations:', error));
}

function applyTranslations(translations, lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang][key]) {
            if (translations[lang][key].includes('<') || translations[lang][key].includes('</')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.startsWith('pt') ? 'pt' : 'en';
}

function changeLanguage(lang) {
    loadTranslations(translations => {
        applyTranslations(translations, lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    changeLanguage(lang);
});
