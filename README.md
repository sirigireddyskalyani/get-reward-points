# About Me
Myself Kalyani, I am a product-focused javascript fullstack developer, for more details check my profile @ https://kalyani.vercel.app/
# get-reward-points
Is an REST API service to handle one of retailer use case -
### Example - 
A retailer offers a rewards program to its customers awarding points based on each recorded purchase.
- [x] Every dollar spent over $50 on the transaction, the customer receives one pont
- [x] In addition, for every dollar spent over $100, the customer receives another point
- [x] Ex: for a $120 purchase, the customer receives (120-50) x 1 + (120 - 100) x 1 = 90 points
# Technologies 
* Platform - Node.js [v14.17.2]
* API Service - Express.js
* Unit Tests  - mocha, chai, supertest
* Code coverage - nyc
## Project SETUP ##
The project setup made by using Express Genarator Utility -- https://expressjs.com/en/starter/generator.html
```
1) npx express-generator get-reward-points
2) cd get-reward-points
3) npm install
```
#### `Instructions for running the project on a local machine:`
```
1) Download postman collection from - https://www.getpostman.com/collections/5b61d53e106046e48bda
2) $ git clone git@github.com:sirigireddyskalyani/get-reward-points.git
3) cd get-reward-points
4) $ npm run dev
```
- - - -

### npm run dev ###
![picture alt](https://raw.githubusercontent.com/sirigireddyskalyani/get-reward-points/main/showcase/npm_dev.png)

Method | API | Request | Response
| :--- | :--- | ---: | :---:
GET | http://localhost:3000/rewards/90  | 90 | ``` { "data": {"expense": "90", "points": 40 }, "processTime": "0 sec" } ```

![picture alt](https://raw.githubusercontent.com/sirigireddyskalyani/get-reward-points/main/showcase/get_rewards_expense.png)

Method | API | Request | Response
| :--- | :--- | ---: | :---:
GET | http://localhost:3000/rewards/mock/2  | 2 | ``` {"data":[{"username":"Abbigail_Rowe21","date":"2022-05-09T01:03:02.894Z","expenses":983.55},{"username":"Carlee.Casper","date":"2022-05-27T14:28:08.684Z","expenses":566.41}],"processTime":"0.002 sec"} ```

![picture alt](https://raw.githubusercontent.com/sirigireddyskalyani/get-reward-points/main/showcase/get_rewards_mock_days.png)

Method | API | Request | Response
| :--- | :--- | ---: | :---:
POST | http://localhost:3000/rewards/total  | ``` { "records": [ { "username": "Payton.Runte", "date": "2022-04-22T14:54:34.127Z", "expenses": 120 }, { "username": "Therese36", "date": "2022-04-16T05:42:54.373Z", "expenses": 500 } ] } ``` | ``` {"processTime":"0 sec","data":{"Payton.Runte":{"expenses":120,"points":90},"Therese36":{"expenses":500,"points":850}}} ```

![picture alt](https://raw.githubusercontent.com/sirigireddyskalyani/get-reward-points/main/showcase/post_rewards_total.png)

## npm run test ##
![picture alt](https://raw.githubusercontent.com/sirigireddyskalyani/get-reward-points/main/showcase/npm_test.png)

## npm run coverage ##
![picture alt](https://raw.githubusercontent.com/sirigireddyskalyani/get-reward-points/main/showcase/npm_coverage.png)
