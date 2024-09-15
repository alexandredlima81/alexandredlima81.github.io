const translations = {
    pt: {
        "page-title": "Bem-vindo à Minha Página",
        "nav-about": "Sobre",
        "nav-projects": "Projetos",
        "nav-contact": "Contato",
        "about-title": "Sobre Mim",
        "about-description": "Olá! Sou um desenvolvedor apaixonado por tecnologia e programação. Aqui você encontrará alguns dos meus projetos e formas de entrar em contato.",
        "projects-title": "Meus Projetos",
        "project1-title": "Projeto 1",
        "project1-description": "Descrição do projeto 1.",
        "project2-title": "Projeto 2",
        "project2-description": "Descrição do projeto 2.",
        "project3-title": "Projeto 3",
        "project3-description": "Descrição do projeto 3.",
        "contact-title": "Contato",
        "contact-description": "Entre em contato através do meu email.",
        "footer-text": "Minha Página no GitHub"
    },
    en: {
        "page-title": "Welcome to My Page",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "about-title": "About Me",
        "about-description": "Hello! I am a developer passionate about technology and programming. Here you'll find some of my projects and ways to get in touch.",
        "projects-title": "My Projects",
        "project1-title": "Project 1",
        "project1-description": "Description of project 1.",
        "project2-title": "Project 2",
        "project2-description": "Description of project 2.",
        "project3-title": "Project 3",
        "project3-description": "Description of project 3.",
        "contact-title": "Contact",
        "contact-description": "Get in touch via my email.",
        "footer-text": "My Page on GitHub"
    }
};

function changeLanguage(language) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => {
        const translationKey = el.id;
        if (translations[language][translationKey]) {
            el.textContent = translations[language][translationKey];
        }
    });
}
