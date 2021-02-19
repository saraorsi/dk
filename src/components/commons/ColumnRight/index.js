import { Column } from './style/ColumnRight'

export default function ColumnRight({ titleRight, contentRight }) {
    return (
        <Column>
            <Column.Title>
                {titleRight}
                <Column.Circle />
            </Column.Title>
            <Column.Content>{contentRight}</Column.Content>
        </Column>
    )
}