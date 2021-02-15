
import Layout from '../src/theme/Layout'
import Link from 'next/link'
import { getAllEdicoes, getAllDestaques } from '../lib/api'


function Home({ edicoes, destaques }) {


  edicoes.sort((a, b) => (a.acf.ano > b.acf.ano ? -1 : 1))

  return (
    <Layout
      titleLeft={
        'Edições'
      }
      contentLeft={edicoes.map((post) => (
        <li key={post.id} className="menu__list__item">
          <Link href={`/edicoes/${post.slug}`}>
            <a>{post.acf ? post.acf.ano : ''} <span>{post.title.rendered}</span></a>
          </Link>
        </li>
      ))}

      titleRight={
        'Destaques'
      }
      contentRight={destaques.map(item => (
        <li key={item.id}>{item.title.rendered}</li>
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
  }
}


export default Home;