const getMetadata = (JSONYoast) => {
  console.log(JSONYoast)
  const metadata = {
    title: JSONYoast.title,
    description: JSONYoast.description,
    openGraph: {
      title: JSONYoast.title,
      description: JSONYoast.description,
    },
  };

  if (!JSONYoast)
  return {
    title: "No found",
    Description: "The page is not found"
  }

  return metadata
}

export default getMetadata



