import fetchPage from "@/services/fetchPage";
import { redirect } from 'next/navigation';

export default async function PageSite({ slug }) {
  
  const dataPage = await fetchPage(slug)
  const redirection = dataPage[0].redirection_to

  return (
    !dataPage.length ? (
      <h2>Página no encntrada</h2>
    ) : (
      redirect(redirection)
    )
  )
}