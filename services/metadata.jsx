const getMetadata = (JSONYoast) => {

  const metadata = {
    title: JSONYoast[0]?.title + " |  Bienvenido a Inverbots ",
    description: JSONYoast[0]?.description,
    openGraph: {
      title: JSONYoast[0]?.title,
      description: JSONYoast[0]?.description,
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



