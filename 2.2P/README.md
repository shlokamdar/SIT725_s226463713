# SIT725 - Task 2.2P: Express Web Servers

A simple Express.js web server for Task 2.2P, covering:

- **Part 1**: a static web page served from the `public` folder.
- **Part 2**: a REST API with a GET endpoint that adds two numbers on the
  server (plus subtract/multiply/divide, and a POST `/calculate` endpoint).

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

The server starts at `http://localhost:3000`.

## Endpoints

| Method | Path          | Example                              | Description                     |
|--------|---------------|---------------------------------------|----------------------------------|
| GET    | `/`           | `http://localhost:3000/`              | Static page from `public/`       |
| GET    | `/add`        | `/add?a=5&b=3`                        | Adds two numbers                 |
| GET    | `/subtract`   | `/subtract?a=5&b=3`                   | Subtracts b from a               |
| GET    | `/multiply`   | `/multiply?a=5&b=3`                   | Multiplies two numbers           |
| GET    | `/divide`     | `/divide?a=10&b=2`                    | Divides a by b                   |
| POST   | `/calculate`  | JSON body `{ "a":5,"b":3,"op":"add" }` | Generic calculator (add/subtract/multiply/divide) |

## Project structure

```
.
├── public/
│   └── index.html    # static page + simple calculator UI that calls the API
├── server.js         # Express app and routes
├── package.json
└── README.md
```