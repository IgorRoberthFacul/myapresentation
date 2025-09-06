// Dados detalhados das experiências
// Corrigir a experiência 2 - remover aspas extras
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
        title: "Bradesco",
        position: "Analista de teste/QA",
        period: "Julho 2025 - Presente",
        company: "Foursys",
        location: "São Paulo, Brasil - Remoto",
        description: "Atuação em projeto de Análise de Crédito do Bradesco, focando na validação de APIs, consistência de dados e classificação de clientes por indicadores de aprovação de crédito.",
        responsibilities: [
            "Atualmente, estou participando de um projeto voltado para Análise de Crédito, focado na validação e disponibilização de crédito para clientes do Bradesco. O sistema automatiza a busca de informações em diversos sistemas críticos de consulta, como Receita Federal, SPC, Serasa, SIBA, RESG e outros, utilizando o número de proposta do cliente.",
            "Meu trabalho envolve a validação de testes de API, garantindo que os dados retornados pelos sistemas estejam corretos e consistentes. Para isso, utilizo ferramentas como Insomnia para testes de endpoints, Jira e Xray para gestão e rastreabilidade de testes, e MongoDB para análise e armazenamento de dados.",
            "Além disso, realizo validações de valores e critérios de crédito, assegurando que os clientes sejam corretamente classificados por indicadores visuais de aprovação:",
            "Farol verde: cliente apto a receber o crédito;",
            "Farol amarelo: análise parcial ou pendências;",
            "Farol vermelho: crédito negado;",
            "Farol cinza: situação indefinida ou dados insuficientes."
        ],
        achievements: [
            "O projeto agiliza e automatiza a análise de crédito, garantindo rapidez, precisão e confiabilidade nas decisões financeiras, ao mesmo tempo em que facilita a verificação de informações críticas em múltiplos sistemas internos."
        ],
        technologies: ["Insomnia", "Jira", "Xray", "MongoDB"]
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
            "Documentação de defeitos utilizando GitHub",
            "Acompanhamento de status de defeitos e atualização de cards",
            "Participação em revisões de código e reuniões diárias",
            "Manutenção de documentação detalhada de processos e resultados"
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

function renderExperienceDetails() {
    const experienceId = localStorage.getItem('selectedExperienceId');
    const experience = experiencesDetails[experienceId];
    
    if (!experience) {
        document.getElementById('detailsCard').innerHTML = `
            <h2>Experiência não encontrada</h2>
            <p>Não foi possível carregar os detalhes desta experiência.</p>
        `;
        return;
    }
    
    const detailsHTML = `
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
    `;
    
    document.getElementById('detailsCard').innerHTML = detailsHTML;
}

// Inicializar página de detalhes
document.addEventListener('DOMContentLoaded', function() {
    renderExperienceDetails();
});