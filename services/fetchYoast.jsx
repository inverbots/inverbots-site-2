const fetchYoast = (slug) => {
  return fetch(`https://administrador.inverbots.com/wp-json/yoast/v1/get_head?url=https://administrador.inverbots.com/${slug}/`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default fetchYoast