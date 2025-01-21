const fetchTitle = (slug) => {
  return fetch(`https://inverbots.xyz/wp-json/wp/v2/meta-data?slug=${slug}/`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default fetchTitle