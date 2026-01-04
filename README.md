# 📇 Gerenciador de Contatos - Salesforce Lightning Web Component

[![Salesforce](https://img.shields.io/badge/Salesforce-LWC-00A1E0?style=flat-square&logo=salesforce)](https://developer.salesforce.com/docs/component-library/documentation/en/lwc)
[![Apex](https://img.shields.io/badge/Apex-Class-0070D2?style=flat-square)](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

## 🎯 Sobre o Projeto

Sistema de gerenciamento de contatos desenvolvido na plataforma Salesforce, utilizando Lightning Web Components (LWC) e Apex. O componente exibe de forma dinâmica e responsiva todos os contatos associados a uma conta específica, proporcionando uma experiência de usuário moderna e intuitiva.

![Screenshot do Componente](images\Print org.png)

## ✨ Funcionalidades

- 📊 **Visualização em Tabela**: Exibição organizada de contatos em formato de datatable
- 🔄 **Atualização Automática**: Dados sincronizados em tempo real usando `@wire`
- 🎨 **Interface Moderna**: Design responsivo seguindo o Salesforce Lightning Design System (SLDS)
- ⚡ **Performance Otimizada**: Comunicação eficiente entre frontend (LWC) e backend (Apex)
- 🔍 **Filtragem por Conta**: Visualização contextual de contatos por Account ID

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Lightning Web Components (LWC)**: Framework JavaScript moderno da Salesforce
- **Salesforce Lightning Design System (SLDS)**: Sistema de design responsivo

### Backend
- **Apex**: Linguagem de programação nativa do Salesforce
- **SOQL**: Salesforce Object Query Language para consultas de dados

### Ferramentas de Desenvolvimento
- **Salesforce CLI**: Gerenciamento e deploy de metadados
- **VS Code**: IDE com extensões Salesforce
- **Jest**: Framework de testes (configurado)
- **ESLint**: Linting e padronização de código

## 📋 Estrutura do Projeto

```
GerenciadorDeContatos/
├── force-app/
│   └── main/
│       └── default/
│           ├── classes/
│           │   ├── ContactController.cls          # Controller Apex
│           │   └── ContactController.cls-meta.xml
│           └── lwc/
│               └── contactTableRenamedNew/
│                   ├── contactTableRenamedNew.html     # Template HTML
│                   ├── contactTableRenamedNew.js       # Lógica JavaScript
│                   └── contactTableRenamedNew.js-meta.xml  # Configuração do componente
├── config/
│   └── project-scratch-def.json                  # Definição de scratch org
├── jest.config.js                                # Configuração de testes
├── eslint.config.js                              # Configuração de linting
├── sfdx-project.json                             # Configuração do projeto Salesforce
└── package.json                                  # Dependências Node.js
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli) instalado
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Visual Studio Code](https://code.visualstudio.com/) com extensões Salesforce
- Conta de desenvolvedor Salesforce ou acesso a uma org

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/XXnicor/GerenciadorDeContatosApex.git
   cd GerenciadorDeContatosApex
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Autentique-se na sua org Salesforce**
   ```bash
   sfdx auth:web:login -a MyOrgAlias
   ```

4. **Faça o deploy do código para a org**
   ```bash
   sfdx force:source:deploy -p force-app/main/default
   ```

5. **Atribua permissões necessárias** (se aplicável)
   ```bash
   sfdx force:user:permset:assign -n <PermissionSetName>
   ```

6. **Abra a org no navegador**
   ```bash
   sfdx force:org:open
   ```

### Configuração do Componente

1. Navegue até uma página de registro de Account (Conta)
2. Clique em **⚙️ Edit Page** no canto superior direito
3. Arraste o componente **contactTableRenamedNew** para a página
4. Salve e ative a página

## 📊 Campos Exibidos

O componente exibe as seguintes informações dos contatos:

| Campo | Descrição | Tipo |
|-------|-----------|------|
| **First Name** | Primeiro nome do contato | Texto |
| **Email** | Endereço de e-mail | Email |
| **Phone** | Número de telefone | Telefone |
| **Job Title** | Cargo/função do contato | Texto |

## 🔧 Componentes Principais

### ContactController.cls (Apex)

```apex
@AuraEnabled(cacheable=true)
public static List<Contact> getContactsByAccountsID(Id accountId) {
    return [SELECT Id, FirstName, LastName, Email, Phone, Title 
            FROM Contact 
            WHERE AccountId = :accountId];
}
```

**Características:**
- `@AuraEnabled`: Expõe o método para componentes Lightning
- `cacheable=true`: Permite cache no lado do cliente para melhor performance
- Retorna lista de contatos filtrados por Account ID

### contactTableRenamedNew.js (LWC)

**Funcionalidades principais:**
- `@api recordId`: Recebe o ID do registro atual (Account)
- `@wire`: Sincronização reativa de dados com o Apex
- Tratamento de erros robusto
- Configuração de colunas da datatable

## 🧪 Testes

Execute os testes unitários:

```bash
npm run test:unit
```

Execute os testes com cobertura:

```bash
npm run test:unit:coverage
```

## 📈 Melhorias Futuras

- [ ] Implementar edição inline de registros
- [ ] Adicionar paginação para grandes volumes de dados
- [ ] Incluir filtros de busca e ordenação avançados
- [ ] Adicionar ações em massa (enviar emails, exportar, etc.)
- [ ] Implementar testes unitários completos com Jest
- [ ] Adicionar campo de pesquisa em tempo real
- [ ] Integrar com outras entidades relacionadas

## 👤 Autor

**Nicolas**

- GitHub: [@XXnicor](https://github.com/XXnicor)
- LinkedIn: [Seu LinkedIn](https://www.linkedin.com/in/nicolas-claudio-71038618b/)
