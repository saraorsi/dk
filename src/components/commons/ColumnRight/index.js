import { Column } from './style/ColumnRight'

export default function ColumnRight({ titleRight, contentRight }) {
    return (
        <Column>
            <div>{titleRight}</div>
            <div>{contentRight}</div>
        </Column>
    )
}