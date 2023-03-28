import { Component, ReactNode } from "react";
import dj from "../dj.jpg"

export default class Main extends Component{
        render() {
            return <div>
                <h1>Főoldal</h1>
                <p>Üdvözöllek DJ Petrik weboldalán!</p>
                    <br/>
                <p>Válassz a fenti lehetőségek közül!</p>
                <img src={dj} alt="Dj" id="djPic"></img>
            </div>
        }
}