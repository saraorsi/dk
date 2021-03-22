import IndiceLayout from "../../src/theme/Layout/indiceLayout"
import { useRouter } from 'next/router'
import Cineastas from "../../src/components/indice/Cineastas"
import Filmes from "../../src/components/indice/Filmes"
import { getAllEdicoes, getAllRealizadores } from "../../lib/api"

export default function Separador({realizadores, edicoes}) {
    const router = useRouter()
    return (
        <IndiceLayout
        titleLeft={
          'edições'
        }
        contentLeft={'hello'}
        titleRight={
          ''
        }
        contentRight={
    
        router.query.separador === 'cineasta' ? <Cineastas realizadores={realizadores}/> :
        router.query.separador === 'filmes' ?  <Filmes edicoes={edicoes} /> : '' }
      />
    )
}


// export async function getStaticPaths() {
//   const separadores = [
//     {
//       separador: 'cineasta'
//     },
//     {
//       separador: 'filmes'
//     },
//     {
//       separador: 'debates'
//     },
//     {
//       separador: 'leituras'
//     },
//   ]
//   const paths = [];
//   separadores.forEach(function (separador) {
//     paths.push({ params: { separador: separador.separador } })
//   });


//   return {
//     paths,
//     fallback: true
//   }
  
// }



// export async function getStaticProps({ params }) {
//   const realizadores = await getAllRealizadores();
//   const edicoes = await getAllEdicoes();
//   return {
//     props: {
//       realizadores,
//       edicoes
//     },
//     revalidate: 10,
//   }
// }

export async function getServerSideProps({ params }) {
  const realizadores = await getAllRealizadores();
  const edicoes = await getAllEdicoes();
  return {
    props: {
      realizadores,
      edicoes
    },
  }
}

