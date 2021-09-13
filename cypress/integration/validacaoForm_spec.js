/// <reference types="cypress"/>

describe('Validações do Formulario de Criação de usuário', () => {
    describe('Validar campos obrigatorios', () => {

        describe('Quando submeto o cadastro sem "Nome"', () => {

            let usuario = {
                ultimoNome: 'lima',
                email: 'italo.lima@hotmail.com',
                endereco: 'rua da paz',
                universidade: 'Estacio',
                profissao: 'qa',
                genero: 'masc',
                idade: '30'
            }

            before(() => {
                //? >>>>>> metodo nativo do cypress para ignorar os erros internos da aplicação <<<<<
                cy.on('uncaught:exception', (err) => {
                    return true;
                })

                //! >>>>>> URL da pagina a ser testada <<<
                //cy.url()
                cy.visit("https://automacaocombatista.herokuapp.com/users/new")
                cy.formvalidacao(usuario)
                cy.botaoCriar().click()
            })

            it('Então deve mostrar um notificação informando o motivo do erro', () => {
                cy.notificacaoErro().contains('1 error proibiu que este usuário fosse salvo:')
            })
        })

        describe('Quando submeto o cadastro sem "E-mail"', () => {

            let usuario = {
                nome: 'italo',
                ultimoNome: 'lima',
                endereco: 'rua da paz',
                universidade: 'Estacio',
                profissao: 'qa',
                genero: 'masc',
                idade: '30'
            }
            before(() => {
                //? >>>>>> metodo nativo do cypress para ignorar os erros internos da aplicação <<<<<
                cy.on('uncaught:exception', (err) => {
                    return true;
                })

                //! >>>>>> URL da pagina a ser testada <<<
                //cy.url()
                cy.visit("https://automacaocombatista.herokuapp.com/users/new")
                cy.formvalidacao(usuario)
                cy.botaoCriar().click()
            })

            it('Então deve mostrar um notificação informando o motivo do erro', () => {
                cy.notificacaoErro().should('be.visible')
            })

        })

        describe('Quando submeto o cadastro sem o modelo de "E-mail" padrão', () => {

            let usuario = {
                nome: 'italo',
                ultimoNome: 'lima',
                email: 'italo.com',
                endereco: 'rua da paz',
                universidade: 'Estacio',
                profissao: 'qa',
                genero: 'masc',
                idade: '30'
            }
            before(() => {
                //? >>>>>> metodo nativo do cypress para ignorar os erros internos da aplicação <<<<<
                cy.on('uncaught:exception', (err) => {
                    return true;
                })

                //! >>>>>> URL da pagina a ser testada <<<
                //cy.url()
                cy.visit("https://automacaocombatista.herokuapp.com/users/new")
                cy.formvalidacao(usuario)
                cy.botaoCriar().click()
            })

            it('Então deve mostrar um notificação informando o motivo do erro', () => {
                cy.notificacaoErro().should('be.visible')
            })

        })


        describe('Quando submeto criar um cadastro sem preencher nenhum campo', () => {

            let usuario = {}
            
            before(() => {
                //? >>>>>> metodo nativo do cypress para ignorar os erros internos da aplicação <<<<<
                cy.on('uncaught:exception', (err) => {
                    return true;
                })

                //! >>>>>> URL da pagina a ser testada <<<
                //cy.url()
                cy.visit("https://automacaocombatista.herokuapp.com/users/new")
                cy.formvalidacao(usuario)
                cy.botaoCriar().click()
            })

            it('Então deve mostrar um notificação informando o motivo do erro', () => {
                cy.notificacaoErro().should('be.visible')
            })

        })

    })
})