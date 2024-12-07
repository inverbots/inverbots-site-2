const fetchSinglePost = () => {
  return fetch(`https://inverbots.xyz/wp-json/wp/v2/posts?per_page=1999&_fields=slug,modified`, { cache: 'no-store' })
    .then(rest => rest.json())
}

const fetchSinglePages = () => {
  return fetch(`https://inverbots.xyz/wp-json/wp/v2/pages?per_page=99&_fields=slug,modified`, { cache: 'no-store' })
    .then(rest => rest.json())
}

const formatingDate = (infoDate) => {

  const dateParseInt = new Date(infoDate)
  const year = dateParseInt.getFullYear();
  const month = dateParseInt.getMonth() + 1; 
  const day = dateParseInt.getDate();
  const dateFormated = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

  return (dateFormated)
  
}

const getMapElements = (list, baseUrl) => {
  const listObjects = list.map(singlePost => {
    const {modified} = singlePost;  
    const addDate = formatingDate(modified)
    return { 
      url: `${baseUrl + singlePost.slug}`,
      lastModified: addDate
    }
  })

  return listObjects
}



export default async function sitemap() {
  const allPost = await fetchSinglePost()
  const allPages = await fetchSinglePages()

  const baseUrl = "http://inverbots.com/";
  const allPostUrl = getMapElements(allPost, baseUrl)
  const allPagesUrl = getMapElements(allPages, baseUrl)

  const addDate = formatingDate(new Date())

  return [
    { url: baseUrl,
      lastModified: addDate
    },

    ...allPagesUrl,
    ...allPostUrl
  ]
}