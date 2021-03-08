import { getAllRealizadores } from "../../lib/api"
import Cineastas from "../../src/components/indice/Cineastas"
import IndiceLayout from "../../src/theme/Layout/indiceLayout"



export default function Indice({realizadores}) {


  return (
    <IndiceLayout
    titleLeft={
      'edições'
    }
    contentLeft={'hello'}
    titleRight={
      ''
    }
    contentRight={<Cineastas realizadores={realizadores}/>}
  />
  )
}



export async function getStaticProps({ params }) {
  const realizadores = await getAllRealizadores()

  return {
    props: {
      realizadores,
    },
    revalidate: 10,
  }
}