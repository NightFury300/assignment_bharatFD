# FAQ Multi-Lingual (Bharat FD Assignment)

[Github Page](https://github.com/NightFury300/assignment_bharatFD)

A service to accept FAQs and translate the question automatically to other language.

## Features
- The service can have FAQs added using the Admin Tab.
- The FAQs are processed and converted to other languages - hindi,bengali as well, then added to database. Now we can view FAQs in our desired language from home screen. We also use caching for quick retrival of FAQs.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Caching**: Redis
- **Frontend**: React.js
- **Database**: MongoDB
- **Testing**: Mocha, Chai, Supertest
- **Deployed**: Docker

## Steps to Set Up (Using Docker)- RECOMMEND APPROACH

1.Clone the repository using
```sh
git clone https://github.com/NightFury300/assignment_bharatFD.git
```

2.Use Command to change directory to assignment_ast folder which contains the src folder
```sh
cd assignment_bharatFD
```

3.Make sure docker is running and use the command
```sh
docker-compose build
```

4.After building start the server using
```sh
docker-compose up
```

5.The frontend server should be up and running now, at-
```sh
http://localhost:5173/
```
Refer to the Instructions provided below.

## Steps To Step Up (Without Docker)-

1.Clone the repository using
```sh
git clone https://github.com/NightFury300/assignment_bharatFD.git
```
2.Use Command to change directory to assignment_ast folder which contains the src folder
```sh
cd assignment_bharatFD
```

**BACKEND-**

1.Use command to install all the dependencies
```sh
cd backend
npm install
```

2.Modify MONGODB_URI ```.env ``` file and DB_NAME ```constants.js``` if you want to use your own **database** using your database uri and **Port** of your choosing. You might also need to modify REDIS_HOST, REDIS_PASSWORD, REDIS_PORT if you want to use your own redis server. I have supplied my .env file to run it directly on my db and redis.

3.Use Command
```sh 
npm run dev
```

4.The backend of the server is at(or whichever port you choose)
```sh 
http://localhost:3001/
```

**FRONTEND-**

1.Use command to install all the dependencies
```sh
cd frontend
npm install
```

2.Use Command
```sh 
npm run dev
```

3.The frontend of the server is at(or whichever port you choose)
```sh 
http://localhost:5173/
```


## How to use

Upon accessing `http://localhost:5173/`, all the present FAQs will be retrived from DB or Cache, we can change view language by drop down tool.
Go to Admin tab using NavBar to Add More FAQs. **P.S- On Submitting new FAQ, it might take a few seconds to submit, give it a few moments, it will notify using an alert pop up when submitted succesffuly.**
Now you can go to home tab to view the new FAQs you just added.

## API

**1. Fetch FAQs**
Fetches all the FAQs data from Database or Cache(if possible)

**URL:** ```/api/faqs?lang=en```

**Method:** ```GET```

**Request Payload:** `Query Parameter - lang in the URL. Valid lang = ['en','bn','hi']`

**2. Submit FAQ**
Adds new FAQ to the Database, and invalidates the Cache.

**URL** : ```/api/faqs```

**Method**: ```POST```

**Request Payload:** `{question, answer}`

## Acknowledgments
Thank you for checking out my project! For any inquiries or feedback, feel free to reach out to me at [shubhsaxena447@gmail.com](mailto:shubhsaxena447@gmail.com) or 7905256733.
