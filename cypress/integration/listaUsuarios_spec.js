/// <reference types="cypress" />

//const dados_usuario = require('../fixtures/dados_criarusuario.json')

describe('Visualização da lista de Usuários', () => {
    describe('Dado o acesso a pagina inicial', () => {
        before(() => {
            //? >>>>>> metodo nativo do cypress para ignorar os erros internos da aplicação <<<<<
            cy.on('uncaught:exception', (err) => {
                return true;
            })
            //! >>>>>> URL da pagina a ser testada <<<
            cy.url()

        })

        it('Quando acesso a opção "Formulário"', () => {
            cy.Formulario().click()

        })

        it('E acesso a opção de "Lista de Usuários"', () => {
            cy.listaUsuario()
                .should("be.visible")
                .and("contain.html", "Lista de Usuários")
                .click()
        })

        it('Então devo visualizar a lista de contatos cadastrados', () => {
            cy.get('table[class="highlight striped responsive-table"]', {
                timeout: 2000
            }).then((elements) => {
                expect(elements.length > 0).to.be.true
            })
        })

        it('E o numero de registros apresentados na lista tem que ser menor ou igual a 10 por pagina', () => {
            cy.get('table[class="highlight striped responsive-table"]', {
                timeout: 2000
            }).then((elements) => {
                expect(elements.length <= 10).to.be.true
            })
        })

    })

})