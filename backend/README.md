## GitHub API Implementation

This is a NestJS project that uses the GitHub API to fetch some data from a user. If you'd like to learn more about NestJS, please check the [documentation](https://docs.nestjs.com/).

In addition to that, the project uses a decoupling strategy called [CQRS](https://docs.nestjs.com/recipes/cqrs#cqrs), along with the [RxJS library](https://rxjs.dev/).

## Installation

```bash
$ npm i -g @nestjs/cli

$ npm install
```

## Setting environment variables

In order to run the project, you'll need to create .env at its root, and then add the following environment variables. The values for such variables cannot be provided in this .README file, but if you contact me (miguelp90.319@gmail.com), I could provide such variables to you:

- ```GITHUB_TOKEN```
- ```GITHUB_URL```
- ```JSON_VND```
- ```HTTP_TIMEOUT```
- ```HTTP_MAX_REDIRECTS```
- ```PORT```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints

- **/github/:user/user-info** -> Get information from a user.

- **/github/:user/repositories** -> Get list of repositories from a user.

- **/github/:user/:repository/commits** -> Get commits from a repository.

- **/github/:user/repositories/:repository/branches** -> Get branches from a repository.
