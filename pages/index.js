import IndexLayout from '../src/theme/Layout/indexLayout'
import Link from 'next/link'
import { getAllEdicoes, getAllDestaques } from '../lib/api'
import Destaques from '../src/components/home/Destaques'



function Home({ edicoes, destaques }) {
  edicoes.sort((a, b) => (a.acf.ano > b.acf.ano ? -1 : 1))
  return (
    <IndexLayout
      titleLeft={
        'Edições'
      }
      contentLeft={edicoes.map((post) => (
        <li key={post.id}>
          <Link href={`/edicoes/${post.slug}`}>
            <a>{post.acf ? post.acf.ano : ''} <span>{post.title.rendered}</span></a>
          </Link>
        </li>
      ))}
      titleRight={
        'Destaques'
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