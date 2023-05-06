
export default function Post ({ params }) {
  const { slug } = params
  return (
    <h1>Acá se deben ver los post{slug}</h1>
  )
}
