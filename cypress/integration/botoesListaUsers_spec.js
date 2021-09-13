/// <reference types="cypress" />

describe('Botões de ações da lista de Usuários', () => {
    describe('Dado o acesso a "Lista de Usuários"', () => {
        before(() => {
            //? >>>>>> metodo nativo do cypress para ignorar os erros internos da aplicação <<<<<
            cy.on('uncaught:exception', (err) => {
                return true;
            })
            //! >>>>>> URL da pagina a ser testada <<<
            cy.visit("https://automacaocombatista.herokuapp.com/users")

        })

    
        it('Então devo visualizar a lista de contatos cadastrados', () => {
            cy.get('table[class="highlight striped responsive-table"]', {
                timeout: 2000
            }).then((elements) => {
                expect(elements.length > 0).to.be.true
            })
        })

        it('E devo visualizar o botões de ações na lista de contatos', () => {
            cy.botaoVisualizar().should('be.visible')
            .and("contain.html", "search")
            
            cy.botaoEditar().should('be.visible')
            .and("contain.html", "edit")

            cy.botaoDeletar().should('be.visible')
            .and("contain.html", "delete")
        })

        // it('Então ao clicar no botão visualizar',()=>{
        //     cy.get('a[class="material-icons"]').should("contain.html","search")
        // })

    })

})