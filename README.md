# Task Management API

## Overview
The Task Management API provides endpoints to create, retrieve, update, and delete tasks. This project is built using Node.js and Express and includes features for in-memory task storage, error handling, and testing.

---

## Features
- Create new tasks
- Retrieve all tasks or a specific task by ID
- Update existing tasks
- Delete tasks
- Error handling middleware for robust API responses
- Postman API testing

---

## Technologies Used
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **Supertest**: For API testing
- **Postman**: For API testing and documentation
- **Cors**: Cross-Origin Resource Sharing
- **Dotenv**: Manage environment variables

---

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or later)
- npm (Node package manager)
- [Postman](https://www.postman.com/) (for testing)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd task-management-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File
Create a `.env` file in the root directory and add the following environment variable:
```
PORT=4500
```

### 4. Run the Server
```bash
npm run dev
```
The API will be accessible at [http://localhost:4500](http://localhost:4500).

---

## API Endpoints

### Base URL
```
http://localhost:4500/tasks
```

### 1. **Get All Tasks**
**GET** `/tasks`
- Response:
    ```json
    {
      "success": true,
      "tasks": [
        {
          "id": 0,
          "title": "Task 1",
          "description": "Description for Task 1"
        }
      ]
    }
    ```

### 2. **Get Task by ID**
**GET** `/tasks/:id`
- Response (Success):
    ```json
    {
      "success": true,
      "task": {
        "id": 1,
        "title": "Task 1",
        "description": "Description for Task 1"
      }
    }
    ```
- Response (Error):
    ```json
    {
      "error": "Task not found"
    }
    ```

### 3. **Create a Task**
**POST** `/tasks`
- Request Body:
    ```json
    {
      "title": "New Task",
      "description": "Task Description"
    }
    ```
- Response:
    ```json
    {
      "success": true,
      "task": {
        "id": 4,
        "title": "New Task",
        "description": "Task Description"
      }
    }
    ```

### 4. **Update a Task**
**PUT** `/tasks/:id`
- Request Body:
    ```json
    {
      "title": "Updated Task",
      "description": "Updated Description"
    }
    ```
- Response:
    ```json
    {
      "success": true,
      "task": {
        "id": 1,
        "title": "Updated Task",
        "description": "Updated Description"
      }
    }
    ```
- Response (Error):
    ```json
    {
      "error": "Task not found"
    }
    ```

### 5. **Delete a Task**
**DELETE** `/tasks/:id`
- Response:
    ```json
    {
      "success": true,
      "message": "Task deleted"
    }
    ```

---

## Postman Usage
1. Open Postman.
2. Create a new request and select the appropriate HTTP method.
3. Enter the API endpoint (e.g., `http://localhost:4500/tasks`).
4. For POST and PUT requests, go to the **Body** tab, select **raw**, choose **JSON**, and provide the required request body.
5. Click **Send** to execute the request and view the response.

---

## Error Handling
All errors return a JSON response with the error message:
```json
{
  "error": "Something went wrong....!"
}
```

---

## Testing
To run the test suite, use the following command:
```bash
npm test
```

---

## Project Structure
```
.
├── src
│   ├── app.js
│   ├── controllers
│   │   └── taskController.js
│   ├── middlewares
│   │   └── errorHandler.js
│   ├── models
│   │   └── taskModel.js
│   └── routes
│       └── taskRoutes.js
├── test
│   └── taskApi.test.js
├── .env
├── package.json
└── README.md
```

---

## Future Improvements
- Integration with a database (MongoDB/MySQL)
- User authentication and authorization (JWT)
- Comprehensive test coverage

---

## License
This project is licensed under the MIT License.

---

## Acknowledgments
Thanks to the open-source community for their contributions and resources.

