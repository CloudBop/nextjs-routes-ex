import { useRouter } from 'next/router'

function BlogPostsPage(){
  const router = useRouter();
  console.log(`router`, router)
  const { query, pathname} = router
  console.log("🚀 ~ file: [project-id].js ~ line 7 ~ SingleClientProject ~ query, pathname", query, pathname)
  return (
    <h1>Blog Posts page</h1>
  )
}


export default BlogPostsPage;