import Link from 'next/link'
function ClientPage() {
  return (
    <div>
      <h1>All clients</h1>
      <p>back to <Link href={"/"}><a>home</a></Link></p>
    </div>
  )
}
export default ClientPage
