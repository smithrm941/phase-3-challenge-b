const express = require('express')
const app = express();

const daysOfWeek = {monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}

app.get('/api/days/:day', (request, response) => {
  const { day } = request.params
  console.log(daysOfWeek[day])
})

app.listen(3000, () => {
  console.log('App is running on localhost:3000')
})
