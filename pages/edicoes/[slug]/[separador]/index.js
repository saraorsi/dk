import EdicaoLayout from "../../../../src/theme/Layout/edicaoLayout";
import { useRouter } from 'next/router'
import Notas from '../../../../src/components/edicao/Notas'
import Programa from '../../../../src/components/edicao/Programa'
import Debates from '../../../../src/components/edicao/Debates'
import Leituras from '../../../../src/components/edicao/Leituras'
import QuemFez from '../../../../src/components/edicao/QuemFez'
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
                router.query.separador === 'programa' ? <Programa sessoes={edicao[0].acf.sessao_repetidor}  /> : 
                router.query.separador === 'debates' ? <Debates sessoes={edicao[0].acf.sessao_repetidor}  /> : 
                router.query.separador === 'leituras' ? <Leituras leituras={edicao[0].acf.leituras}  /> : 
                router.query.separador === 'quem-fez' ? <QuemFez quemFez={edicao[0].acf.quem_fez}  /> : 
                null
                
            } 
        />

    )
    
}

export default Separador;

