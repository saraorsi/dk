import IndexLayout from '../src/theme/Layout/indexLayout'
import { getAllEdicoes, getAllDestaques } from '../lib/api'
import Destaques from '../src/components/home/Destaques'
import Menu from '../src/components/home/Menu'



function Home({ edicoes, destaques}) {


  edicoes.sort((a, b) => (a.acf.ano > b.acf.ano ? -1 : 1))
  return (
    <IndexLayout
      titleLeft={
        'edições'
      }
      contentLeft={edicoes.map((post) => (
        <li key={post.id}>
          <Menu key={post.slug} post={post}  />
        </li>
      ))}
      titleRight={
        'destaques'
      }
      contentRight={destaques.map(destaque => (
        <Destaques key={destaque.id} destaque={destaque} />
      ))}
    />
  )
}

export async function getStaticProps() {
  const edicoes = await getAllEdicoes()
  const destaques = await getAllDestaques()
  return {
    props: {
      edicoes,
      destaques
    },
    revalidate: 10
  }
}

export default Home;
