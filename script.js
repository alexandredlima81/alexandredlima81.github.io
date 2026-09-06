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
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

function changeLanguage(lang) {
    loadTranslations(translations => {
        applyTranslations(translations, lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('pt');

    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', () => changeLanguage(button.getAttribute('data-lang')));
    });

    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
