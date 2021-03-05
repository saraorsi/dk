import ColumnCenter from "../../components/commons/ColumnCenter";
import ColumnLeft from "../../components/commons/ColumnLeft";
import ColumnRight from "../../components/commons/ColumnRight";
import Menu from "../../components/commons/Menu";
import Sidebar from "../../components/commons/Sidebar";
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from "next/link";
import { useState } from "react/cjs/react.production.min";

export const MenuWapprer = styled.div`
    text-transform: uppercase;
`


export const Column = styled.div`
`

Column.Title = styled.div`
  display: inline-block;
  font-size: .7rem;
  vertical-align: top;
  margin-top: -.2rem;
  margin-left: .35rem;
`


function Layout({ titleLeft, contentLeft, titleRight, contentRight }) {

    const menus = [
        {
          link: `/indice/cineasta-e-artistas`,
          titulo: 'Cineastas e Artistas',
          slug: 'cineasta-e-artistas'
        },
        {
            link: `/indice/filmes`,
          titulo: 'Filmes',
          slug: 'filmes'
        },
        {
            link: `/indice/debates`,
            titulo: 'Debates',
            slug: 'debates'
        },
        {
            link: `/indice/leituras`,
            titulo: 'Leituras',
            slug: 'leituras'
        },
      ]

      const router = useRouter()    


    return (
        <div>
            <Menu />
            <ColumnLeft
                titleLeft={'Indice'}
                contentLeft={         
                <MenuWapprer>
                    {menus.map((menu) => (
                      <li key={menu.link}>
                        <Link href={menu.link}>
                          <a>{menu.titulo}</a>
                        </Link>
                      </li>
                    ))}
                  </MenuWapprer>}
            />
            <ColumnCenter />
            <ColumnRight
                titleRight={titleRight}
                contentRight={contentRight}
            />
            <Sidebar />
        </div>
    )
}

export default Layout


