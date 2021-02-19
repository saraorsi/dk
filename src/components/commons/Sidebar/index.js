import { SidebarRight } from './style/Sidebar' 

export default function Sidebar(){
    return(
        <SidebarRight>
            <SidebarRight.Ica>
                <div>
                    O DOC'S KINGDOM é apoiado pelo Instituto do Cinema Português e pelo Governo de Portugal
                </div>
            </SidebarRight.Ica>
            <SidebarRight.Links>
                <SidebarRight.Apordoc><a href="https://www.apordoc.org/" target="_blank">APORDOC</a> • <a href="https://doclisboa.org/" target="_blank">DOCLISBOA</a></SidebarRight.Apordoc>
                <SidebarRight.Newsletter>NEWSLETTER</SidebarRight.Newsletter>
            </SidebarRight.Links>
        </SidebarRight>
    )
}