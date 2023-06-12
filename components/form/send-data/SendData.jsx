'use client'

export default function sendData (data) {
  console.log(JSON.stringify(data))

  fetch(process.env.NEXT_PUBLIC_SHEET_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(response => {
    response.text()
    console.log(response, data)
  })
    .catch(error => {
      console.log(error)
    })
}

