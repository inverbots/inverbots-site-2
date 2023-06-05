'use client'

export default function sendData (data) {
  console.log(data)

  fetch('https://script.google.com/macros/s/AKfycbyEkyGJ2Qo_n1y1vhcP7WTl6vul9uLxsgroeC7dyx3nKXjyS_kXohacRsGePZAg_snfiA/exec', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    }
  }).then(response => {
    response.text()
  })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
}
