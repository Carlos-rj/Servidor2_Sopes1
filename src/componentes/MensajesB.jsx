import React, { Component } from 'react';
import { getMensajesB } from '../api';
import 'bootstrap/dist/css/bootstrap.css';


export default class MensajesB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensajesB: [],
            loading: true,
        };
    }

    tick() {
        getMensajesB().then((res) => {
            this.setState({
                mensajesB: res.data,
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
        const { mensajesB } = this.state;
        return (
            mensajesB.map(function(item, i){
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


