#   Metodologia utilizadas nos testes automatizados.

Dentro da pasta integration se encontra os testes automatizados, 
foi usado uma organização de projeto onde dentro dos arquivos 'specs.js'
é feito as validações dos componentes.

Na pasta suport dentro do arquivo 'command.js' é onde são especificado
os componentes que serão testados.

Na pasta fixtures dentro do arquivo 'dados_criarusuario.json' é aonde é
passado a massa de dados para teste.

No arquivo validacaoForm_spec.js eu usei uma outra metodologia ao invés 
de consumir os dados do Json , a massa de dados é passada diretamente 
dentro do arquivo validacaoForm_spec.js.

Na pasta videos , mostra os testes sendo executados.

A arquitetura do projeto é a padrão do cypress.