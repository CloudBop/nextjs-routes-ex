import Link from 'next/link'
function PortfolioPage() {
  return (
    <div>
      <h1>The portfolio page.</h1>
      <p>back to <Link href={"/"}><a>home</a></Link></p>
    </div>
  )
}
export default PortfolioPage
