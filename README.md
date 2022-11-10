# O que será desenvolvido

Você irá criar uma aplicação que irá listar as principais animações do [Studio Ghibli](https://studioghibli.com.br/studioghibli/) onde será possivel favoritar uma animação.

👀 Dica: a estrutura de paginas e as rotas da aplicação já estão pronta!

1. Crie o `context` dentro do arquivo myContext.js dentro da pasta context, em seguida utilize o `Provider` no arquivo App.js envolvendo todas as rotas.

2. No arquivo App.js utilize os hooks `useEffect` para fazer a chamada a api utilizando o endpoint `films` e `useState` para armazenar o retorno da api

👉🏻 `https://ghibliapi.herokuapp.com/{endpoit}`

3. Agora você irá prover as animações para a página Home.js em pages, para isso utilise o hook `useContext`

- Liste pelo menos o titulo, a imagem e a descrição.

- Adicione um botão para salvar a animação na pagina de favoritos.

👀 Dica: aqui você pode utilizar o hook `useState` para salvar os items favoritados

⚠️ Atenção: A mesma animação não pode ser listada mais de uma vez na página de favoritos.

4. Vamos desenvolver a página de favoritos, utilize o `useContext` para acessar a lista de favoritos e mostre na tela suas informações.

- Adicione um botão para remover um item da lista.