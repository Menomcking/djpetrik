import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component{
        render(): ReactNode {
            return <nav>
                <Link to='/'>Főoldal </Link>
                <Link to='/experience'>Tapasztalat </Link>
                <Link to='/appointment'>Idopont </Link>
            </nav>
        }
}