# EL WEB

Just Another React Js Components Library.

# Getting Started

To use this library in your project, just install it using npm and the repository url.

```js
npm install NewWaveWeb/el-web#master
```

Then, import the components that you want to use:

```js
  import { Title } from 'el-web';
```

# How to Contribute

## Running the application with docker
### 1. Install Docker

- [Install Docker](https://docs.docker.com/engine/installation/) in your machine for your corresponding OS.
- Verify your installation. Run:
``` bash
$ docker --version
Docker version 17.03.0-ce, build 60ccb22
```

### 2. Build the application

Run:

``` bash
$ docker-compose build
```

### 3. Running the application

``` bash
$ docker-compose up
```

### Running tests

When the application loads, it automatically runs the tests inside the container with the --watchAll flag. But, if for some reason you want to run them manually, you can use this command:

``` bash
docker exec -ti CONTAINER_NAME bash -c 'npm test'
```

## Structure of the Components Directory

### src/

All the components are placed under the src/ folder. If you want to create a new component use the following structure:

```
src/
├── index.js
├── MyComponent
│   └── __snapshots__
│       ├── index.js
│       ├── styles.js
│       └── MyComponent.test.js
```

## Storybook

This project has configured a [storybook](https://storybook.js.org/). If you run the application as discribed in [step 3](#3.-running-the-application), you will have an intereactive storybook and ready to use at: [http://localhost:6006](http://localhost:6006)

If you want to add an story to the storybook, you can add it in the stories/ folder at the root of this repository.

```js
  import React from 'react';
  import { storiesOf } from '@storybook/react';

  import { MyComponent } from '../src';

  storiesOf('MyComponent', module).add('default', () => <MyComponent />);
```

Checkout the storybook [documentation](https://storybook.js.org/basics/guide-react/) for more examples.