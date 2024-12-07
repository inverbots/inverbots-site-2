const fetchYoast = (slug) => {
  return fetch(`https://inverbots.xyz/wp-json/yoast/v1/get_head?url=https://inverbots.xyz/${slug}/`, { cache: 'no-store' })
    .then(rest => rest.json())
}

export default fetchYoast