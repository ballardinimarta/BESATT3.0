import React, { ChangeEvent, useState } from 'react'
import emailjs from 'emailjs-com';
import '../scss/prenumeration.scss'
import { useHistory } from "react-router-dom";

interface IForm {
    name: string;
    email: string;
    phone: string;
    adress: string;
    zip: string;
    city: string;
}
export default function Prenumeration() {
    let history = useHistory();

    const defval: IForm = {
        name: '',
        email: '',
        phone: '',
        adress: '',
        zip: '',
        city: '',
    }
    const [form, setForm] = useState<IForm>(defval);

    function updateAll (e: ChangeEvent<HTMLInputElement>) {
        let name: string = e.target.name;
        setForm({...form,[name]: e.target.value});
    }
    function sendForm (e) {

        e.preventDefault();
        emailjs.init("user_MnAUJ3gcuwBkR1yYU48WJ");

        emailjs.send("service_t6042fm","template_3wbmc6a", {
            name: form.name,
            email: form.email,
            phone: form.phone,
            adress:form.adress,
            zip: form.zip,
            city: form.city,
        });
        history.push("/tack");

    }

    return (
        <div>
            <form onSubmit={sendForm}>
                <div>
                    <label htmlFor="name">Namn</label>
                    <input type="text" name="name" id="name" onChange={updateAll} required placeholder="Anna Andersson"></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={updateAll} required placeholder="annaandersson@example.com"></input>
                </div>
                <div>
                    <label htmlFor="phone">Telefonnummer</label>
                    <input type="tel" name="phone" id="phone"  onChange={updateAll} required placeholder="+46 701 234 567" ></input>
                </div>
                <div>
                    <label htmlFor="adress">Adress</label>
                    <input type="text" name="adress" id="adress" onChange={updateAll}  required placeholder="Storgatan 5"></input>
                </div>
                <div>
                    <label htmlFor="zip">Postkod</label>
                    <input type="text" name="zip" id="zip" onChange={updateAll}  maxLength={6} minLength={5} required placeholder="12345"></input>
                </div>
                <div>
                    <label htmlFor="city">Postort</label>
                    <input type="text" name="city" id="city"  onChange={updateAll} required placeholder="Stockholm"></input>
                </div>
                <button type="submit">skicka</button>
            </form>
        </div>
    )
}
