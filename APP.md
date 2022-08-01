# Como rodar o projeto

Aqui é possível ver todas as informações iniciais sobre o template do teste, desde as dependências configuradas inicialmente e os comandos
importantes para rodar, buildar e testar o projeto.

## O que há nesse template?

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [MirageJS](https://miragejs.com/)
- [Polyfills](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme)

## Como rodar

1. Instale as deps

```bash
  yarn
```

2. Dev server com hot reload na http://localhost:3000.

```bash
yarn dev
```

## Comandos de testes

- Roda todos os testes
  ```bash
  yarn test
  ```
- Roda unit tests com watch
  ```bash
  yarn test:unit
  ```
- Roda unit tests com coverage
  ```bash
  yarn test:unit:coverage
  ```

## Comando de build

```bash
yarn build
```
