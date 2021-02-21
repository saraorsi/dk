import React from 'react'
import EdicaoLayout from "../../../src/theme/Layout/edicaoLayout"
import { getEdicao, getAllEdicoes } from "../../../lib/api"

import { useRouter } from 'next/router'
import Notas from '../../../src/components/edicao/Notas'
import Programa from '../../../src/components/edicao/Programa'
import Debates from '../../../src/components/edicao/Debates'
import Leituras from '../../../src/components/edicao/Leituras'
import QuemFez from '../../../src/components/edicao/QuemFez'


function Edicao({ edicao }) {

  const router = useRouter()


  return (
    <EdicaoLayout
    edicao={edicao}
    contentRight={
      <Notas content={edicao[0].acf.sinopse} />
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
  const { slug } = params;
  const edicao = await getEdicao(slug)
  return {
    props: {
      edicao,
    },
    revalidate: 10,
  }
}

export default Edicao;