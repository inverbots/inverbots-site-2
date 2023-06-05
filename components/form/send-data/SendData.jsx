export default function sendData (data) {
  console.log(data)

  fetch('https://script.google.com/macros/u/1/s/AKfycbwR0Wmj68xM8krCP8GwMNvrLt_K8WP_nbyga_ZEi2UjlLbibagZPo7UnMVRNUkCJQn_HQ/exec', {
    method: 'POST',
    body: JSON.stringify(data)
  }).then((rest) => rest.json()).then((newData) => {
    console.log(newData)
  }).catch((error) => console.log(error))
}
