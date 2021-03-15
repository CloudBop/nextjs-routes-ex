import { useRouter} from 'next/router';

function SinglePortfolioPage(props){
  const router = useRouter() ;
  
  const { query, pathname} = router
  // console.log("🚀 ~ file: [project-id].js ~ line 7 ~ SinglePortfolioPage ~ query, pathname", query, pathname)
  
  return (<div>
    <h1>
      single portfolio page
    </h1>


  </div>)
}

export default SinglePortfolioPage