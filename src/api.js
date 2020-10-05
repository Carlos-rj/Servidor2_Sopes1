import axios from 'axios'

export function getMensajesA() {
    return axios.get('http://35.193.77.152:3000/mensajes');
}

export function getMensajesB() {
    return axios.get('http://35.225.45.239:3000/mensajes');
}

export function getCantidadA() {
    return axios.get('http://35.193.77.152:3000/cantidad');
}

export function getCantidadB() {
    return axios.get('http://35.225.45.239:3000/cantidad');
}


export function getRAM_A() {
    return axios.get('http://35.193.77.152:3000/RAM');
}

export function getCPU_A() {
    return axios.get('http://35.193.77.152:3000/CPU');
}

export function getRAM_B() {
    return axios.get('http://35.225.45.239:3000/RAM');
}

export function getCPU_B() {
    return axios.get('http://35.225.45.239:3000/CPU');
}

