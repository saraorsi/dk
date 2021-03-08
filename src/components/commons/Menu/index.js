import { MenuWrapper } from './style/Menu'
import Link from 'next/link'

export default function Menu(){
    return(
        <MenuWrapper>
            <MenuWrapper.Search><Link href="/indice"><a><img src="/img/lupa.svg" alt="procurar"/></a></Link></MenuWrapper.Search>
            <MenuWrapper.Logo>
                <Link href="/">
                    <a>Doc's Kingdom</a>
                </Link>
            </MenuWrapper.Logo>
        </MenuWrapper>
    )
}