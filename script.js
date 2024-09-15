// Função para mudar o idioma da página
function changeLanguage(lang) {
    const translations = {
        pt: {
            title: "Bem-vindo à Minha Página",
            aboutTitle: "Sobre Mim",
            aboutDescription: "Olá! Sou um desenvolvedor apaixonado por tecnologia e programação. Aqui você encontrará alguns dos meus projetos e formas de entrar em contato.",
            projectsTitle: "Meus Projetos",
            project1Title: "Projeto 1",
            project1Description: "Descrição do projeto 1.",
            project2Title: "Projeto 2",
            project2Description: "Descrição do projeto 2.",
            project3Title: "Projeto 3",
            project3Description: "Descrição do projeto 3.",
            contactTitle: "Contato",
            contactDescription: "Entre em contato através do meu email.",
            footerText: "Minha Página no GitHub"
        },
        en: {
            title: "Welcome to My Page",
            aboutTitle: "About Me",
            aboutDescription: "Hello! I am a developer passionate about technology and programming. Here you will find some of my projects and ways to get in touch.",
            projectsTitle: "My Projects",
            project1Title: "Project 1",
            project1Description: "Description of project 1.",
            project2Title: "Project 2",
            project2Description: "Description of project 2.",
            project3Title: "Project 3",
            project3Description: "Description of project 3.",
            contactTitle: "Contact",
            contactDescription: "Get in touch via my email.",
            footerText: "My Page on GitHub"
        }
    };

    document.getElementById('page-title').textContent = translations[lang].title;
    document.getElementById('about-title').textContent = translations[lang].aboutTitle;
    document.getElementById('about-description').textContent = translations[lang].aboutDescription;
    document.getElementById('projects-title').textContent = translations[lang].projectsTitle;
    document.getElementById('project1-title').textContent = translations[lang].project1Title;
    document.getElementById('project1-description').textContent = translations[lang].project1Description;
    document.getElementById('project2-title').textContent = translations[lang].project2Title;
    document.getElementById('project2-description').textContent = translations[lang].project2Description;
    document.getElementById('project3-title').textContent = translations[lang].project3Title;
    document.getElementById('project3-description').textContent = translations[lang
