'use client'

export default function sendData (data) {
  console.log(data)
  const jsonData = JSON.stringify(data);

  fetch('https://script.google.com/macros/s/AKfycbxcUJeqhHZwEmyX2ZdSsZzG3of-PCJkUIz7Bm2iDVdrIEEpV7KET8yzvHEFEF9AymJB1A/exec', {
    method: 'POST',
    body: jsonData,
    mode: 'CORS',
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
}
