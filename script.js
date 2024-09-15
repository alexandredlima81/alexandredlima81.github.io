const translations = {
    en: {
        pageTitle: "Welcome, GitHub Friends",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        aboutTitle: "About Me",
        aboutDescription: "Professional in the field of IT Operations and Communication. Focused on management and support for people, processes, and technological solutions related to infrastructure (On Premise / Cloud). My goal is to continue professional and personal development.",
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
            Meu nome é Alexandre, profissional da Tecnologia da Informação e Comunicação que está em busca constante de desafios para evoluir em conhecimento! 🚀<br><br>
            Quem sou eu? Bem, atuando desde sempre na área de Infraestrutura.<br><br>
            Nos últimos anos, mergulhei de cabeça em tecnologias da AWS "❤️" e práticas DevOps, em busca de me tornar mais um Jedi da Tecnologia 😅, tanto no mundo On-Premise, Datacenters quanto em Cloud Pública ☁️.<br><br>
            O que faço? Estou sempre navegando entre processos, pessoas e soluções tecnológicas, com a missão de garantir que cada solução esteja em sintonia com os objetivos e necessidades das organizações onde atuo.<br><br>
            Meu objetivo? Continuar a trilhar o caminho do desenvolvimento profissional e pessoal, buscando novas aventuras tecnológicas e oportunidades para crescer, desenvolver e colaborar cada vez mais 💡.<br><br>
            E como parte desta caminhada, venho através desta página aqui no Github.io, compartilhar tópicos relacionados às nossas necessidades do dia a dia, aceitando sugestões e ajuda para que juntos possamos fortalecer a comunidade do conhecimento compartilhado.`,
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
