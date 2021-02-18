import EdicaoLayout from "../../../src/theme/Layout/edicaoLayout"
import { useRouter } from 'next/router'
import { getEdicao } from "../../../lib/api"
import Notas from '../../../src/components/edicao/Notas'

export async function  getServerSideProps(context) {
  const edicao = await getEdicao(context.params.slug)
  return {
    props: {
      edicao,
    },
  }
}

function Edicao({edicao}){
    return(
        <EdicaoLayout
            edicao={edicao}
            contentRight={<Notas content={edicao[0].acf.sinopse} />}
        />
    )
}

export default Edicao;