import styled from 'styled-components'
import Link from 'next/link'

export const MenuItem = styled.div`
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary.main.color};
`

MenuItem.title = styled.div`
    display: inline-block;
    font-size: .7rem;
    text-transform: uppercase;
    margin-left: .35rem;
`

export default function Menu({ post }) {
    return (
        <MenuItem key={post.id}>
        <Link href={`/edicoes/${post.slug}`}>
          <a>{post.acf ? post.acf.ano : ''} <MenuItem.title>{post.title.rendered}</MenuItem.title></a>
        </Link>
      </MenuItem>

    )

}