

import {getAllRealizadores, getEdicao} from '../../../lib/api'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ColumnCenter from '../../../src/components/commons/ColumnCenter'
import ColumnLeft from '../../../src/components/commons/ColumnLeft'
import ColumnRight from '../../../src/components/commons/ColumnRight'
import Layout from '../../../src/theme/Layout'

function Edicoes({edicao, realizadores}){

    const router = useRouter()
    const menus = [
        {
          link: `/edicoes/${router.query.slug}/?separador=notas-de-intencao`,
          titulo: 'Notas de intenção'
        },
        {
          link: `/edicoes/${router.query.slug}/?separador=programa`,
          titulo: 'Programa'
        },
        {
          link: `/edicoes/${router.query.slug}/?separador=debates`,
          titulo: 'Debates'
        },
        {
          link: `/edicoes/${router.query.slug}/?separador=leituras`,
          titulo: 'Leituras'
        },
        {
          link: `/edicoes/${router.query.slug}/?separador=quem-fez`,
          titulo: 'Quem Fez'
        },
      ]

    return(
        <Layout
        titleLeft={<><span>{edicao[0].acf.ano}</span><span>{edicao[0].acf.datas}</span></>}
        contentLeft={menus.map((menu, i) => (
          <li key={i}>
            <Link href={menu.link}>
              <a>{menu.titulo}</a>
            </Link>
          </li>
        ))}

        titleRight={<span>{edicao[0].title.rendered}</span>}
        contentRight={<div dangerouslySetInnerHTML={{ __html: edicao[0].acf.sinopse}}></div>}
        />
 
    )

}


export async function  getServerSideProps(context) {
    const edicao = await getEdicao(context.params.slug)
    const realizadores = await getAllRealizadores()
    return {
      props: {
        edicao,
        realizadores
      },
    }
  }
  

export default Edicoes;