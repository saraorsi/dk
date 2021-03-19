import { useState } from "react";
import { DestaquesItem } from "./styles";
import Moment from 'react-moment';
import moment from 'moment';

export default function Destaques({ destaque }) {
    const [accordion, setAccordion] = useState(false);

    function toggleAccordion() {
        setAccordion(!accordion);
    }
    return (
        <DestaquesItem>
            <div className="destaques-date">

                <Moment format="DD-MM-YYYY">
                    {destaque.date}
                </Moment>
            </div>
            <div className="destaques-title" onClick={toggleAccordion}>{destaque.title.rendered}</div>
            {destaque?.acf?.conteudo &&
                <div className={accordion ? 'destaques-text open' : 'destaques-text'} dangerouslySetInnerHTML={{ __html: destaque?.acf?.conteudo }}></div>

            }
            { destaque?.featured_media_src_url &&
                <div className="destaques-image-container">
                    <img src={destaque?.featured_media_src_url} alt={destaque.title.rendered} />
                </div>
            }
        </DestaquesItem>

    )

}