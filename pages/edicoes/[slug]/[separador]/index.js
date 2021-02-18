import EdicaoLayout from "../../../../src/theme/Layout/edicaoLayout";
import { useRouter } from 'next/router'
import Notas from '../../../../src/components/edicao/Notas'
import Programa from '../../../../src/components/edicao/Programa'
import { getEdicao } from "../../../../lib/api"


export async function  getServerSideProps(context) {


    const edicao = await getEdicao(context.query.slug)
    return {
      props: {
        edicao,
      },
    }
  }

function Separador({edicao}){
    const router = useRouter()
    return(
        <EdicaoLayout
            edicao={edicao}
            contentRight={
                router.query.separador === 'notas-de-intencao' ? <Notas content={edicao[0].acf.sinopse} /> : 
                router.query.separador === 'programa' ? <Programa edicao={edicao[0].acf.sessao_repetidor}  /> : 
                null
                
            } 
        />

    )
    
}

export default Separador;

