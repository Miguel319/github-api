## GitHub API

This project uses the GitHub API to fetch repositories from a user, branches and commits from a repository and user data from a particular GitHub profile.

This repository contains the following projects:

- **`backend`**: built with [NestJS](https://docs.nestjs.com/), contains al the logic for interacting directly with the GitHub API.

- **`qwik-frontend`**: built with [Qwik](https://qwik.builder.io/docs/overview/), a new React framework with buil-in lazy loading capabilities. This app interacts direcly with the backend.

- **`next-frontend`**: built with [Next 13](https://beta.nextjs.org/docs), and [server components](https://beta.nextjs.org/docs/rendering/server-and-client-components). This app interacts directly with the backend.
