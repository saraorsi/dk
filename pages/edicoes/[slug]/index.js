import EdicaoLayout from "../../../src/theme/Layout/edicaoLayout"
import { useRouter } from 'next/router'
import { getEdicao, getAllEdicoes} from "../../../lib/api"

import Notas from '../../../src/components/edicao/Notas'


function Edicao({edicao}){
    return(
        <EdicaoLayout
            edicao={edicao}
            contentRight={<Notas content={edicao[0].acf.sinopse} />}
        />
    )
}



export async function getStaticPaths() {
  const edicoes = await getAllEdicoes()
  const paths = edicoes.map( post => ({ params: { slug: post.slug } }))
  return {
    paths,
    fallback: 'blocking'
  }
}  

export async function getStaticProps({params}) {
  const {slug} = params;
  const edicao = await getEdicao(slug )
  return {
    props: {
      edicao,
    },
    revalidate: 10,
  }
}

export default Edicao;