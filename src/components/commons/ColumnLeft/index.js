import { Column } from './style/ColumnLeft'

export default function ColumnLeft({titleLeft, contentLeft}){
    return(
        <Column>
            <div>{titleLeft}</div>
            <div>{contentLeft}</div>
        </Column>
    )
}