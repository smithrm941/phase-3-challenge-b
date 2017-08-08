const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

app.get('/api/days/:day', (request, response) => {
  const daysOfWeek = {monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}

  const { day } = request.params
  if(daysOfWeek[day] > 0 && daysOfWeek[day] <= 7) {
    response.status(200).send(daysOfWeek[day].toString())
  } else {
    response.status(400).send(day + ' is not a valid day!')
  }
})

app.post('/api/array/concat', (request, response) => {
  //tested in curl with
  //curl -i -d '{"array1": [3, 4], "array2": [5, 6]}' localhost:3000/api/array/concat
  //and
  //curl -i -d '{"array1": "not an array", "array2": [5, 6]}' localhost:3000/api/array/concat
    if(Array.isArray(request.body.array1) && Array.isArray(request.body.array2)){
      const result = request.body.array1.concat(request.body.array2)
      console.log(result)
      response.json({'result': result})
    } else if (!Array.isArray(request.body.array1) || Array.isArray(request.body.array2)) {
      response.status(400).json({"error": 'Input data should be type of array.'})
    }
})

app.listen(3000, () => {
  console.log('App is running on localhost:3000')
})
