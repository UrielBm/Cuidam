import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { EyeTwoTone, TrophyTwoTone } from '@ant-design/icons';
import Wobble from 'react-reveal/Wobble';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
class Mision extends Component {
    render() {
        return (
            <Row>
                <Row>
                    <h1>Misión</h1>
                </Row>
                <Rotate top left>
                <Row className="Fondo_mision">
                    <br />
                    <Row>
                        <hr />
                    </Row >
                    <Row className="Mision">
                        <span>
                            Brindar al adulto mayor un servicio profesional que garantice el bienestar físico,
                            social y psicológico, mejorando su calidad de vida y su autonomía. Al familiar,
                            le proporcionamos la tranquilidad de realizar sus labores cotidianas con la confianza
                            para delegar en nosotros el cuidado de su ser querido.
                    </span>
                    </Row>
                    <Row justify="center" align="middle" className="Icon">
                        <Wobble>
                            <TrophyTwoTone style={{ fontSize: '60px' }} twoToneColor="#f8dc88" />
                        </Wobble>
                    </Row>
                    <Row>
                        <hr />
                    </Row >
                </Row>
                </Rotate>
                <Row>
                    <h1>Visión</h1>
                </Row>
                <Rotate top right>
                <Row className="Fondos">
                    <br />
                    <Row>
                        <hr />
                    </Row >
                    <Row className="Mision">
                        <span>
                            Ser el mejor referente a nivel nacional en el cuidado del adulto mayor y ser la primer agencia de cuidadores de expansión nacional.
                    </span>
                    </Row>
                    <Row justify="center" align="middle" className="Icon">
                        <Slide right>
                            <EyeTwoTone style={{ fontSize: '60px' }} twoToneColor="#f8dc88" />
                        </Slide>
                    </Row>
                    <Row>
                        <hr />
                    </Row >
                </Row>
                </Rotate>
            </Row>
        );
    }
}

export default Mision;