import EdicaoLayout from "../../../src/theme/Layout/edicaoLayout"
import { getEdicao, getAllEdicoes, getRealizador } from "../../../lib/api"
import { useRouter } from 'next/router'
import Notas from '../../../src/components/edicao/Notas'
import Programa from '../../../src/components/edicao/Programa'
import Debates from '../../../src/components/edicao/Debates'
import Leituras from '../../../src/components/edicao/Leituras'
import QuemFez from '../../../src/components/edicao/QuemFez'
import Realizador from "../../../src/components/edicao/Realizador"

export default function Separador({ edicao, realizador, edicoes }) {
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
                    realizador && <Realizador realizador={realizador[0]} edicoes={edicoes}/>
        }
      />
    </div>
  )
}

// export async function getStaticPaths() {
//   const edicoes = await getAllEdicoes();
//   const separadores = [
//     {
//       separador: 'programa'
//     },
//     {
//       separador: 'notas-de-intencao'
//     },
//     {
//       separador: 'debates'
//     },
//     {
//       separador: 'leituras'
//     },
//     {
//       separador: 'quem-fez'
//     },
//   ]
//   const paths = [];
//   edicoes.forEach(function (edicao) {
//     const participantes = edicao.acf.participantes;
//     participantes && participantes.forEach(function (participante) {
//       paths.push({ params: { 'slug': edicao.slug, 'separador': participante.post_name } })
//     });
//     separadores.forEach(function (separador) {
//       paths.push({ params: { 'slug': edicao.slug, 'separador': separador.separador } })
//     });
//   });
//   return {
//     paths,
//     fallback: true
//   }
// }


// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const { separador } = params;
//   const edicoes = await getAllEdicoes();
//   const edicao = await getEdicao(slug);
//   const realizador = await getRealizador(separador);
//   return {
//     props: {
//       edicao,
//       realizador,
//       edicoes
//     },
//     revalidate: 10,
//   }
// }


export async function  getServerSideProps({ params }) {
  const { slug } = params;
  const { separador } = params;
  const edicoes = await getAllEdicoes();
  const edicao = await getEdicao(slug);
  const realizador = await getRealizador(separador);
  return {
    props: {
      edicao,
      realizador,
      edicoes
    },
  }
}

