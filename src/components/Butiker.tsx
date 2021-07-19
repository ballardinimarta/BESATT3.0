import React from 'react'
import './../scss/butiker.scss'
class Butik {
    name:string;
    adress:string;
    city:string;
    constructor(name:string, adress:string, city:string) {
        this.name = name;
        this.adress = adress;
        this.city = city;
    }
}
export default function Butiker() {
    let butiker: Butik[] = [
    ];
    let konstig = new Butik("KONST-IG","Åsögatan 124, 116 24 Stockholm", "Stockholm");
    let pressstop = new Butik("PRESS STOP", "Götgatan 31, 116 21 Stockholm", "Stockholm");
    let hedengrens = new Butik("HEDENGRENS", "Stureplan 4, 114 35 Stockholm", "Stockholm");
    let moderna = new Butik("MODERNA MUSEET", "Exercisplan 4, 111 49 Stockholm", "Stockholm");
    let ronells = new Butik("RÖNNELLS ANTIKVARIAT", "Birger Jarlsgatan 32B, 114 29 Stockholm", "Stockholm");
    let aspudden = new Butik("ASPUDDENS BOKHANDEL", "Hägerstensvägen 130, 126 49 Hägersten", "Stockholm");

    let malmokonsthall = new Butik("MALMÖ KONSTHALLS BOKHANDEL", "S:t Johannesgatan 7, 205 80 Malmö", "Skåne");
    let tidskriftsbutiken = new Butik("TIDSKRIFTSBUTIKEN MALMÖ", "Södra Förstadsgatan 18, 211 43 Malmö", "Skåne");
    let skissernas = new Butik("SKISSERNAS MUSEUM", "Finngatan 2, 223 62 Lund", "Skåne");

    let tredjevån = new Butik("3:E VÅNINGEN", "Sockerbruket 9, 414 51 Göteborg", "Göteborg");

    let eskilstuna = new Butik("ESKILSTUNA KONSTMUSEUM", "Portgatan 2, 633 42 Eskilstuna", "Övriga Sverige");
    let kristinehamn = new Butik("KRISTINEHAMNS KONSTMUSEUM", "Doktor Enwalls Väg 13, 681 37 Kristinehamn", "Övriga Sverige");

    butiker.push(konstig, pressstop, hedengrens, moderna, ronells, aspudden, malmokonsthall, tidskriftsbutiken, skissernas, tredjevån, eskilstuna, kristinehamn);

    let sthmlhtml = butiker.map((b, i) => {
        return ( 
            <>
                {b.city === 'Stockholm' && 
                    <div className="storeContainer">
                    <h3 className="storeName">{b.name}</h3>
                    <a className="storeAdress" target="_blank" href={`https://www.google.se/maps/place/${b.adress}`} rel="noreferrer" >{b.adress}</a>
                    </div>
                }
            </>
        )
    })
    let skanehtml = butiker.map((b, i) => {
        return ( 
            <>
                {b.city === 'Skåne' && 
                    <div className="storeContainer">
                    <h3 className="storeName">{b.name}</h3>
                    <a className="storeAdress" target="_blank" href={`https://www.google.se/maps/place/${b.adress}`} rel="noreferrer" >{b.adress}</a>
                    </div>
                }
            </>
        )
    })
    let gbghtml = butiker.map((b, i) => {
        return ( 
            <>
                {b.city === 'Göteborg' && 
                    <div className="storeContainer">
                    <h3 className="storeName">{b.name}</h3>
                    <a className="storeAdress" target="_blank" href={`https://www.google.se/maps/place/${b.adress}`} rel="noreferrer" >{b.adress}</a>
                    </div>
                }
            </>
        )
    })
    let svhtml = butiker.map((b, i) => {
        return ( 
            <>
                {b.city === 'Övriga Sverige' && 
                    <div className="storeContainer">
                    <h3 className="storeName">{b.name}</h3>
                    <a className="storeAdress" target="_blank" href={`https://www.google.se/maps/place/${b.adress}`} rel="noreferrer" >{b.adress}</a>
                    </div>
                }
            </>
        )
    })
    return (
    <div id="butikercontainer">
        <div className="cityContainer" id="stockholm">
            <h1>Stockholm</h1>
            {sthmlhtml}
        </div>
        <div className="cityContainer" id="skåne">
            <h1>Skåne</h1>
            {skanehtml}
        </div>
        <div className="cityContainer" id="göteborg">
            <h1>Göteborg</h1>
            {gbghtml}
        </div>
        <div className="cityContainer" id="övriga sverige">
            <h1>Övriga Sverige</h1>
            {svhtml}
        </div>

   </div>
    )
}
