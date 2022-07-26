# LinkSurge

alves-pokedex3.surge.sh


## Iniciando projeto

Começamos primeiramente fazendo a pagina de Router e Coordinator.
Em seguida tiramos algum tempo para estudar a API e ver seu funcionamento.
Com isso fizemos 3 páginas a PokeList, a Pokedex e os detalhes do Pokemon.

### Meio do projeto
Após temos estudado a API começamos a fazer as páginas e inicial, fizemos um Header para todas as páginas e nele colocamos algumas funções para ele modificar os botões dependendo dela. 
Também fizemos uma função para cada Tipo de Pokemon, como as cores do Card, fizemos a função de capturar e excluir Pokemon em todas as páginas, sendo que quando se vai de detalhes da Pokelist tem um botão capturar e na Pokedex existe o botão Deletar.


### Finalização do Projeto
Estilizamos então as 3 páginas com base no FIGMA, com isso conseguirmos concluir boa parte do projeto igual aquele que foi colocado lá no figma, fazendo responsividade em todas páginas do projeto, também fizemos a paginação até a página 7 que vai até os 180 Pokemons, a partir dela você pode seguir para outras páginas pela > pro lado. 

Por fim colocamos um Toast na página mostrando o que foi adicionado na Pokebola e semelhante. 

### Principais Dificuldades

Tivemos bastante dificuldade e até mudamos da ideia de fazer o botão do Header ter uma função de apagar e capturar, então passamos ela diretamente para os detalhes, tivemos também dificuldade dela migrar quando captura da tela detalhes e apagar pra fora dela.

### O que funciona
Capturar Pokemon
Ver os detalhes dos Pokemons e seus ataques básicos
Deletar Pokemons da sua Pokedex tanto nos detalhes quanto na própria Pokedex
Pokemons na Pokedex possuem animação
Toast quando captura ou apaga 
Navigate entre as páginas e mudança no Header sem ter um header em cada componente
Mudança de cor dos cards e tipos dependendo do tipo do Pokemon.

**Note: O que não funciona**
Botão de apagar no Header que apagamos 
Batalha Pokemon
Voltar após a apagar do detalhes 

