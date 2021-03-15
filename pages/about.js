import Link from 'next/link'
function AboutPage() {
  return (
    <div>
      <h1>The about page.</h1>

      <p>back to <Link href={"/"}><a>home</a></Link></p>
    </div>
  )
}

export default AboutPage