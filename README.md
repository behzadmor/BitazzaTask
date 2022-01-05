# How to install
### 1. install node.js (version 16+) and nodemon
### 2. go to Backend folder
### 3. npm intsall
### 4. set PORT in config/config.env - the default PORT is 1337
### 5. npm start
---

## All topPerformers(this task) routes start with
> /api/topPerformers

## Routes are as follow

|Route|Method|Body Parameters|Purpose|
|-----|------|---------------|-------|
|/topGainers|post|fromDate,toDate|Returns top five Gainers in the time period specified|
|/topLosers|post|fromDate,toDate|Returns top five Losers in the time period specified|
|/topFiveGainersAndLosers|post|fromDate,toDate|Returns both top five Gainers and top five Losers in the time period specified|
|/login|get| |Redirects to front-end Login Page|
---
