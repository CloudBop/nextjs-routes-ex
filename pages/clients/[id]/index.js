import Link from 'next/link'
import {useRouter} from 'next/router'
function ClientProjectPage() {
  const router = useRouter()

  function loadProjectHandler() {

    // load data...
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' },
    });

    // router.replace -> stop client from going back
  }

  return (
    <div>
      <h1>The specific client projects page.</h1>

      <p>back to <Link href={"/clients"}><a>Clients</a></Link></p>

      <button onClick={loadProjectHandler}>Load Project</button>
    </div>
  )
}
export default ClientProjectPage
