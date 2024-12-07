const fetchPage = (slug) => {
  return fetch(`https://inverbots.xyz/wp-json/wp/v2/get_pages?slug=${slug}`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default fetchPage