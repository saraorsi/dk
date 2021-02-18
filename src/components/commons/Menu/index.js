import { MenuWrapper } from './style/Menu'
import Link from 'next/link'

export default function Menu(){
    return(
        <MenuWrapper>
           <Link href="/">
               <a>DK</a>
           </Link>
        </MenuWrapper>
    )
}