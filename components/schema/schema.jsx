export default function Schema({dataSEO}) {

  const JSONYoast = dataSEO.json
  const schema = JSONYoast.schema
  const cleanSchema = JSON.stringify(schema).replace(/administrador./g, '')
 
  const jsonLd = cleanSchema

  return (
    <script
    type="application/ld+json"
       dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  )
}