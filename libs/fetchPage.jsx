const fetchPage = (slug) => {
  return fetch(`https://administrador.inverbots.com/wp-json/wp/v2/get_pages?slug=${slug}`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default fetchPage