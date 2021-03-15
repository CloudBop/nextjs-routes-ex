import Link from 'next/link'
function BlogPage() {
  return (
    <div>
      <h1>The blog page.</h1>
      <p>back to <Link href={"/"}><a>home</a></Link></p>

      <ul>
        <li><Link href={"/blog/any-post-uri-here"}><a>any-post-uri-here</a></Link></li>
      </ul>
    </div>
  )
}
export default BlogPage
