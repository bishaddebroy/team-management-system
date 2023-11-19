# Team Management System API

This API provides endpoints to create teams within the Team Management System.

## Getting Started

Follow the instructions below to set up and run the Team Management System API locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://mysql.org/)
- [Docker](https://www.docker.com/)

### Installation

Clone the repository:
   git clone <repository-url>

Navigate to the project directory:
cd team-management-system

Install dependencies:
npm install

Start the application with Docker:
docker-compose up --build
The API will be accessible at http://localhost:3000.
Make sure you have mysql database installed and set up the .env variables.
Table: team (name, category)

API Endpoints
Create Team Endpoint: (Postman or any other REST Clients)
POST /create-team

Headers:
Authorization: Bearer `<your-jwt-token>`

Body (JSON):
{
  "name": "Team A",
  "category": "Development"
}

Response:
{
  "success": true, // or false
  "message": "Team created successfully", // or error message
  "teamId": 1 // or error details
}

Notes
Make sure to replace `<your-jwt-token>` with a valid JWT token for authentication.
Ensure that the required fields (name and category) are included in the request body for creating a team.

Replace `<repository-url>` with the actual URL of your Git repository.



