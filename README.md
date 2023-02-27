# TypeScript + Express + Vue Starter

This is a TypeScript + Express.js + Vue.js monorepo starter built with pnpm workspace and Turborepo.

## Usage

To use this starter, run the following command:

```bash
# Clone this starter
$ npx degit JustineLicuanan/typescript-express-vue-starter my-new-project

# cd into your cloned starter folder
$ cd my-new-project

# Install pnpm globally if you haven't yet
$ npm i -g pnpm

# Install dependencies
$ pnpm i

# Push the Prisma schema state to the SQLite database
$ pnpm run db:push

# Run the dev server
$ pnpm run dev
```

## What's inside?

This monorepo starter uses [pnpm](https://pnpm.io) as a package manager and [Turborepo](https://turbo.build/repo) as a build system. It includes the following packages/apps:

### Apps and Packages

-   `api`: an [Express.js](https://expressjs.com/) with [Prisma](https://www.prisma.io/) app
-   `web`: a [Vue.js](https://vuejs.org/) app
-   `schemas`: the entity schemas and types shared by both `api` and `web` applications

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This starter has some additional tools already setup for you:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting
