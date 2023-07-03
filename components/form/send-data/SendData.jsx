'use client'

export default function sendData (data) {
  console.log(JSON.stringify(data))

  fetch('https://script.google.com/macros/s/AKfycbz7dDfYsBkijbv8DbuSLzGT7hh1ktdz2iFhNi1EC7zgYmtWWVZ52RsgRYuCoueoYgmsnQ/exec', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(response => {
    response.text()
    const status = response.ok
    status ? window.location.href = 'https://cursos.inverbots.com/registro/' : ''
    // console.log(status, response)
  })
    .catch(error => {
      console.log(error)
    })
}
