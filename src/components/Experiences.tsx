import { Component } from "react";
import petrik from "../petrik.jpg"

export default class Experiences extends Component{
    render() {
        return <div>
            <img src={petrik} alt="Petrik" id="petrikPic"></img>
            <h1>Szakmai tapasztalat</h1>
            <h2>Pro-bono bulik</h2>
            <ul>
                <li> Csibeavató, 2021. 08. 31.</li>

                <li> Karácsonyi bál, 2021. 12. 22.</li>

                <li> Farsangi mulatság, 2022. 02. 20.</li>
            </ul>

            <h2>Professzionális bulik</h2>
            <ul>
                <li> Tanárkarácsony, 2021. 12. 20.</li>

                <li> Ballagás, 2022. 04. 30.</li>
            </ul>
        </div>
    }
}