import React, { Component } from 'react';
import { Col, Row,Icon} from 'antd';
import {StarTwoTone,CheckCircleTwoTone,SmileTwoTone,GiftTwoTone}  from '@ant-design/icons';
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';
class Inicio extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Flip left cascade>
                        Somos una familia con respeto, responsabilidad, tolerancia y empatía.
                    </Flip>
                </h1>
                <Row className='fondo-Inicio2' justify="center"  align="top">
                    <h2 className="Valores">Valores:</h2>
                    <Row align="middle" justify="space-around" className="ImagenesValores">
                        <Col className='Cuadrado'>
                        <StarTwoTone   style={{fontSize: '40px'}} twoToneColor="#8566aa"  spin="true"/>
                    </Col>
                        <Col className='Cuadrado'>
                        <CheckCircleTwoTone  style={{fontSize: '40px'}} twoToneColor="#ffbcbc"/>

                    </Col>
                        <Col className='Cuadrado'>
                        <SmileTwoTone style={{fontSize: '40px'}}  twoToneColor="#f4e04d"  />

                    </Col>
                        <Col className='Cuadrado'>
                        <GiftTwoTone style={{fontSize: '40px'}}  twoToneColor="#ff5722" />

                    </Col>
                    </Row>
                    <span className="TextoValores">
                    <i><b>Respeto:</b></i> Valoramos la individualidad de las personas a nuestro cuidado utilizando una forma de comunicación y trabajo que denote cortesía y sensibilidad,
                    evitando comentarios y actitudes  que puedan afectar su dignidad.
                    </span>
                    <span className="TextoValores">
                    <i><b>Responsabilidad:</b></i> Tenemos la habilidad para responder a los compromisos y deberes con nosotros mismos y con las personas que depositan su confianza en nosotros. 

                    </span>
                    <span className="TextoValores">
                    <i><b>Tolerancia:</b></i> Entendemos las ideas, practicas y creencias  del adulto mayor y de sus familias.

                    </span>
                    <span className="TextoValores">
                    <i><b>Empatía:</b></i> Tenemos la sensibilidad para reconocer al otro como un similar con mente propia.
                    </span>
                    <div class="corazon">&#x2665;</div>
                </Row>
                <Roll right>
                <Row type="flex" justify="space-around" align="middle" className="fondo-Inicio">
                    <Row>
                        <h2 className="Principios">Principios:</h2>
                    </Row>
                    <Row>
                        <Col>
                            <span className="TextoPrincipios"><h3><i>Calidad:&nbsp;</i></h3>Conocemos los compromisos adquiridos por lo cual dedicamos el tiempo y conocimiento necesario para llevarlos a cabo, dando lo mejor de nosotros mismos en todo momento.</span>
                            <span className="TextoPrincipios"><h3><i>Trabajo en equipo:&nbsp;</i></h3>Creamos un espacio interdisciplinario fraterno, incluyente y solidario que nos ayude a crecer y mejorar constantemente nuestros servicios.</span>
                            <span className="TextoPrincipios"><h3><i>Inclusión:&nbsp;</i></h3>Respondemos positivamente a la diversidad reconociendo y valorando las cualidades de cada individuo como una oportunidad para el enriquecimiento personal, familiar y social.</span>
                            <span className="TextoPrincipios"><h3><i>Servicio:&nbsp;</i></h3>Actuamos siempre velando por  el bienestar del adulto mayor y la tranquilidad de su familias.</span>
                            <span className="TextoPrincipios"><h3><i>Amor:&nbsp;</i></h3>Procurar actitudes de compasión, paciencia, aceptación y alegría que nos lleven a hermanarnos con el prójimo.</span>
                        </Col>
                    </Row>
                </Row>
                </Roll>
                
            </div>
        );
    }
}

export default Inicio;