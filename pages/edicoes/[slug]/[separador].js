import EdicaoLayout from "../../../src/theme/Layout/edicaoLayout"
import { getEdicao, getAllEdicoes, getRealizador } from "../../../lib/api"
import { useRouter } from 'next/router'
import Notas from '../../../src/components/edicao/Notas'
import Programa from '../../../src/components/edicao/Programa'
import Debates from '../../../src/components/edicao/Debates'
import Leituras from '../../../src/components/edicao/Leituras'
import QuemFez from '../../../src/components/edicao/QuemFez'
import Realizador from "../../../src/components/edicao/Realizador"

export default function Separador({ edicao, realizador }) {
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
                    <Realizador realizador={realizador[0]} />
        }
      />
    </div>
  )
}



export async function getStaticPaths() {


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
  // const separadores = [
  //   {
  //     separador: 'programa'
  //   },
  //   {
  //     separador: 'notas-de-intencao'
  //   },
  //   {
  //     separador: 'debates'
  //   },
  //   {
  //     separador: 'leituras'
  //   },
  //   {
  //     separador: 'quem-fez'
  //   },
  // ]

  // const edicoes = await getAllEdicoes();
  // console.log(edicoes)

  //const paths = edicoes.map(post => ( (separadores.map( (item, i) => {
  //     ({
  //       params: {
  //         slug: 'floresta-de-signos',
  //         separador: item.separador
  //       }
  //     })
  //   }))
  // ))


  // const paths = separadores.map(separador => {({edicoes.map( edicao => (
  //     {
  //       params: {
  //         slug: 'floresta-de-signos',
  //         separador: 'separador'
  //     }
  //   }
  // ))})){}

  //const paths = edicoes.map(post => ({ params: { slug: post.slug, separador: post.separador} }))

  // const paths = edicoes.map(post => {
  //   return (

  //     separadores.map((sep, i) => {
  //       return (
  //           {params: { slug: 's', separador: 'se'}
  //         }
    
  //       )
  //     })

  //   )
  // })

  // const paths = edicoes.map((post) => {(
  //   separadores.map((sep) => {(
  //     console.log(sep.separador)
  //   )}
  // ))})
  // console.log(paths)
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { separador } = params;
  const edicao = await getEdicao(slug)
  const realizador = await getRealizador(separador)
  return {
    props: {
      edicao,
      realizador
    },
    revalidate: 10,
  }
}


