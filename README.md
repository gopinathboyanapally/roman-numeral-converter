# Roman Numeral Converter App
This is an application built that converts a number into roman numeral


### 📖 Roman Numeral Specification

This project follows the **standard rules of Roman numerals** as documented on [Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals).

**🔢 Valid Numerals**

- Standard Roman numerals use **I, V, X, L, C, D, M**.
- Numbers are **formed by adding or subtracting values** (e.g., `IX = 9`).
- The **valid range is 1 - 3999** (extensions beyond this use overlines).

**📜 Rules Followed**
- **Subtractive Notation** → `IV` (4) instead of `IIII`, `IX` (9) instead of `VIIII`.
- **No more than three consecutive identical symbols** (`III = 3`, but `IIII` is invalid).
- **Left-placed numerals subtract their value** → `XC = 90` (`100 - 10`).

For a detailed explanation, see the [Wikipedia page on Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals).


## Setup Instructions

### **Application Requirements and Dependencies**

- Node: `lts/fermium`
    - Run `nvm use` to make sure you are using the correct version
    - Install `nvm` if you haven't already: https://github.com/nvm-sh/nvm

- React
    -  Explore the world of SPA using React. Offical docs: https://react.dev/learn

- Express.js
    - A node.js framework for building backend applications. Docs: https://expressjs.com/en/starter/hello-world.html

- Docker
    - To debug a docker container or just verify that the app can be spun up in a local container. Download here: https://www.docker.com/get-started
    - If you need to update the image we use, check here for all the official options: https://hub.docker.com/_/node?tab=tags

- Webpack
    - (https://webpack.js.org/) - Module bundler for building the frontend.

- Jest
    - https://jestjs.io/ - JavaScript testing framework.

- React Testing Library
    - https://testing-library.com/react - Testing utilities for React.


### **Installation**

To install the roman-numeral-converter-service app in your local follow these steps:

1. Install NodeJS if its not already installed. You can install it by the `brew install node` command in your terminal (it can be on your root directory).

```
~ $ brew install node
```

2. Install NVM if its not already installed. You can install it by the `brew install nvm` command in your terminal (it can be on your root directory)

```
~ $ brew install nvm
```

3. Now that you have nvm installed, we need install nvm version then node version in the .nvmrc with the `nvm install` command

```
~ $ nvm install
```

4. Clone the repo from `tbd`

5. On your terminal, cd to the repo.

6. Now use the `nvm use` command to use a specific version of NodeJS.

```
    $ nvm use
```

>should output this

```
Found '[...your-repos-path]/[app-directory]/.nvmrc' with version <20.14.0>
Now using node v20.14.0(npm v10.7.0)
```

7. Install all the dependencies

```
~ $ npm install
```


### **Package Layout**

**🏗️ Frontend**
- `src/client` → Contains React components, hooks, and utilities.

**⚙️ Backend**
- `src/server` → Express API routes, controllers, and services.

**🛠 Configuration & DevOps**
- `.husky/` → Pre-commit hooks for linting and testing.
- `Dockerfile` → Instructions for building the app container.

**📦 Deployment & Build**
- `dist/` → Contains compiled frontend/backend (ignored in Git).
- `package.json` → Defines dependencies, scripts, and project metadata.
- `webpack.server.cjs` → Webpack config for backend bundling.
- `webpack.client.cjs` → Webpack config for frontend React bundling.


### **Running the app on localhost**
1. There are two parts to this application. Frontend (React UI) and Backend (express server).

2. Run `npm run start:dev` on your terminal to run the dev environment.

3. You can now check the express server running on `http://localhost:8080/romannumeral?query={number}` using Postman or web browser. Just change the {number} to test the response.

4. Now navigate to `http://localhost:3000/` for the UI.


### **Testing Time**
- Want to run unit tests? The code base is equipped with Jest and react-testing-library.
    - Run `npm run test` in your terminal to run the test cases.

### **Docker Time**
- Sometimes you'll need to verify that your local docker instance of the app builds, and works as expected. We have some convienent scripts for you. Run `npm run dockerize` to build and spin up a running docker image.

- To run the docker image that is built just run `npm run docker-run`.