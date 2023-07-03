'use client'
const subMailChimp = async (data) => {
  const email = data.YourEmail
  const name = data.YourName

  try {
    const response = await fetch(
      `https://us19.api.mailchimp.com/3.0/lists/2b71f672a6`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'apikey efa87dd79a8a0d5cbc1bccd97b1b0a84-us19',
        },
        body: JSON.stringify({
          email_address: email,
          name: name,
          status: 'subscribed',
        }),
      }
    );
    const data = await response.json();
    console.log(data); 
  } catch (error) {
    console.error(error);
  }
};

export default subMailChimp;
