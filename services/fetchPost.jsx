const fetchPost = (category) => {
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/publicaciones?category=${category}`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default fetchPost