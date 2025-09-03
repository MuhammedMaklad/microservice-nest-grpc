# NestJS Microservice Project

This is a NestJS microservice project that consists of a `gateway` and an `auth` service. The `gateway` service is the entry point for the application and communicates with the `auth` service via gRPC.

## Project Structure

The project is a monorepo with the following structure:

-   `apps/gateway`: The main entry point for the application. This is a standard NestJS application with an HTTP interface.
-   `apps/auth`: A microservice that handles user authentication and management. It communicates with the `gateway` service via gRPC.
-   `libs/common`: A shared library that contains common code used by both the `gateway` and `auth` services.
-   `libs/database`: A shared library that contains the database module.
-   `proto`: Contains the protobuf file that defines the gRPC service contract between the `gateway` and `auth` services.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/en/)
-   [Docker](https://www.docker.com/)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

## Running the Application

### Using Docker

The easiest way to run the application is by using Docker Compose. This will start the `gateway`, `auth`, and `mongodb` services.

```bash
docker-compose -f docker-compose.dev.yml up -d
```

### Running Services Individually

You can also run each service individually.

**Gateway Service**

```bash
npm run start:dev:gateway
```

The `gateway` service will be available at `http://localhost:3001`.

**Auth Service**

```bash
npm run start:dev:auth
```

The `auth` service will be available at `localhost:50051`.

## Running Tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```