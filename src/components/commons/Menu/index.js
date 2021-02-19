import { MenuWrapper } from './style/Menu'
import Link from 'next/link'

export default function Menu(){
    return(
        <MenuWrapper>
            <MenuWrapper.Logo>
                <Link href="/">
                    <a>Doc's Kingdom</a>
                </Link>
            </MenuWrapper.Logo>
        </MenuWrapper>
    )
}