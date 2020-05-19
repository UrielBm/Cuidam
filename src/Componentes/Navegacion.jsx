import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/imagenes/Logo.png'
import {FacebookFilled, TwitterOutlined, WhatsAppOutlined} from  '@ant-design/icons';
class Navegacion extends Component {
    render() {
        return (
            <header>
                <div class="container">
                    <img src={logo} className="logo"/>
                    <nav>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="../Mision_y_Vision"  >Misión y Visión</Link></li>
                            <li><Link to="../Nosotros"  href="">Nosotros</Link></li>
                            <li><a>Redes Sociales: &nbsp; </a><a href="https://www.facebook.com/108756747387381/posts/108817624047960/?sfnsn=scwspmo&extid=okowd6aQpbTSTxdY" target="blank"><FacebookFilled  className="IconosNav"/></a> &nbsp; <a href="https://twitter.com/cuidam"target="blank" ><TwitterOutlined className="IconosNav" /></a> &nbsp;<a href="https://api.whatsapp.com/send?phone=527712003337&text=¡Hola!,%20Me%20podrian%20dar%20infomes" target="blank"><WhatsAppOutlined className="IconosNav" /></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navegacion;