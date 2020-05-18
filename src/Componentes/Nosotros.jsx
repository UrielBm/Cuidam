import React, { Component } from 'react';
import { Row, Card, Col } from 'antd';
import Equipo from '../assets/imagenes/Equipo1A.jpeg';
import Equipo2 from '../assets/imagenes/Equipo2B.jpeg';
import Equipo3 from '../assets/imagenes/Equipo4D.jpeg';
import Azucena from '../assets/imagenes/Azucena.jpeg';
import Persona1 from '../assets/imagenes/Persona1.jpeg';
import Persona2 from '../assets/imagenes/Persona2.jpeg';
import Persona3 from '../assets/imagenes/Persona3.jpeg';
import Persona4 from '../assets/imagenes/Persona4.jpeg';
import {FacebookFilled} from '@ant-design/icons';
class Nosotros extends Component {
    render() {
        const { Meta } = Card;
        return (
            <Row>
                <Row>
                    <h1>Nosotros</h1>
                    <h2>Conoce a nuestro equipo de trabajo</h2>
                </Row>
                <Row align="middle" justify="space-around" className="ImagenesValores">
                    <Col span={12}>
                        <img src={Equipo} className="DiseñoImagines" />
                    </Col>

                    <Col span={12}>
                        <img src={Equipo2} className="DiseñoImagines" />
                    </Col>
                    <Col>
                        <img src={Equipo3} className="DiseñoImagines" />
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Row align="middle" justify="space-around" className="ImagenesValores">
                    <Col className="Nosotros">
                        <Card
                            hoverable
                            style={{ width: 250,}}
                            cover={<img  src={Azucena} width="120px"  />} className="ImagenesPersonas"
                         >
                            <Meta title="Benítez Medina Azucena" description="Community Manager"  className="Card"/>
                        </Card>
                        <br/>
                        <br/>
                    </Col>
                    <Col className="Nosotros">
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<img  src={Persona1} width="120px" />} className="ImagenesPersonas"
                        >
                            <Meta title="Marco Antonio Salinas Ávila" description="Personal de Limpieza" className="Card" />
                        </Card>
                    </Col>
                    <Col className="Nosotros">
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<img  src={Persona2} width="120px" />} className="ImagenesPersonas"
                        >
                            <Meta title="Francelia García Mendoza." description="Recursos Humanos"  className="Card"/>
                        </Card>
                    </Col>
                </Row>
                <Row align="middle" justify="space-around" className="ImagenesValores">
                    <Col className="Nosotros">
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<img  src={Persona3} width="120px" />}
                        className="ImagenesPersonas" >
                            <Meta title="Iveth Islas Hernández" description="Director de Imagen "  className="Card"/>
                        </Card>
                    </Col>
                    <Col className="Nosotros">
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<img src={Persona4} width="120px" />}
                        className="ImagenesPersonas" >
                            <Meta title="Esther Islas Cruz." description="Director Ejecutivo"  className="Card"/>
                        </Card>
                        <br/>
                        <br/>
                    </Col>
                </Row>
            </Row>

        );
    }
}

export default Nosotros;