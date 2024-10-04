# A-SAFE DIGITAL Technical Test

## NextJS / ReactTS / Redux / TailwindCSS

<br>

<div align="center">
  <img
    src="public/readme/project-overview.png"
    alt="Project overview"
    width="850"
  >
</div>

<br>

<div>

    This APP has been developed to connect to multiple API's, obtaining and displaying user
    information. The design of its architecture follows the principles of Clean Architecture
    and Screaming Architecture, ensuring a clear separation of responsibilities, modularity
    and scalability.

</div>

<br>

# Index

<br>

### **DEPLOY**: <br> https://a-safe-technical-test.vercel.app

<br>

## Deployment credentials

### EMAIL

```bash
kevinvdsd@asafe.com
```

### PASSWORD

```bash
mPJfMERwCA
```

<p>

    You can use the following credentials to access the application deployed on Vercel.
    Additionally, if you'd like to run the project locally, you can add these credentials
    to your own .env.local file.

</p>

<p>

    These data are used for authentication purposes within the application.
    They represent a mock email and password for development and testing.
    You may define them with your own values during local development.

    Note: In a real-world scenario, authentication should be handled by a secure back-end
    service. Sensitive user data (like passwords) should never be hard-coded or stored in
    environment variables for production environments.

</p>

<br>

## Project Setup

These are the instructions to setup and run the project in your local environment.

### Prerequisites

Before running this project locally, ensure that you have the following tools installed:

- **Node.js** <br> Version 16.x or higher (required for running Next.js). <br> You can download and install Node.js from
  [here](https://nodejs.org/). <br> Make sure you're using a version compatible with the project's dependencies
  (>=16.x).

- **npm** or **yarn** <br> Package managers to install dependencies. <br> Either **npm** (comes with Node.js) or
  **yarn**. Install **yarn** (if preferred) by running: `npm install --global yarn`

- **Git** <br> For cloning the repository. <br> Version control tool to clone the repository. Install from
  [here](https://git-scm.com/).

<br>

### Clone the repository

Clone the repository to your local machine using the following command:

```sh
  git clone https://github.com/KevinVanDerSchans/a-safe-technical-test.git
```

## .env.local file

Make sure to create a .env.local file in the project root for the necessary environment variables.

## Install dependencies

Install the project dependencies using the following command:

```sh
  npm install
```

## Run the development server

Run the development server to verify everything is working correctly:

```sh
  npm run dev
```

Compile and Minify for Production

```sh
  npm run build
```

Lint with [ESLint](https://eslint.org/)

```sh
  npm run lint
```

## Access the application

Open your browser and navigate to http://localhost:3000/ to see the application running.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

<br>

## Architecture and Design Patterns Used

### Dependency Inversion Principle (DIP)

This **Clean Architecture** principle allows high-level modules to remain independent of the details of low-level
modules by reversing dependencies. I implemented this to keep the core business logic isolated from external frameworks
or UI layers, ensuring scalability and easy maintenance.

In this project, I used `repositories` to keep the **domain logic isolated from external services** such as data
persistence or third-party APIs. This ensures that changes in external systems do not affect the core logic, making the
system more scalable and maintainable.

### Layered Architecture (Layered Pattern)

Clean Architecture promotes the **separation of responsibilities** across multiple layers (such as `domain`, `app`,
`infrastructure`, and `presentation`). By using this pattern, I ensured that changes in one layer do not affect others,
following principles such as the **Open-Closed Principle (OCP)**.

### Repository Pattern

I implemented this pattern to **abstract the data access layer from the business logic**. It centralizes data access and
ensures that the domain logic is not affected by persistence details. This allows for a clear separation of
responsibilities and more flexible, maintainable code.

For example, `UsersRepository` enables switching between different data sources (such as APIs or databases) without
affecting the core domain logic, ensuring easy extensibility.

### Entity Pattern

In this project, we have three entities: `User`, `Post`, and `Customer`. This pattern represents **key domain data**,
encapsulating properties and ensuring that the domain remains separate from concerns like UI and external data.

This follows the principle of **separation of responsibilities** in Clean Architecture.

### Presentation Component Pattern and Containers

I used this pattern to clearly **separate business logic from presentation logic**, which improves maintainability and
code reusability. Presentational components (e.g., `CustomerCard.tsx`, `PostCard.tsx`, `UsersList.tsx`) focus
exclusively on the UI and visual representation, while containers (e.g., custom hooks like `useFetchCustomers.ts` or
`useFetchPosts.ts`) handle the business logic, state, and interactions with external APIs or services.

### Centralized Error Handling Standard

I centralized error handling through a dedicated `ErrorService` module, ensuring that the system **handles errors
consistently across all layers**. This module captures errors from various failure points (e.g., API failures or
business logic exceptions), logs them for monitoring, and **returns user-friendly messages to the UI**. This provides a
uniform approach to error handling, improving maintainability and debuggability.

### Screaming Architecture

Following the principles of **Screaming Architecture**, the project structure was organized so that the core business
logic and domain model "shout out" what the application does. Each feature, such as `users` or `posts`, is encapsulated
in its own directory, containing all related components, services, repositories, and state management.

This organization highlights the system's purpose and functionality, making the codebase more intuitive and maintainable
by reducing technical clutter.

<br>

## Domain Model

The domain model of this application is designed to represent the core entities relevant to the system's business logic.
The entities are `User`, `Post` and `Customer`; each encapsulating specific attributes that align with the business
needs of the application. This design ensures that the domain logic remains isolated from other concerns, such as UI or
data persistence.

### Key Entities

- **User**: Represents an individual interacting with the system, associated with `Post` entity. Each `User` contains
  the following attributes:

  - `id`: A unique identifier for the user.
  - `name`: The full name of the user.
  - `username`: A username for the user.
  - `email`: The user's email address.
  - `address`: An object representing the user's address, which includes `city` and `zipcode`.
  - `company`: An object representing the user's company, which includes `name`.
  - `phone`: The user's phone number.
  - `website`: The user's personal or business website.

- **Post**: Represents content that comes from Users. A `Post` is tied to a `User` and has the following attributes:

  - `id`: A unique identifier for the post.
  - `userId`: The ID of the user who created the post, linking the post to the `User`.
  - `title`: The title of the post.
  - `body`: The main content of the post.

- **Customer**: Represents a real customer of the system, with additional personal details. Each `Customer` contains:
  - `gender`: The gender of the customer.
  - `name`: An object representing the customer's first and last name.
  - `location`: An object representing the customer's city and country.
  - `email`: The customer's email address.
  - `phone`: The customer's phone number.
  - `picture`: A URL to the customer's profile picture (large size).
  - `login` (optional): An object containing `uuid` and `username` for user identification.

### Relationships

- A `User` can have multiple `Posts`.
- Each `Post` is associated with a specific `User` through the `userId` field.
- `Customer` entities are independent and represent individual clients or profiles, with no direct relationship to
  `User` or `Post`.

### Design Rationale

This domain model was designed to maintain separation between the core business logic and external layers. The use of
interfaces and type safety (via **TypeScript**) ensures that the structure of these entities remains robust and
flexible. By encapsulating attributes and defining relationships clearly, the model remains adaptable to future changes
in business requirements without affecting other layers of the application.

- The `User` entity focuses on representing individuals who interact with the system, primarily related to the
  demonstration of posts.
- The `Post` entity serves as the primary content unit, tightly linked to users through their unique `userId`.
- The `Customer` entity adds flexibility by representing external users or profiles with personal details, providing a
  broader scope for client data management.

This approach aligns with the principles of **Clean Architecture**, keeping the domain layer decoupled from any
infrastructure or presentation concerns, ensuring that changes in external systems (e.g., APIs or databases) do not
impact the business logic.

<br>

## Lighthouse results

<div align="center">
  <img
    src="public/readme/lighthouse-results.png"
    alt="Project overview"
    width="850"
  >
</div>

<br>

## Features

<div>

    ✔️ Display of data across key entities: Users, Posts and Customers

    ✔️ Authentication with NextAuth, including secure sign-in, log-out and protected routes

    ✔️ Secure dashboard with statistics, client management and user data

    ✔️ Customizable theme system with Light, Dark and Solarized options

    ✔️ Error handling service with custom errors for precise issue detection

    ✔️ Dynamic user feedback with SweetAlert2

    ✔️ Fully responsive design, optimized for accessibility and SEO performance

</div>

<br>

## Technologies and Tools used

<div align="center">
  <br>
    <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="public/readme/svgs/nextjs.svg" alt="NextJS" width="60" height="60" style="margin-right: 24px"/></a>
    <a href="https://es.react.dev/" target="_blank" rel="noreferrer"> <img src="public/readme/svgs/react.svg" alt="React" width="60" height="60" style="margin-right: 24px"/></a>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="public/readme/svgs/typescript.svg" alt="TypeScript" width="60" height="60" style="margin-right: 24px"/></a>
    <br>
    <br>
    <a href="https://redux.js.org/" target="_blank" rel="noreferrer"> <img src="public/readme/svgs/redux.svg" alt="Redux" width="60" height="60" style="margin-right: 24px"/></a>
    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="public/readme/svgs/tailwind.svg" alt="TailwindCSS" width="60" height="60" style="margin-right: 24px"/></a>
  <br>
</div>

<br>

## Contribution

If you want to contribute to this project, follow these steps:

1. Perform a fork to the repository.

2. Create a branch for your feature or bugfix: `git checkout -b feature/your-feature-name`

3. Make the necessary changes and commits: `git commit -m 'Add some feature'`

4. Push to branch: `git push origin feature/your-feature-name`

5. Send a pull request to the original repository.

<br>

## Project Status

![COMPLETED](https://img.shields.io/badge/COMPLETED-green.svg)

<br>

## Project Developer

| [<img src="https://avatars.githubusercontent.com/u/122877560?v=4" width=115><br><sub>Kevin Schans</sub>](https://github.com/KevinVanDerSchans) |
| :--------------------------------------------------------------------------------------------------------------------------------------------: |
