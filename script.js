const translations = {
    en: {
        pageTitle: "Welcome, GitHub Friends",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        aboutTitle: "About Me",
        aboutDescription: `Hello, everyone!<br><br>
            My name is Alexandre, a professional in Information and Communication Technology...`,
        projectsTitle: "My Projects",
        project1Title: "Project 1",
        project1Description: "Description of project 1.",
        project2Title: "Project 2",
        project2Description: "Description of project 2.",
        project3Title: "Project 3",
        project3Description: "Description of project 3.",
        contactTitle: "Contact",
        contactDescription: "Get in touch via <a href='mailto:youremail@example.com'>my email</a>.",
        footerText: "My GitHub Page"
    },
    pt: {
        pageTitle: "Bem-vindo amigos GithubIanos",
        navAbout: "Sobre",
        navProjects: "Projetos",
        navContact: "Contato",
        aboutTitle: "Sobre Mim",
        aboutDescription: `Olá, pessoal!<br><br>
            Meu nome é Alexandre, profissional da Tecnologia da Informação e Comunicação...`,
        projectsTitle: "Meus Projetos",
        project1Title: "Projeto 1",
        project1Description: "Descrição do projeto 1.",
        project2Title: "Projeto 2",
        project2Description: "Descrição do projeto 2.",
        project3Title: "Projeto 3",
        project3Description: "Descrição do projeto 3.",
        contactTitle: "Contato",
        contactDescription: "Entre em contato através do <a href='mailto:seuemail@exemplo.com'>meu email</a>.",
        footerText: "Minha Página no GitHub"
    }
};

function changeLanguage(lang) {
    document.getElementById('page-title').textContent = translations[lang].pageTitle;
    document.getElementById('nav-about').textContent = translations[lang].navAbout;
    document.getElementById('nav-projects').textContent = translations[lang].navProjects;
    document.getElementById('nav-contact').textContent = translations[lang].navContact;
    document.getElementById('about-title').textContent = translations[lang].aboutTitle;
    document.getElementById('about-description').innerHTML = translations[lang].aboutDescription;
    document.getElementById('projects-title').textContent = translations[lang].projectsTitle;
    document.getElementById('project1-title').textContent = translations[lang].project1Title;
    document.getElementById('project1-description').textContent = translations[lang].project1Description;
    document.getElementById('project2-title').textContent = translations[lang].project2Title;
    document.getElementById('project2-description').textContent = translations[lang].project2Description;
    document.getElementById('project3-title').textContent = translations[lang].project3Title;
    document.getElementById('project3-description').textContent = translations[lang].project3Description;
    document.getElementById('contact-title').textContent = translations[lang].contactTitle;
    document.getElementById('contact-description').innerHTML = translations[lang].contactDescription;
    document.getElementById('footer-text').textContent = translations[lang].footerText;
}
