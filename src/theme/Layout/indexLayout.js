import ColumnCenter from "../../components/commons/ColumnCenter";
import ColumnLeft from "../../components/commons/ColumnLeft";
import ColumnRight from "../../components/commons/ColumnRight";
import Menu from "../../components/commons/Menu";
import Sidebar from "../../components/commons/Sidebar";


function Layout({ titleLeft, contentLeft, titleRight, contentRight, edicoes }) {
    console.log(edicoes);
    return (
        <div>
            <Menu />
            <ColumnLeft
                titleLeft={titleLeft}
                contentLeft={contentLeft}
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


Layout.getInitialProps = async (ctx) => {
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

  export default Layout;