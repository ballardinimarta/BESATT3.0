import React from 'react'
import '../scss/omoss.scss'
import omoss1 from '../img/claraomiriam.jpeg'
import omoss2 from '../img/miriamoclara.jpeg'

export default function OmOss() {
    return (
        <>
        <div id="omossContainer">
            <p className="omossText">
                Besatt Magazine drivs av Clara Christiansson Drake, bosatt i Köpenhamn och Miriam Leandoer Håstad, bosatt i Stockholm. 
                Besatt är en konst / livsstilstidning med bilder, intervjuer, poesi samt andra konstformer samlade från olika kreatörer i Skandinavien.
                De försöker publicera fyra nummer om året.
            </p>
            <p className="omossText">
                Besatt Magazine is run by Clara Christiansson Drake, based in Copenhagen and Miriam Leandoer Håstad, based in Stockholm. 
                Besatt is an art/lifestyle magazine with pictures, interviews, poetry and other artforms collected from various people around scenes in Scandinavia. 
                They try to put out four issues a year.
            </p>
            <div id="omossBilder">
                <img src={omoss1} alt="bild på redaktörena" ></img>
                <img src={omoss2} alt="bild på redaktörena" ></img>
            </div>
        </div>
        </>
    )
}
