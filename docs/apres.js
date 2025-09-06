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
        position: "Analista de teste/QA",
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
                <button class="details-btn" onclick="openDetails(${experience.id})">
                    Detalhes
                </button>
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
        </div>
    `;
}

// Função para abrir detalhes
function openDetails(experienceId) {
    localStorage.setItem('selectedExperienceId', experienceId);
    window.open('/docs/detalhes', '_blank');
}

// Renderizar experiências
function renderExperiences() {
    const grid = document.getElementById('experiencesGrid');
    const experiencesHTML = experiences.map(exp => createExperienceCard(exp)).join('');
    grid.innerHTML = experiencesHTML;
}

// Função para download do CV
function downloadCV() {
    const cvContent = `
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

    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent);
    link.download = 'curriculo-igor-roberth-qa.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', function() {
    renderExperiences();
});