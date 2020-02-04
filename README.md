# Dmv

This project demonstrates how to build a monorepo of dependent components that are installed as a single package. It builds a library of components similar to Angular Material.

Most of the `nx` commands work as expected with the exception of those that are dependent the `dep-graph`. Commands that use `affected` don't work either.

# Building The Library

To build the component library for distribution run

`npm run build-libs`

This triggers a sequence of build scripts in the `package.json` to build the components in their order of dependencies.

# Consuming The Library

This library builds the set of components that are installed using a form like

`npm install @namespace/library`

This installs the collection of components in the project.

Angular Material supports 2 styles of importing into applications:

```
import { CoreModule } from '@dmv/demo'`
import { CoreModule } from '@dmv/core'
```

This repo supports the latter style only.

# Project Structure and Building

In `nx` parlance, a *library* is a unit of dependency and build which can include one or more angular *components*.

In this instance, we treat and think of the `nx` library as a component.

Building the component for distribution is a matter of configuring the `ng-packagr` control files.

## Configure Component `ng-package.json`

Define the destination based on the desired distribution package structure:

```
  "dest": "../../dist/@dmv/button",
```

The `umdId` provides the id for the module. The map of `umdModuleIds` keeps the complier from guessing about the dependencies:

```
    "umdId": "dmv.button",
    "umdModuleIds": {
      "@dmv/core": "dmv.core",
      "@dmv/link": "dmv.link"
    }
```

## Configure Component `package.json`

The main thing to configure here is the component name including the npmjs namespace:

```
  "name": "@dmv/button",
```

## Configure Component `tsconfig.lib.json`

When a component is built it reads the source for the component from the `src/libs` path. The dependencies for the component must be resolved from the previously built components. To enable this we need to add the path to the compiler options:

```
  "compilerOptions": {
    ...
    "paths": {
      "@dmv/*": ["dist/@dmv/*"]
    }
  },
```

## Configure Repo `tsconfig.json`

In order for Visual Studio Code to resolve the dependencies we need to configure the components in the project level `tsconfig.json`

```
  "compilerOptions": {
    ...
    "paths": {
      "@dmv/core": ["libs/core/src/index.ts"],
      "@dmv/button": ["libs/button/src/index.ts"],
      "@dmv/link": ["libs/link/src/index.ts"]
    }
  },
```