# Getting Started this system.

This project use docker to for development.

## How to run the app.

You can run the system by using two way:

Run using the old way by access index.php and don't forget to run phpMyAdmin
Then import database.sql/

### `Access index.php using normal way`

Run in the root of the your system if you are using linux or unix 
by opening the terminal.

### `sudo docker-compose up app`

The docker-compose file has all configurations on how to run the sytem and database.
No need to run your own phpMyAdmin, just add the .env file by refering to .env.example.

Use your postman or something else to access your API.
