import { useRouter} from 'next/router';

function SingleClientProject(props){
  const router = useRouter() ;
  
  console.log(`router`, router)
  const { query, pathname} = router
  console.log("🚀 ~ file: [project-id].js ~ line 7 ~ SingleClientProject ~ query, pathname", query, pathname)
  
  return (<div>
    <h1>
      single client project
    </h1>


  </div>)
}

export default SingleClientProject