import Link from 'next/link'
function ClientPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <div>
      <h1>All clients</h1>

      <ul>
      {clients.map((client) => (
        <li key={client.id}>
          <Link
            href={{
              pathname: "/clients/[id]",
              query: { id: client.id },
            }}
          >
            {client.name}
          </Link>
        </li>
      ))}
    </ul>
      
      <p>back to <Link href={"/"}><a>home</a></Link></p>
    </div>
  )
}
export default ClientPage
