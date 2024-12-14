# PINCODE LOCATOR 🌎🚩

This is a simple Node.js application that uses Express.js to serve a basic API. It interacts with a MySQL database to manage data (e.g., adding and removing items from a list).

## Prerequisites

Before you can run this project, you need to have the following installed on your system:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MySQL**: [Download MySQL](https://dev.mysql.com/downloads/installer/)
- **npm (Node Package Manager)**: Comes with Node.js.

## Installation

1. Clone this repository to your local machine.

    ```bash
    git clone [<repository-url>](https://github.com/Vinayak-Sannaik/Pincode-Locator)
    cd Pincode-Locator
    ```

2. Install the project dependencies.

    ```bash
    npm install
    ```

## Environment Variables

Create a `.env` file in the root of the project to set the following environment variables:

```plaintext
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
PORT=5000
```

## Database Setup
Make sure you have MySQL running and a database created for this application.

Run the following SQL commands to create the necessary tables in your MySQL database:
```bash
CREATE TABLE favorites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    branch_type VARCHAR(255),
    delivery_status VARCHAR(255),
    circle VARCHAR(255),
    district VARCHAR(255),
    region VARCHAR(255),
    state VARCHAR(255)
);
```
### Running the Application
To start the application, run:

```bash
npm start
```
This will start the application on http://localhost:5000 and you can test using UI. 
## clicks📸.
![image](https://github.com/user-attachments/assets/24f6a465-0f95-4d96-af50-03514e6e3e1e)
![image](https://github.com/user-attachments/assets/34392e36-3631-4d69-ad2e-58ef78efa454)
![image](https://github.com/user-attachments/assets/3c467d22-ba02-4c91-92f4-8e2ce96da9d4)
![image](https://github.com/user-attachments/assets/153f769a-46af-46fd-8a96-bd56843bb55b)
![image](https://github.com/user-attachments/assets/169972d6-b2bd-4c26-bf6c-b5d65e699aea)







