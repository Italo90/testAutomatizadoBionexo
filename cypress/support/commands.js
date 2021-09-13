// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import 'cypress-iframe';

const dados_usuario = require('../fixtures/dados_criarusuario.json')

Cypress.Commands.add("url",()=>{
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')    
})

Cypress.Commands.add("Formulario",()=>{
    cy.get('a[class="collapsible-header "]')
     
})

Cypress.Commands.add("criarUsuario",{timeout:5000},()=>{
    cy.get('a[href="/users/new"]')  
})

Cypress.Commands.add("listaUsuario",()=>{
    cy.get('a[href="/users"]')  
})

Cypress.Commands.add("formCriarUsuario",{timeout:5000},()=>{
    cy.get("form[id=new_user]") 
    cy.get("#user_name").type(dados_usuario.nome);
    cy.get('#user_lastname').type(dados_usuario.ultimoNome)
    cy.get('#user_email').type(dados_usuario.email)
    cy.get('#user_address').type(dados_usuario.endereco)
    cy.get('#user_university').type(dados_usuario.universidade)
    cy.get('#user_profile').type(dados_usuario.profissao)
    cy.get('#user_gender').type(dados_usuario.genero)
    cy.get('#user_age').type(dados_usuario.idade)
})

Cypress.Commands.add("botaoCriar",()=>{
    cy.get('input[value="Criar"]') 
})

Cypress.Commands.add("formvalidacao",(usuario)=>{
    cy.get("form[id=new_user]") 
    if(usuario.nome)cy.get("#user_name").type(usuario.nome);
    if(usuario.ultimoNome)cy.get('#user_lastname').type(usuario.ultimoNome)
    if(usuario.email)cy.get('#user_email').type(usuario.email)
    if(usuario.endereco)cy.get('#user_address').type(usuario.endereco)
    if(usuario.universidade)cy.get('#user_university').type(usuario.universidade)
    if(usuario.profissao)cy.get('#user_profile').type(usuario.profissao)
    if(usuario.genero)cy.get('#user_gender').type(usuario.genero)
    if(usuario.idade)cy.get('#user_age').type(usuario.idade)

})

Cypress.Commands.add("notificacaoErro",()=>{
    cy.get('#error_explanation')
})

Cypress.Commands.add("botaoEditar",()=>{
    cy.get('a[href="/users/11761/edit"]')
})

Cypress.Commands.add("botaoVisualizar",()=>{
    cy.get('a[href="/users/11718"]')
})

Cypress.Commands.add("botaoDeletar",()=>{
    cy.get('a[data-method="delete"]')
})




// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
