/// <reference types="cypress" />

//const dados_usuario = require('../fixtures/dados_criarusuario.json')

describe('Criar Usuário', () => {
    describe('Quando Acesso a pagina inicial',()=>{
        before(() => {
            //? >>>>>> metodo nativo do cypress para ignorar os erros internos da aplicação <<<<<
            // cy.on('uncaught:exception', (err) => {
            //     return true;
            // })
            
            //! >>>>>> URL da pagina a ser testada <<<
            cy.url()
            //cy.Formulario().click()
            
        })  
    
        it('Então devo acessar a opção "Formulário"', () => {
            cy.Formulario().click()
            
        })

        it('E acessar a opção de "Criar Usuários"',()=>{
            cy.criarUsuario()
            .should("be.visible")
            .and("contain.html", "Criar Usuários")
            .click()
        })

        it('Quando preencher os dados pessoais validos para cadastro, aciona o botão "Criar"',()=>{
           cy.visit("https://automacaocombatista.herokuapp.com/users/new")
           cy.formCriarUsuario()
           cy.get('input[value="Criar"]').click()
            cy.get('.row.center').should('contain', 'Usuário Criado com sucesso')
           
        })

    })

})