import { Component } from "react";

class Button extends Component {
    render() {
        return (
            <button onClick = {this.onButtonClick}>
                {this.state.name}
                {/*{this.props.name}*/}
            </button>
        )
    }

    constructor (props) {
        super(props);
        this.state = {name: 'Aceptar...'};
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({name: 'Cancelar'});
        console.log('Click!');
        /*Comprobar si un prop se llama onButtonClickApp*/
        if (this.props.onButtonClickApp)
            this.props.onButtonClickApp(10);
    }
}

export default Button;