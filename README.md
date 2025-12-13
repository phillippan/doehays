# DOE Project

A full-stack web application for managing DOE tasks and locations. The application consists of a Vue.js frontend with interactive maps and a Node.js backend API.

## Project Structure

- **api/** - Backend API built with Koa.js
- **doe/** - Frontend application built with Vue.js and OpenLayers

## Features

### Frontend (doe/)
- Interactive map interface using OpenLayers
- Vue 3 with TypeScript
- Pinia for state management
- Vue Router for navigation
- Fetch for API communication
- Cypress for end-to-end testing
- Vitest for unit testing

### Backend (api/)
- RESTful API with Koa.js
- SQLite database for location data
- CORS support
- Request compression and body parsing
- Input validation with Joi

## Prerequisites

- Node.js (version 20.19.0 or >=22.12.0)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone git@github.com:phillippan/doehays.git
cd DOE
```

2. Install backend dependencies:
```bash
cd api
npm install
```

3. Install frontend dependencies:
```bash
cd ../doe
npm install
```

## Usage

### Running the Backend

1. Navigate to the api directory:
```bash
cd api
```

2. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Running the Frontend

1. Navigate to the doe directory:
```bash
cd doe
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port)

## API Endpoints

- **GET /** - Welcome message
- **GET /api/doe** - API status
- **POST /api/doe** - Create location entry (requires lat/lon in body)

## Testing

### Frontend Unit Tests
```bash
cd doe
npm run test:unit
```

### Frontend E2E Tests
```bash
cd doe
npm run test:e2e
```

### Backend Tests
```bash
cd api
npm test
```

## Building for Production

### Frontend
```bash
cd doe
npm run build
```

### Backend
```bash
cd api
npm start
```

## Technologies Used

- **Frontend:** Vue.js, TypeScript, OpenLayers, Pinia, Vue Router, Axios
- **Backend:** Node.js, Koa.js, SQLite, Joi
- **Testing:** Vitest, Cypress
- **Build Tools:** Vite, ESLint, Prettier

## Author

Phillip Pan

## License

ISC