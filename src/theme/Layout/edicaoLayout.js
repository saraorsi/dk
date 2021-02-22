import styled from 'styled-components'
import ColumnCenter from "../../components/commons/ColumnCenter";
import ColumnLeft from "../../components/commons/ColumnLeft";
import ColumnRight from "../../components/commons/ColumnRight";
import Menu from "../../components/commons/Menu";
import Sidebar from "../../components/commons/Sidebar";
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from "next/link";
import Participantes from '../../components/edicao/Participantes';



export const MenuWapprer = styled.div`
    text-transform: uppercase;
`




function EdicaoLayout({ edicao, titleLeft, titleRight, contentRight }) {

  const router = useRouter()
  const [selected, setSelected] = useState(0)
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const menus = [
    {
      link: `/edicoes/${router.query.slug}/notas-de-intencao`,
      titulo: 'Notas de intenção',
    },
    {
      link: `/edicoes/${router.query.slug}/programa`,
      titulo: 'Programa',
    },
    {
      link: `/edicoes/${router.query.slug}/debates`,
      titulo: 'Debates'
    },
    {
      link: `/edicoes/${router.query.slug}/leituras`,
      titulo: 'Leituras'
    },
    {
      link: `/edicoes/${router.query.slug}/quem-fez`,
      titulo: 'Quem Fez'
    },
  ]

  return (
    <div>
      <Menu />
      <ColumnLeft
        titleLeft={edicao[0].acf.ano}
        contentLeft={
          <>
          <MenuWapprer>
            {menus.map((menu, i) => (
              <li key={menu.link} className={`menu__list__item ${selected == i ? 'active' : null}`} onClick={() => toggle(i)}>
                <Link href={menu.link}>
                  <a>{menu.titulo}</a>
                </Link>
              </li>
            ))}
          </MenuWapprer>
          <Participantes participantes={edicao[0].acf.participantes} />
          </>
        }
      >
      </ColumnLeft>
      <ColumnCenter />
      <ColumnRight
         titleRight={edicao[0].title.rendered}
        contentRight={contentRight}
      />
      <Sidebar />
    </div>
  )
}


export default EdicaoLayout