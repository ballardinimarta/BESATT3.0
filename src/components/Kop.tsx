import React from 'react'
import '../scss/kop.scss'
import nr1 from '../img/NR_1.jpg'
import nr2 from '../img/NR_2.jpg'
import nr3 from '../img/NR_3.jpg'
import nr4 from '../img/NR_4.jpg'
import nr5 from '../img/NR_5.jpg'

interface IMagazine {
    id: number;
    month: string;
    picture: string;
}
export default function Kop() {
 
    let magazines : IMagazine[] = [
        {id: 5, month: "Maj 2021", picture: nr5},
        {id: 4, month: "Juni 2020", picture: nr4},
        {id: 3, month: "Oktober 2019", picture: nr3},
        {id: 2, month: "Juni 2019", picture: nr2},
        {id: 1, month: "Februari 2019", picture: nr1},
    ]
    let magazineHtml = magazines.map((mag, i) => {
        return (
            <div className="magazineWrapper" id={(mag.id).toString()}>
                <img src={mag.picture} alt={`Nummer ${mag.id}, från ${mag.month}`} />
                <div className="overlay">
                    <p className="magInfo">NR.{mag.id} <br /> {mag.month}</p>
                </div>
            </div>
        );
    })
    return (
        <>
        <div id="buyText">
            <p><b>Obs.</b> skriv gärna till oss på våran mail eller på instagram för att kolla om vi har kvar av det numret du vill köpa.</p>
            <p>Swish till 0735287999 (Clara Christiansson Drake).
            Skriv adress och vilket/vilka nummer du vill ha i meddelandet av swishen.</p>
            <p id="price"><b>Pris:</b> 150kr/st</p>
        </div>
        
        <div id="magazineContainer">
            {magazineHtml}
        </div>
        </>
    )
}
