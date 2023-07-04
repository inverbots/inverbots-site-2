const fetchRelatedPost = (id) => {
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/related-post?id=${id}`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default fetchRelatedPost