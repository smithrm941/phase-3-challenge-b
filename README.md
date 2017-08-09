# phase-3-challenge-b

# __part-1__
__GET and POST routes__

__While in the part-1 directory:__

Install dependencies with ```npm install```

Start the server with ```npm start```

### ___GET Route:___

GET a number that corresponds with a day of the week, where Monday is 1, and
Sunday is 7 at this route: ```localhost:3000/api/days/:day```

__Example:__

```localhost:3000/api/days/wednesday``` responds with ```3```

### ___POST Route:___

POST a JSON object of arrays at ```localhost:3000/api/array/concat```
with Postman or curl and get a concatenation of those two arrays back.

__Example:__
```curl -i -d '{"array1": [3, 4], "array2": [5, 6]}' -H "Content-Type: application/json" localhost:3000/api/array/concat```

the response is: ```{"result":[3,4,5,6]```

If either array1 or array2 are not an array, the response is:

```{"error":"Input data should be type of array."}```



# __part-2__

__Command Line Grocery Store__

__While in the part-2 directory:__

Install dependencies with ```npm install```

Create the database with ```npm start```

In the ```load-data.sql``` file, add the full path to ```groceries.csv```
to the COPY statement and in the command line use ```npm run-script run``` to
load the seed data into the database.

### ___Make queries through the command line:___

__List all products from a section__

```node ./store product-list <section-name>```

Example:

```node ./store product-list bulk``` will display:

```
name                      section
---------------------------------
Flour              bulk
Pasta              bulk
Rice              bulk
```

__List all orders for a given shopper id, returns all of that shopper's order ids, and the total cost of each order__

```node ./store shopper-orders <shopper-id>```

Example:

```node ./store shopper-orders 1``` will display:

```
order id    total cost
----------------------
1           15.50
3           16.61
```

__List all the shoppers that have at least 1 order, and also display the number of orders for them.__

```node ./store real-shoppers``` will display:

```
shopper            num. of orders
---------------------------------
Tom Solomon         1
Harry Solomon         2
Rhonda Smith         2
```

```npm test``` runs tests on test versions of the functions these commands use,
but they need some refactoring.


# __part-3__

__Web Interface for Grocery Store__

This directory contains an html file and related CSS and JS files for a
front-end grocery store page that can be opened in the browser. 
