import { Column } from './styles'

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