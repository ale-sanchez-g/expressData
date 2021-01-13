# expressData

This Repo provide a POST endpoint to connect to Slack slash commmand.

This is an Open Source prototype using the below Tech

- Slack App integrations
- Slack message builder -> https://app.slack.com/block-kit-builder/T033PJ09E
- Node express server -> Creating a API service with simple endpoints
- Heroku -> App deployment

In the true spirint of innovation and agile delivery, this is an experiment.

## Who it all works

![givemedata](./app/img/givemedata.jpg?raw=true)

POST endpoint that is used for givemedata in slack is https://express-data.herokuapp.com/

```
curl --location --request POST 'https://express-data.herokuapp.com/'
```

To test the text body 

```
curl --location --request POST 'localhost:8082' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'text=HANDSET'
```


## How to test

Install dependecies with 

```
npm install
```

Run server on port 8082

```
PORT=8082 npm start
```

Send POST request to localhost:8082