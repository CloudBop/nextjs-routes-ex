import Link from 'next/link'
function ClientProjectPage() {
  return (
    <div>
      <h1>The client projects page.</h1>
      <p>back to <Link href={"/"}><a>home</a></Link></p>
    </div>
  )
}
export default ClientProjectPage
