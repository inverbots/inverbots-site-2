const getMetadata = (JSONYoast) => {
  // ✅ VALIDAR PRIMERO, ANTES DE USAR LOS DATOS
  if (!JSONYoast || JSONYoast.length === 0) {
    return {
      title: "Inverbots - Trading y educación financiera",
      description: "Aprende sobre trading, inversiones y mercados financieros"
    }
  }

  const metadata = {
    title: JSONYoast[0]?.title + " | Bienvenido a Inverbots",
    description: JSONYoast[0]?.description,
    openGraph: {
      title: JSONYoast[0]?.title,
      description: JSONYoast[0]?.description,
    },
  };

  return metadata
}

export default getMetadata


