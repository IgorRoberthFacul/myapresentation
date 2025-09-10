// Dados das experiências
const experiences = [
    {
        id: 1,
        title: "Culture Builders",
        position: "Analista de QA - Freelance",
        description: "Atuando em consultoria de desenvolvimento humano que combina ciência comportamental, tecnologia e inovação. Trabalho com produtos como Talent Flow (software de gestão de talentos baseado em soft skills) e Verus (agente conversacional de IA para compliance com NR-1 e identificação de riscos psicossociais). Foco em testes manuais para soluções que promovem ambientes de trabalho mais saudáveis e produtivos.",
        technologies: ["Gestão de Talentos", "IA Conversacional", "NR-1 Compliance"]
    },
    {
        id: 2,
        title: "Bradesco - Análise de Crédito",
        position: "Analista de QA",
        description: "Atualmente, participo de um projeto web interno de Análise de Crédito para o Bradesco, automatizando a busca de informações em sistemas críticos como Receita Federal, SPC, Serasa, SIBA e RESG. Realizo validação de testes de API com Insomnia, Jira e Xray, além de análise de dados no MongoDB. Também valido critérios de crédito, classificando clientes por indicadores visuais: verde (apto), amarelo (pendências), vermelho (negado) e cinza (dados insuficientes).",
        technologies: ["MongoDB", "Insomnia", "Jira", "Xray"]
    },
    {
        id: 3,
        title: "Foursys - Plataforma de Ativos Financeiros",
        position: "Analista de QA",
        description: "Execução de testes detalhados em plataforma de compra e venda de ativos. Desenvolvimento de scripts automatizados com Java, JUnit e Selenium para testes regressivos. Realização de testes de segurança para identificar vulnerabilidades, documentação de defeitos via GitHub e colaboração ativa com equipe de desenvolvimento em revisões de código e reuniões diárias.",
        technologies: ["Java", "JUnit", "Selenium", "GitHub"]
    }
];

// Função para criar card de experiência com botão detalhes
function createExperienceCard(experience) {
    const techBadges = experience.technologies.map(tech =>
        `<span class="tech-badge">${tech}</span>`
    ).join('');

    return `
        <div class="experience-card">
            <div class="card-header">
                <h3 class="card-title">${experience.title}</h3>
                <p class="card-position">${experience.position}</p>
            </div>
            <div class="card-content">
                <div class="content-section">
                    <h4 class="section-subtitle">Descrição e Impacto</h4>
                    <p class="section-description">${experience.description}</p>
                </div>
                <div class="content-section">
                    <h4 class="section-subtitle">Tecnologias Utilizadas</h4>
                    <div class="technologies">
                        ${techBadges}
                    </div>
                </div>
            </div>

            <!-- botão agora está embaixo de tudo -->
            <button class="details-btn" onclick="openDetails(${experience.id})">
                Detalhes
            </button>
        </div>
    `;
}

// Modificar a função openDetails para não abrir nova página
function openDetails(experienceId) {

    const button = event.currentTarget;
    button.innerHTML = 'Carregando...';
    button.disabled = true;

    localStorage.setItem('selectedExperienceId', experienceId);
    window.location.href = `/detalhes?id=${experienceId}`;

    setTimeout(() => {
        window.location.href = '/detalhes';
    }, 500);
}

// Nova função para mostrar modal de detalhes
function showDetailsModal(experienceId) {
    const experience = getExperienceDetails(experienceId);
    
    if (!experience) {
        alert('Experiência não encontrada');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'details-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeDetailsModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeDetailsModal()">×</button>
            <div class="details-card">
                <h1 class="details-title">${experience.title}</h1>
                <p class="details-position">${experience.position}</p>
                
                <div class="details-section">
                    <h3>Informações Gerais</h3>
                    <p class="details-text"><strong>Período:</strong> ${experience.period}</p>
                    <p class="details-text"><strong>Empresa:</strong> ${experience.company}</p>
                    <p class="details-text"><strong>Localização:</strong> ${experience.location}</p>
                </div>
                
                <div class="details-section">
                    <h3>Sobre o Projeto</h3>
                    <p class="details-text">${experience.description}</p>
                </div>
                
                <div class="details-section">
                    <h3>Principais Responsabilidades</h3>
                    <ul class="details-list">
                        ${experience.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="details-section">
                    <h3>Principais Conquistas</h3>
                    <ul class="details-list">
                        ${experience.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="details-section">
                    <h3>Tecnologias e Ferramentas</h3>
                    <div class="tech-grid">
                        ${experience.technologies.map(tech => `<div class="tech-item">${tech}</div>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // Impedir scroll da página
}

// Função para fechar modal
function closeDetailsModal() {
    const modal = document.querySelector('.details-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Dados das experiências detalhadas (mover do detalhes.js)
function getExperienceDetails(experienceId) {
    const experiencesDetails = {
        1: {
            title: "Culture Builders",
            position: "Analista de QA - Freelance",
            period: "Julho 2025 - Presente",
            company: "Culture Builders",
            location: "São Paulo, Brasil - Remoto",
            description: "A Culture Builders é uma consultoria em desenvolvimento humano que combina ciência comportamental, tecnologia e inovação para apoiar empresas no crescimento sustentável.",
            responsibilities: [
                "Execução de testes manuais em produtos de gestão de talentos",
                "Validação de funcionalidades do Talent Flow (software de gestão baseado em soft skills)",
                "Testes de compliance para o agente conversacional Verus (NR-1)",
                "Identificação de riscos psicossociais através de testes especializados",
                "Colaboração com equipe de desenvolvimento para melhorias contínuas",
                "Documentação de processos de teste e resultados"
            ],
            achievements: [
                "Contribuição para redução de 40% nos bugs relacionados a soft skills",
                "Implementação de processos de teste para compliance NR-1",
                "Melhoria na qualidade dos produtos de gestão de talentos"
            ],
            technologies: ["IA Conversacional", "NR-1 Compliance"]
        },
        2: {
            title: "Foursys",
            position: "Analista de QA",
            period: "Julho 2025 - Presente",
            company: "Foursys",
            location: "São Paulo, Brasil - Remoto",
            description: "Atuação em projeto de Análise de Crédito do Bradesco, focando na validação de APIs, consistência de dados e classificação de clientes por indicadores de aprovação de crédito.",
            responsibilities: [
                "Atualmente, estou participando de um projeto voltado para Análise de Crédito, focado na validação e disponibilização de crédito para clientes do Bradesco.",
                "Meu trabalho envolve a validação de testes de API, garantindo que os dados retornados pelos sistemas estejam corretos e consistentes.",
                "Utilizo ferramentas como Insomnia para testes de endpoints, Jira e Xray para gestão e rastreabilidade de testes, e MongoDB para análise e armazenamento de dados.",
                "Realizo validações de valores e critérios de crédito, assegurando que os clientes sejam corretamente classificados por indicadores visuais."
            ],
            achievements: [
                "Agilização e automação da análise de crédito, garantindo rapidez, precisão e confiabilidade nas decisões financeiras."
            ],
            technologies: ["Insomnia", "Jira", "Xray", "MongoDB", "API Testing"]
        },
        3: {
            title: "Plataforma de Ativos Financeiros",
            position: "Analista de QA",
            period: "Maio 2024 - Presente",
            company: "Plataforma Financeira",
            location: "São Paulo, Brasil - Remoto",
            description: "Execução de testes detalhados em plataforma de compra e venda de ativos financeiros, com foco em segurança e automação.",
            responsibilities: [
                "Apoio desde planejamento até execução de planos de teste",
                "Análise de requisitos e escrita de casos de teste detalhados",
                "Desenvolvimento de scripts automatizados com Java, JUnit e Selenium",
                "Execução de testes de segurança para identificar vulnerabilidades",
                "Documentação de defeitos utilizando GitHub"
            ],
            achievements: [
                "Desenvolvimento de mais de 50 scripts automatizados",
                "Identificação e correção de 25+ vulnerabilidades de segurança",
                "Redução de 60% no tempo de execução de testes regressivos",
                "Melhoria na cobertura de testes para 85%"
            ],
            technologies: ["Java", "JUnit", "Selenium", "GitHub"]
        }
    };
    
    return experiencesDetails[experienceId];
}

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDetailsModal();
    }
});

// Renderizar experiências
function renderExperiences() {
    const grid = document.getElementById('experiencesGrid');
    const experiencesHTML = experiences.map(exp => createExperienceCard(exp)).join('');
    grid.innerHTML = experiencesHTML;
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = './curriculo2025.pdf';
    link.download = 'curriculo-igor-roberth-qa.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
} 
`
CURRÍCULO PROFISSIONAL - IGOR ROBERTH
ANALISTA DE QA

===========================================

RESUMO PROFISSIONAL:
Analista de QA com sólida experiência em testes manuais e automatizados, atuando em diferentes setores desde consultoria em desenvolvimento humano até plataformas financeiras. Expertise em ferramentas como Java, Selenium, Jira, GitHub e metodologias BDD, com foco em qualidade de software e segurança.

EXPERIÊNCIAS PROFISSIONAIS:

${experiences.map(exp => `
${exp.title}
${exp.position}

${exp.description}

Tecnologias: ${exp.technologies.join(', ')}

-------------------------------------------
`).join('')}

COMPETÊNCIAS TÉCNICAS:
• Testes Manuais e Automatizados
• Linguagens: Java
• Frameworks: JUnit, Selenium
• Ferramentas: Jira, Xray, Mobile Center, Confluence, GitHub
• Metodologias: BDD (Behavior Driven Development)
• Tipos de Teste: Funcionais, Regressão, Integração, Segurança, API
• Análise de Requisitos e Planejamento de Testes
• Gestão de Qualidade de Software
• Compliance e Processos (NR-1)
• Colaboração em Equipes Ágeis
`;

    function baixarCV() {
        const link = document.createElement('a');
        link.href = './curriculo2025.pdf';
        link.download = 'curriculo.pdf'; // nome do arquivo que será salvo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


// Inicializar a página
document.addEventListener('DOMContentLoaded', function() {
    renderExperiences();
});

// Animação das barras de skill
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.level-bar');
    
    skillBars.forEach(bar => {
        const width = bar.parentElement.parentElement.querySelector('.skill-card').getAttribute('data-width') || 
                     bar.getAttribute('data-width');
        if (width) {
            bar.style.setProperty('--skill-width', width + '%');
        }
    });
}

// Intersection Observer para animações
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animar barras de progresso
            const skillBars = entry.target.querySelectorAll('.level-bar');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    const skillCard = bar.closest('.skill-card');
                    const width = skillCard.getAttribute('data-width') || 
                                 bar.getAttribute('data-width');
                    if (width) {
                        bar.style.setProperty('--skill-width', width + '%');
                    }
                }, index * 200);
            });
            
            // Animar cards
            const skillCards = entry.target.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
});

// Inicializar animações
document.addEventListener('DOMContentLoaded', () => {
    // Configurar estado inicial dos cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
    });
    
    // Configurar larguras das barras
    const skillData = {
        'Testes Automatizados': 95,
        'Testes Manuais': 90,
        'API Testing': 95,
        'Java': 85,
        'Selenium': 90,
        'JUnit': 80,
        'Jira & Xray': 95,
        'MongoDB': 85,
        'Insomnia': 90,
        'Python': 60,
        'Cypress': 45,
        'AWS Testing': 30
    };
    
    skillCards.forEach(card => {
        const skillName = card.querySelector('h4').textContent;
        const width = skillData[skillName];
        if (width) {
            card.setAttribute('data-width', width);
        }
    });
    
    // Observar seção de skills
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});