# Vue 3 MCV example

This is example of vue 3 setup with MVC architecture

### why

MVC architecture breaks down a large application into three distinct components: the Model, View, and Controller. Each component has a specific role and responsibility within the application, contributing to its overall structure and functionality.

<https://medium.com/@-TutortAcademy/the-mvc-architecture-the-architecture-that-will-make-you-a-better-web-developer-dab9e0c3858e>

### model

- in `/api/model`
- data transformation, common business logic getters/setters, methods
- using `class-transformer` library to transform payload into classes

### view

- in .vue ( or tsx )
- only rendering logic

### controller

- in .ts, class vue components with decorators from `vue-facing-decorator`
- business logic for UI

### API

- using pokemon API

### `.tsx`

in this repo you will find also `.tsx` example, this has few issue that I encountered:

- no vue directives (`v-bind`, `v-for`).. everything must be done react style example:

  `v-for` => `list.map(() => ...)`

- no vue modifiers, higher order functions needs to be used example:

  `@keyup.submit` equivalent to that is `onKeyup={withModifiers(this.onSearch, ['submit'])}`

- css is not scoped need to use third party solution to prevent css conflicts

maybe for this case (`.tsx`) is better to use `react` instead

you can check `pokemon-search` directory

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
