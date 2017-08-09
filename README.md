# phase-3-challenge-b

# __ part-1 __

__ While in the part-1 directory: __

Install dependencies with ```npm install```

Start the server with ```npm start```

### __ _GET Route:_ __

GET a number that corresponds with a day of the week, where Monday is 1, and
Sunday is 7 at this route: ```localhost:3000/api/days/:day```

__ Example: __

```localhost:3000/api/days/wednesday``` responds with ```3```

### __ _POST Route:_ __

POST a JSON object of arrays at ```localhost:3000/api/array/concat```
with Postman or curl and get a concatenation of those two arrays back.

__ Example: __
```curl -i -d '{"array1": [3, 4], "array2": [5, 6]}' -H "Content-Type: application/json" localhost:3000/api/array/concat```

the response is: ```{"result":[3,4,5,6]```

If either array1 or array2 are not an array, the response is:

```{"error":"Input data should be type of array."}```

# __ part-2 __

__ Command Line Grocery Store __

__ While in the part-2 directory: __

Install dependencies with ```npm install```

Create the database with ```npm start```

In the ```load-data.sql``` file, add the full path to ```groceries.csv```
to the COPY statement and in the command line use ```npm run-script run``` to
load the seed data into the database.

# __ part-3 __
