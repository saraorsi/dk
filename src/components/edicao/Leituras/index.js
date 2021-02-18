
export default function Leituras({ leituras }) {


    return (
        <div>
            {leituras.map((leitura, i) =>
                <div key={i}>
                    <div>{leitura.post_title}</div>
                </div>
            )}
        </div>
    )

}