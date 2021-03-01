import styled from 'styled-components'
import ColumnCenter from "../../components/commons/ColumnCenter";
import ColumnLeft from "../../components/commons/ColumnLeft";
import ColumnRight from "../../components/commons/ColumnRight";
import Menu from "../../components/commons/Menu";
import Sidebar from "../../components/commons/Sidebar";
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from "next/link";
import Participantes, { ParticipantesWrapper } from '../../components/edicao/Participantes';



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




function EdicaoLayout({ edicao, titleLeft, titleRight, contentRight }) {

  

  const router = useRouter()

  const separador = router.query.separador;
  const [selected, setSelected] = useState(separador)
  function toggle(menu) {
    setSelected(menu)
  }

  const menus = [
    {
      link: `/edicoes/${router.query.slug}/notas-de-intencao`,
      titulo: 'Notas de intenção',
      slug: 'notas-de-intencao'
    },
    {
      link: `/edicoes/${router.query.slug}/programa`,
      titulo: 'Programa',
      slug: 'programa'
    },
    {
      link: `/edicoes/${router.query.slug}/debates`,
      titulo: 'Debates',
      slug: 'debates'
    },
    {
      link: `/edicoes/${router.query.slug}/leituras`,
      titulo: 'Leituras',
      slug: 'leituras'
    },
    {
      link: `/edicoes/${router.query.slug}/quem-fez`,
      titulo: 'Quem Fez',
      slug: 'quem-fez'
    },
  ]

  const participantes = edicao && edicao[0].acf.participantes;
  participantes ? participantes.sort((a, b) => (a.post_title > b.post_title ? 1 : -1)) : ''

  return (
    <div>
      <Menu />
      <ColumnLeft
        titleLeft={
          <div>
            <span>{edicao && edicao[0].acf.ano}</span>
            <Column.Title>{edicao && edicao[0].acf.datas}</Column.Title>
          </div>
        
        }
        
        contentLeft={
          <>
          <MenuWapprer>
            {menus.map((menu) => (
              <li key={menu.link} className={`${selected == menu.slug ? 'active' : null}`} onClick={() => toggle(menu.slug)}>
                <Link href={menu.link}>
                  <a>{menu.titulo}</a>
                </Link>
              </li>
            ))}
          </MenuWapprer>
          { participantes ? (
            
            <ParticipantesWrapper>
                    <ParticipantesWrapper.Title>
                        Com a presença de
                    </ParticipantesWrapper.Title>
                    {participantes.map((participantes) => (
                        <ParticipantesWrapper.Item key={participantes.ID} className={`${selected == participantes.post_name ? 'active' : null}`} onClick={() => toggle(participantes.post_name)}>
                            <Link href={`/edicoes/${router.query.slug}/${participantes.post_name}`}>{participantes.post_title}</Link>
                        </ParticipantesWrapper.Item>
                    ))}
            </ParticipantesWrapper>
          ) : ''}
          </>
        }
      >
      </ColumnLeft>
      <ColumnCenter />
      <ColumnRight
         titleRight={edicao && edicao[0].title.rendered}
        contentRight={contentRight}
      />
      <Sidebar />
    </div>
  )
}


export default EdicaoLayout