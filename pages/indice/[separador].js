import IndiceLayout from "../../src/theme/Layout/indiceLayout"
import { useRouter } from 'next/router'
import Cineastas from "../../src/components/indice/Cineastas"
import Filmes from "../../src/components/indice/Filmes"
import { getAllRealizadores } from "../../lib/api"

export default function Separador({realizadores}) {
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
    
        router.query.separador === 'cineasta-e-artistas' ? <Cineastas realizadores={realizadores}/> :
        router.query.separador === 'filmes' ?  <Filmes /> : '' }
      />
    )
}


export async function getStaticPaths(prams) {
  const separadores = [
    {
      separador: 'cineasta-e-artistas'
    },
    {
      separador: 'filmes'
    },
  ]
  const paths = [];
  separadores.forEach(function (separador) {
    paths.push({ params: { 'separador': separador.separador } })
  });

  return {
    paths,
    fallback: true
  }
  
}



export async function getStaticProps({ params }) {
  const realizadores = await getAllRealizadores();
  return {
    props: {
      realizadores,
    },
    revalidate: 10,
  }
}
