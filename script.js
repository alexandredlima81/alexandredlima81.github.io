const translations = {
    en: {
        pageTitle: "Welcome, GitHub Friends",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        aboutTitle: "About Me",
        aboutDescription: `Hello, everyone!<br><br>
        My name is Alexandre, a professional in Information and Communication Technology, always looking for challenges to evolve in knowledge! 🚀<br><br>
        Who am I? Well, I have always worked in the Infrastructure area.<br><br>
        In recent years, I have dived deep into AWS technologies "❤️" and DevOps practices, aiming to become a Jedi of Technology 😅, both in the On-Premise world, Datacenters, and Public Cloud ☁️.<br><br>
        What do I do? I am always navigating between processes, people, and technological solutions, with the mission to ensure that each solution is in sync with the goals and needs of the organizations where I work.<br><br>
        My goal? To continue on the path of professional and personal development, seeking new technological adventures and opportunities to grow, develop, and collaborate more and more 💡.<br><br>
        And as part of this journey, I come through this page here on Github.io to share topics related to our day-to-day needs, accepting suggestions and help so that together we can strengthen the community of shared knowledge.`,
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
    document
