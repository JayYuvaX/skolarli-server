# Skolarli Assessment Server

## Overview

This project is the backend API for the Skolarli assessment application.

It provides REST API endpoints to fetch multiple-choice assessment questions stored in MongoDB.
The frontend application consumes these APIs to display questions and calculate results.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv

## Features

* REST API to fetch assessment questions
* MongoDB database integration
* Express routing structure
* Environment variable configuration
* CORS enabled for frontend communication

## API Endpoint

Get all questions:

GET /api/questions

Example:

http://localhost:5000/api/questions

Live API:

https://skolarli-server.onrender.com/api/questions

## Project Structure

index.js → Main server file (Express app + MongoDB connection)

models/Question.js → MongoDB question schema

routes/questionRoutes.js → API routes for questions

## How to Run Locally

### 1. Clone the repository

git clone https://github.com/JayYuvaX/skolarli-server.git

### 2. Navigate to project folder

cd skolarli-server

### 3. Install dependencies

npm install

### 4. Create `.env` file

Create a `.env` file in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string

### 5. Start the server

node index.js

or if using nodemon:

npx nodemon index.js

### 6. Server will start at

http://localhost:5000

Test API:

http://localhost:5000/api/questions

## Deployment

Backend is deployed on Render:

https://skolarli-server.onrender.com

## Author

Jayanth
