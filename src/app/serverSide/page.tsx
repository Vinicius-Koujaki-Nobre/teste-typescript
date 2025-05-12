import { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"

type IData = {
    results: {
        name: string
        status: string
        id: string
    }[]
}

export const metadata: Metadata = {
    title: "Character list from RM",
    description: "Aplicação teste com consumo de api"
}

const ServerSide = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IData = await res.json()
    
    return(
        <>
            <div>Server side page try</div>
            {data?.results.map((item, index) => (
                <div className="pb-10" key={index}>
                    <h1>{item.name}</h1>
                    <h2>{item.id}</h2>
                    <p>{item.status}</p>
                    <Link className="bg-black text-white" href={`/personagem/${item.id}`}>Abrir detalhes</Link>
                </div>
            ))}
        </>
    )
}

export default ServerSide