import ColumnCenter from "../../components/commons/ColumnCenter";
import ColumnLeft from "../../components/commons/ColumnLeft";
import ColumnRight from "../../components/commons/ColumnRight";
import Menu from "../../components/commons/Menu";
import Sidebar from "../../components/commons/Sidebar";
import Link from "next/link";


export default function Layout({ titleLeft, contentLeft, titleRight, contentRight }) {

    const menus = [
        {
          link: `/indice/cineastas-e-artistas`,
          titulo: 'Cineastas e Artistas',
          slug: 'cineastas-e-artistas'
        },
        {
          link: `/indice/filmes`,
          titulo: 'Filmes',
          slug: 'filmes'
        },
        {
          link: `/indice/debates`,
          titulo: 'Debates',
          slug: 'debates'
        },
        {
          link: `/indice/leituras`,
          titulo: 'Leituras',
          slug: 'leituras'
        },
        {
          link: `/indice/visoes`,
          titulo: 'Visoes',
          slug: 'visoes'
        },
      ]

    return (
        <div>
            <Menu />
            <ColumnLeft
                titleLeft={'Índice'}
                contentLeft={menus.map((menu) => (
                  <li key={menu.link} >
                    <Link href={menu.link}>
                      <a>{menu.titulo}</a>
                    </Link>
                  </li>
                ))}
            />
            <ColumnCenter />
            <ColumnRight
                titleRight={titleRight}
                contentRight={contentRight}
            />
            <Sidebar />
        </div>
    )
}



