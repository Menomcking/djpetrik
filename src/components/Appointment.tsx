import { Component } from "react";

interface State{
    name: string,
    date: string,
    description: string,
    output: string,
}

export default class Appointment extends Component<{}, State>{

    constructor(props: {}){
        super(props);
        
        this.state = {
            name: '',
            date: '',
            description: '',
            output: '',
        }
    }

    whenClick = async () => {
        const {name, date, description, output} = this.state;
        if (name.trim() == '' || date.trim() == '' || description.trim() == ''){
            this.setState({ output: "Töltsön ki minden mezőt." })
        }else{
            this.setState({ output: "Köszönjük a megkeresését" })
            this.setState({
                name: '',
                date: '',
                description: ''
            })
        }
        return false;
    }
    render(){
        const {name, date, description, output} = this.state;
        return <div>
            <input type="text" placeholder="Név" value={name} onChange={e => this.setState({name: e.currentTarget.value})}/><br />
            <input type="text" placeholder="Rendezvény dátuma" value={date} onChange={e => this.setState({ date: e.currentTarget.value })}/><br />
            <input type="textarea" placeholder="Leírás" value={description} onChange={e => this.setState({ description: e.currentTarget.value })}/><br />
            <button onClick={this.whenClick}>Időpont lefoglalása</button>             
            <p>{ output }</p>
        </div>
    }
}