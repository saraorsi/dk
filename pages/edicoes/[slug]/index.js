import React from 'react'
import EdicaoLayout from "../../../src/theme/Layout/edicaoLayout"
import { getEdicao, getAllEdicoes, } from "../../../lib/api"

import { useRouter } from 'next/router'
import Programa from '../../../src/components/edicao/Programa'



function Edicao({ edicao }) {
  const router = useRouter()

  return (
    <EdicaoLayout
    edicao={edicao}
    contentRight={
      <Programa sessoes={edicao[0].acf.sessao_repetidor} />
    }
    />
  )
}

export async function getStaticPaths() {
  const edicoes = await getAllEdicoes()
  const paths = edicoes.map(post => ({ params: { slug: post.slug } }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const edicao = await getEdicao(params.slug)
  return {
    props: {
      edicao,
    },
    revalidate: 10,
  }
}
export default Edicao;