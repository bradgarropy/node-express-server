# Web Server & REST API Using Node & Express

*Learning about the world of JavaScript can be incredibly daunting.  
Learning [Node](https://nodejs.org/) is even worse.*

This is the second iteration of the [node-only-server](https://github.com/bradgarropy/node-only-server). With this version, I incorporated two additional modules: [express](https://expressjs.com/) and [body-parser](https://github.com/expressjs/body-parser). Still no database and no HTML templating.

## Features

This simple web application tracks weight measurements. It implements the following HTTP methods:

* GET
* POST
* PATCH
* DELETE

It also offers one page, the index, which shows the current weight entries.

## Usage

First, clone down the repository. Next, run the following command from inside the directory:

`npm start` or `node server`

In order to access the index page, navigate to `localhost:3000` in your browser.

## REST API

Use your favorite REST client, mine is [Postman](https://www.getpostman.com/), to send requests to the server.

### Retrieve Weight Entries
GET /api/weight

### Add Weight Entry
POST /api/weight  
Parameters: { "date": "2017-05-17", "weight": 180 }

### Update Weight Entry
PATCH /api/weight/:date  
Parameters: { "weight": 180 }

### Remove Weight Entry
DELETE /api/weight/:date

## Lessons Learned

I found that the main impact by including [Express](https://expressjs.com/) was a much more streamlined process for defining routes. [Express](https://expressjs.com/) makes parsing the request method, url, headers, and body so much easier. It's use of the [path-to-regexp](https://www.npmjs.com/package/path-to-regexp) package is genius for quickly bringing up a REST API.

However, my most awkward route oddly enough is the index page. This is because I'm using plain old template literals to populate an HTML page with dynamic data. [Express](https://expressjs.com/) does not provide HTML templating in its own framework, but rather relies on existing template engines to render views. So the next package I'm going to integrate is an HTML templating tool, like [pug](https://pugjs.org/), to help me out.

> I'm using [this article](https://strongloop.github.io/strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/) to help me pick a template engine.
