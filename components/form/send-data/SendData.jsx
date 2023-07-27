'use client'
import MailChimpForm from "../mail-chimp/mail-chimp"

export default function sendData(data) {
  console.log(data);

  fetch('https://script.google.com/macros/s/AKfycbz7dDfYsBkijbv8DbuSLzGT7hh1ktdz2iFhNi1EC7zgYmtWWVZ52RsgRYuCoueoYgmsnQ/exec', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(response => {
    response.text()
    const status = response.ok
    console.log(status, response) 
    
    return (
      <div class={style.displayNone} key={1}>
        <MailChimpForm
          key={2}
          name={data.fullName}
          email={data.email}
          autoSubmit={true}
        />
      </div>
    )

  })
    .catch(error => {
      console.log(error)
  })
  
}
