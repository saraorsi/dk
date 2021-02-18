
export default function Notas({content}) {

    return(
        <div dangerouslySetInnerHTML={{ __html: content }} /> 
    )
    
}