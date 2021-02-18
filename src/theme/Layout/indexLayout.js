import ColumnCenter from "../../components/commons/ColumnCenter";
import ColumnLeft from "../../components/commons/ColumnLeft";
import ColumnRight from "../../components/commons/ColumnRight";
import Menu from "../../components/commons/Menu";
import Sidebar from "../../components/commons/Sidebar";

export default function Layout({ titleLeft, contentLeft, titleRight, contentRight }) {
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