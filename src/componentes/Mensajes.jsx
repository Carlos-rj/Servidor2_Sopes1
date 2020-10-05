import React, { Component } from 'react';
import { getMensajesA } from '../api';
import 'bootstrap/dist/css/bootstrap.css';


export default class Mensajes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensajesA: [],
            loading: true,
            cantidad: 0
        };
    }

    tick() {
        getMensajesA().then((res) => {
            this.setState({
                mensajesA: res.data,
                loading: false,
            });
        }).catch((err) => console.log(err));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { mensajesA } = this.state;
        return (
            mensajesA.map(function(item, i){
                console.log(item.mensaje);
                return <div className="card text-white bg-dark mb-3">
                    <div className="card-header">No. {i+1} Autor: {item.autor}</div>
                    <div className="card-body">
                        <p className="card-text">Mensaje: {item.mensaje}</p>
                    </div>
                </div>
            })
        )
    };
}


