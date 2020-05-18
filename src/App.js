import React, { Component } from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Navegacion from './Componentes/Navegacion';
import Inicio from './Componentes/Inicio';
import Mision from './Componentes/Mision';
import Nosotros from './Componentes/Nosotros';
import {Layout} from 'antd';
import {FacebookFilled, TwitterOutlined, WhatsAppOutlined} from  '@ant-design/icons';
const { Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Navegacion/>
        <br/>
        <Route path='/' exact component={Inicio}/>
        <Route path='/Mision_y_Vision' component={Mision}/>
      
        <Route path='/Nosotros' component={Nosotros}/>
        <Footer style={{ textAlign: 'center' }} className="Footer">Proyecto Escolar UAEH Cuidam ©2020 <br/>
          Autor Web: Benítez Medina Uriel<br/>
          <a href="https://www.facebook.com/uriel.benitezmedina" target="blank"><FacebookFilled  className="IconosFooter"/></a> &nbsp; <a target="blank" ><TwitterOutlined className="IconosFooter" /></a> &nbsp;<a href="https://api.whatsapp.com/send?phone=527712003337&text=¡Hola!,%20Me%20podrian%20dar%20infomes" target="blank"><WhatsAppOutlined className="IconosFooter" /></a></Footer>
        <br/>
      </Router>
    );
  }
}

export default App;