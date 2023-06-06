'use client'

export default function sendData (data) {
  console.log(JSON.stringify(data))

  fetch('https://script.google.com/macros/s/AKfycbz7dDfYsBkijbv8DbuSLzGT7hh1ktdz2iFhNi1EC7zgYmtWWVZ52RsgRYuCoueoYgmsnQ/exec', {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }).then(response => {
    response.text()
    console.log(response)
  })
    .catch(error => {
      console.log(error)
    })
}
