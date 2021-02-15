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
            ></ColumnLeft>
            <ColumnCenter></ColumnCenter>
            <ColumnRight
                titleRight={titleRight}
                contentRight={contentRight}
            ></ColumnRight>
            <Sidebar />
        </div>
    )
}