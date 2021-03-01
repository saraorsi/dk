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



// export async function getStaticPaths() {

//   const edicoes = [
//     {    
//       slug: 'floresta-de-signos',
//       separador: 'programa'
//     },
//     {    
//       slug: 'floresta-de-signos',
//       separador: 'notas-de-intencao'
//     },
//     {    
//       slug: 'floresta-de-signos',
//       separador: 'debates'
//     },
//     {    
//       slug: 'floresta-de-signos',
//       separador: 'leituras'
//     },
//     {    
//       slug: 'floresta-de-signos',
//       separador: 'quem-fez'
//     },
//     {    
//       slug: 'todas-as-fronteiras',
//       separador: 'programa'
//     },
//     {    
//       slug: 'todas-as-fronteiras',
//       separador: 'notas-de-intencao'
//     },
//     {    
//       slug: 'todas-as-fronteiras',
//       separador: 'debates'
//     },
//     {    
//       slug: 'todas-as-fronteiras',
//       separador: 'leituras'
//     },
//     {    
//       slug: 'todas-as-fronteiras',
//       separador: 'quem-fez'
//     }
//   ]
//   const paths = edicoes.map(post => ({ params: { slug: post.slug, separador: post.separador} }))
//   return {
//     paths,
//     fallback: false
//   }
// }

export async function getStaticPaths() {
  const edicoes = await getAllEdicoes();
  const separadores = [
    {    
      separador: 'programa'
    },
    {    
      separador: 'notas-de-intencao'
    },
    {    
      separador: 'debates'
    },
    {    
      separador: 'leituras'
    },
    {    
      separador: 'quem-fez'
    }
  ]
  const paths = edicoes.map(post => ({ params: { slug: post.slug, separador: 'programa'} }))
  return {
    paths,
    fallback:false
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


