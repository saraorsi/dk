
export default function QuemFez({quemFez}) {

    return(
        <>
        {quemFez && quemFez.map(({funcao, equipa}, i) =>{
            return(
                <div key={i}>
                    <div>{funcao}</div>
                    <div>{equipa}</div>
                </div>
            )
        })}
        </>
    )
    
}