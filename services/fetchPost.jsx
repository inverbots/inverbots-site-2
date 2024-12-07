const fetchPost = (category) => {
  return fetch(`https://inverbots.xyz/wp-json/wp/v2/publicaciones?category=${category}`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default fetchPost