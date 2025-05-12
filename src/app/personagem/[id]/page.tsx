interface IPersonagem{
    params: {
        id: string
    }
}

interface IData{
    name: string
    status: string
    species: string
}

interface IdataStaticIndex {
    results:{
        id: number
    }[]
}

const Personagem =async ({params: {id}} : IPersonagem) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data: IData = await res.json()

    console.log(data)

    return(
        <div>
            <p>{data.name}</p>
            <p>{data.species}</p>
            <p>{data.status}</p>
        </div>
    )
}

export default Personagem

export async function generateStaticParams(){
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data: IdataStaticIndex = await res.json()

    return data.results.map((item) => ({
        id: item.id.toString()
    }))
}