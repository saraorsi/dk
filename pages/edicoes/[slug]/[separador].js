import EdicaoLayout from "../../../src/theme/Layout/edicaoLayout"
import { getEdicao, getAllEdicoes } from "../../../lib/api"
import { useRouter } from 'next/router'
import Notas from '../../../src/components/edicao/Notas'
import Programa from '../../../src/components/edicao/Programa'
import Debates from '../../../src/components/edicao/Debates'
import Leituras from '../../../src/components/edicao/Leituras'
import QuemFez from '../../../src/components/edicao/QuemFez'

export default function Separador({ edicao }) {
  const router = useRouter()
  return (
    <div>
      <EdicaoLayout
        edicao={edicao}
        contentRight={
          router.query.separador === 'notas-de-intencao' ? <Notas content={edicao[0].acf.sinopse} /> :
          router.query.separador === 'programa' ? <Programa sessoes={edicao[0].acf.sessao_repetidor} /> :
          router.query.separador === 'debates' ? <Debates sessoes={edicao[0].acf.sessao_repetidor} /> :
          router.query.separador === 'leituras' ? <Leituras leituras={edicao[0].acf.leituras} /> :
          router.query.separador === 'quem-fez' ? <QuemFez quemFez={edicao[0].acf.quem_fez} /> :
          null
        }
      />
    </div>
  )
}



export async function getStaticPaths() {
  //const edicoes = await getAllEdicoes()
  const edicoes = [
    {    
      slug: 'floresta-de-signos',
      separador: 'programa'
    },
    {    
      slug: 'floresta-de-signos',
      separador: 'notas-de-intencao'
    },
    {    
      slug: 'floresta-de-signos',
      separador: 'debates'
    },
    {    
      slug: 'floresta-de-signos',
      separador: 'leituras'
    },
    {    
      slug: 'floresta-de-signos',
      separador: 'quem-fez'
    }
  ]
  const paths = edicoes.map(post => ({ params: { slug: post.slug, separador: post.separador} }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const edicao = await getEdicao('floresta-de-signos')
  return {
    props: {
      edicao,
    },
    revalidate: 10,
  }
}

