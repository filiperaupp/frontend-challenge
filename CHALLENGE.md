# Informações sobre o desafio

Aqui é possível ver todas as informações referentes ao desafio técnico, desde específicações dos requisitos e layout
que devem ser desenvolvidos. Leia com atenção até o final e qualquer dúvida é só entrar em contato com nós 😁

## Introdução

O desafio consiste em avaliar as habilidades com algumas tecnologias básicas no desenvolvimento front-end, tais como: HTML, CSS e Javascript. Foque em propor uma solução com um design de código bem elaborado e preparado para o crescimento da aplicação. Queremos ver o básico bem feito.

O desafio é o mesmo para Júnior, Pleno e Senior. A avaliação do mesmo é feita conforme o nível ao qual o você se candidatou no processo seletivo.

## Desafio

O desafio consiste em criar interfaces que possibilitem o usuário criar uma lista de tarefas, além de permitir que ele possa visualizar uma lista dessas tarefas separadas em "To Do" e "Done".

Disponibilizamos o design da interface através do Figma, [nesse link](https://www.figma.com/file/vCnePLYItUV1IyNwKr3gcv/Front-end-Challenge?node-id=0%3A1). Através dele você poderá encontrar as definições de estilo como: formas, cores, tamanhos e fontes. Além de conseguir rodar o protótipo navegável e entender o fluxo esperado.

Todos os assets podem ser exportados através do próprio Figma, a iconografia pode ser usada alguma ao qual você tem familiriadade ou preferência.

## Requisitos gerais

Informações sobre o que esperamos que o projeto do desafio contemple e a específicação de cada funcionalidade.

### Projeto

- O desafio deve ser desenvolvido utilizando React e Typescript;
- Não é permitido o uso de framework CSS (como Bootstrap, Material, Tailwind e outros). Nós queremos saber como você estrutura, organiza e escreve seus estilos;
- Fique a vontade para utilizar CSS-IN-JS (como styled-components, Stitches ou outros) ou pré-processadores CSS (como SASS ou LESS) ao escrever seus estilos;
- A interface deverá ser responsiva e respeitar o design proposto;
- Atender requisitos de semântica e acessibilidade;

### Funcionalidades do desafio

Descrição geral sobre o que é esperado de cada funcionalidade.

#### Tela Inicial

- Botão "Iniciar" redireciona para a Tela de Listagem de Tarefas.

#### Tela de Listagem de Tarefas

- Listagem das tarefas dividida em 2 colunas, na esquerda uma coluna com as tarefas pendentes e com o título de "To Do" e a direita as tarefas concluídas e com o título de "Done";
- Listagem corretamente das tarefas em suas respectivas colunas;
- Float Action Button (FAB) "Novo" abrirá uma sidebar na mesma página com o formulário de criação de uma nova tarefa.

#### Sidebar de Criação de uma Nova Tarefa

- Sidebar renderizando o formulário e com um botão de fechar;
- Formulário com os campos: Título, Descrição e Done;
- O formulário deve conter as seguinte validações: Título é um campo obrigatório, Descrição é um campo opcional e Done por padrão é um switch iniciado em falso;
- O botão de "Criar Tarefa" só poderá estar habilitado quando o formulário tiver passado pelas validações;
- Ao sucesso da criação da nova tarefa, o formulário deverá ser resetado, fechado e a nova tarefa deve estar refletida na listagem de tarefas na sua respectiva coluna, junto de um toast com uma mensagem de sucesso.

## API

Na pasta [db](https://github.com/plughacker/plug-test-front-end/tree/main/src/db) está feita uma configuração do [MirageJS](https://miragejs.com/) que cria uma simulação da API que será utilizada nesse desafio.
Basta rodar o projeto que o mesmo já irá fazer as configurações necessárias para o seu funcionamento.

### Listagem das Tarefas

Rota:

```
GET /tasks
```

Response:

```json
{
  "tasks": [
    {
      "id": "1",
      "title": "Teste para a Plug",
      "description": "Desenvolver o teste para a Plug Pagamentos",
      "done": false
    },
    {
      "id": "2",
      "title": "Fazer café",
      "description": "",
      "done": true
    }
  ]
}
```

### Criação de uma Nova Tarefa

Rota:

```
POST /tasks
```

Body:

```json
{
  "title": "Teste para a Plug",
  "description": "Desenvolver o teste para a Plug Pagamentos",
  "done": false
}
```

## O que esperamos

- Os requisitos gerais sejam cumpridos;
- Não tenha medo de usar libs (state management, http, etc...) pelo projeto conter poucas funcionalidades, lide como se fosse um proejeto que escalaria no futuro;
- Responsividade;
- Consistência de código;
- Semântica e Acessibilidade;
- Reuso de código;
- Separação dos conceitos e responsabilidades;
- Interface componentizável;
- Atenção aos detalhes;
- Testes automatizados.

## O que seria legal de ver mas não é obrigatório

- Testes E2E;
- Animações e micro interações fluídas;
- Configurações de ferramentas de code style/code formatter, lint e padronização de commits, como: ESLint, Prettier, Husky, etc...
- Escreva no projeto um arquivo MD nos contando sobre suas decisões técnicas, as dificuldades que teve, funcionalidades e melhorias que implementaria caso fosse um projeto longa vida.

## Instruções

- Use o Git e hospede seu repositório no GitHub e nos envie o link por e-mail quando finalizar o desenvolvimento;
- Faça commits separados de acordo com a evolução do seu teste, não faça 1 commit gigante ao final. Haja como se fosse um projeto real onde está trabalhando com mais pessoas;
- Bem documentado, queremos saber o que instalar e como rodar, sem isso não é possível avaliar.

## Dúvidas

Qualquer dúvida sobre o processo seletivo pode ser enviada para o e-mail em que o teste foi encaminhado. Você também pode conferir nas issues do repositório se alguém já tirou sua dúvida
ou sinta-se a vontade para abrir a sua! 😁

Boa sorte e bora codar! 🚀
