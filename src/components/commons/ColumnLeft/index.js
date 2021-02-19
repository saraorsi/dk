import { Column } from './style/ColumnLeft'

export default function ColumnLeft({titleLeft, contentLeft}){
    return(
        <Column>
            <Column.Title>
                <Column.Circle />
                {titleLeft}
            </Column.Title>
            <Column.Content>{contentLeft}</Column.Content>
        </Column>
    )
}