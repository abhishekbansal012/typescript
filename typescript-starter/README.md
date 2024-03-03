# How to set up a Typescript with Node.js 

### In this guide, we will setup a basic typescript project along with node.js.

## Prerequisites
1. Node and npm should be installed
2. You should be familiar with Node and the npm ecosystem
3. Code editor should be installed

## Initial Setup 

### Step-1 Create a base folder
```shell
mkdir typescript-starter
cd typescript-starter
```
Next we wll set up the project ``package.json`` and add all dependencies

### Step-2 Set up package json

```shell
npm init -y
```

Using the ``-y`` flag when creating a package.json will approve all the defaults.


### Step-3 Adding typescript
```shell
npm install typescript --save-dev
```
After we install typescript, we get use command line TypeScript compiler through the tsc command.


### Install ambient Node.js types for TypeScript

```shell
npm install @types/node --save-dev
```


### Create a ``typescript.json``
The ``tsconfig.json`` is where we define the TypeScript compiler options.

```shell
npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
```

### Create the src folder and TypeScript file

```shell
mkdir src
touch src/index.ts
```

### Compiling our TypeScript

```shell
npx tsc
```


