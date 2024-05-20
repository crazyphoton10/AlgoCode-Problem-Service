# AlgoCode problem setting service

## How routing is working in the project

- /api/v1/problems/ping
  - because the route starts with /api
    /api -> /v1 -> /problems -> /ping
    apiRouter -> v1Router -> problemRouter -> problemController -> service layer

<!-- The special thing about final middleware here problemController is that from here we'll forward request to service layer. That's why it's called controller because remaining middleware can have different objectives (validation, routing etc.). We're referring final middleware as Controller because Express is unopinionated framework, there is no concept of controller altogether but we've to specify architecture to our project to handle coding practices properly. -->
