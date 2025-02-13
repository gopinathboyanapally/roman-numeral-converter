# Roman Numeral Converter App
This is an application built that converts a number into roman numeral

## Setup Instructions

**Application Requirements**

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

**Installation**
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

**Running the app on localhost**
1. There are two parts to this application. Frontend (React UI) and Backend (express server).

2. Run `npm run start:dev` on your terminal to run the dev environment.

3. You can now check the express server running on `http://localhost:8080/romannumeral?query={number}` using Postman or web browser. Just change the {number} to test the response.

4. Now navigate to `http://localhost:3000/` for the UI.


**Testing Time**
- Want to run unit tests?
    - Run `npm run test` in your terminal

**Docker Time**
- Sometimes you'll need to verify that your local docker instance of the app builds, and works as expected. We have some convienent scripts for you. Run `npm run dockerize` to build and spin up a running docker image.

- To run the docker image that is built just run `npm run docker-run`. 