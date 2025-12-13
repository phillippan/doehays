# DOE Task API

A Node.js API built with Koa.js for managing DOE related tasks, specifically handling location entries using SQLite database.

## Features

- RESTful API endpoints
- SQLite database for data persistence
- CORS support for cross-origin requests
- Request compression
- Body parsing for JSON payloads
- Input validation with Joi
- Middleware for common headers and logging

## Installation

1. Clone the repository
2. Navigate to the api directory
3. Install dependencies:

```bash
npm install
```

## Usage

### Development

Run the server in development mode with auto-restart:

```bash
npm run dev
```

### Production

Start the server:

```bash
npm start
```

The server will run on `http://localhost:3000` by default, or set the `PORT` environment variable.

## API Endpoints

### Root
- **GET /** - Welcome message and server status

### DOE Routes
- **GET /api/doe** - API status message
- **POST /api/doe** - Create a new location entry
  - Body: `{ "lat": number, "lon": number }`

## Dependencies

- **Koa.js** - Web framework
- **@koa/router** - Routing middleware
- **@koa/cors** - CORS middleware
- **koa-bodyparser** - Body parsing middleware
- **koa-compress** - Compression middleware
- **better-sqlite3** - SQLite database driver
- **joi** - Input validation

## Database

The API uses SQLite for storing location data. The database file is managed automatically.

## Author

Phillip Pan

## License

ISC