import {getRAM_A, getCPU_A} from "../api";
import CanvasJSReact from "../canvasjs.react";
import "../App.css";

var React = require('react');
var Component = React.Component;

var memoriaRAM = []
var memoriaCPU = []
var CanvasJSChartRAM = CanvasJSReact.CanvasJSChart;
var CanvasJSChartCPU = CanvasJSReact.CanvasJSChart;


export default class GraficaA extends Component {

    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        getRAM_A().then((res) => {
            var obj = JSON.parse(res.data)
            getCPU_A().then((res2) => {
                var obj2 = JSON.parse(res2.data)
                this.setState(state => ({
                    seconds: state.seconds + 1
                }));
                var objeto = {x: this.state.seconds, y: obj['average']}
                var objeto2 = {x: this.state.seconds, y: obj2['average']}

                memoriaRAM.push(objeto)
                memoriaCPU.push(objeto2)
            })
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const optionsRAM = {
            maintainAspectRatio: false,
            animationEnabled: true,
            theme: "dark2",
            title:{
                text: "RAM"
            },
            axisX:{
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                }
            },
            data: [{
                type: "area",
                dataPoints: memoriaRAM
            }]
        }

        const optionsCPU = {
            maintainAspectRatio: false,
            animationEnabled: true,
            theme: "dark2",
            title:{
                text: "CPU"
            },
            axisX:{
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                }
            },
            data: [{
                type: "area",
                dataPoints: memoriaCPU
            }]
        }



        return (
            <div>
                <div align="center">
                    Iteraciones: {this.state.seconds}
                </div>
                <div className="Graf">
                    <CanvasJSChartRAM  options = {optionsRAM} />
                    <CanvasJSChartCPU  options = {optionsCPU} />
                </div>
            </div>
        );
    }
}
