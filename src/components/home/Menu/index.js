import Link from 'next/link'
import { MenuItem } from './styles'


export default function Menu({ post }) {
    return (
        <MenuItem key={post.id}>
        <Link href={`/edicoes/${post.slug}`}>
          <a>{post.acf ? post.acf.ano : ''} <span>{post.title.rendered}</span></a>
        </Link>
      </MenuItem>

    )

}