import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <Hello />
      <SayFullName name="Ivan" surname="Ivanov" link="vk.com" />
      <SayFullName name="Roman" surname="Petichkin" link="facebook.com" />
      <SayFullName name="Vanya" surname="Kabakov" link="#" />
  </div>
    );
  }
}

function Hello() {
  return (
  <h1>Hello, World!</h1>
  );
}

function SayFullName(props) {
  return (
      <div>
      <h1 className="main-header">Hello, {props.name}!</h1>
      <h2>My name {props.name}, last-name - {props.surname}</h2>
      <a href={props.link}>Сылка на мой профиль</a>
      </div>
  )
}

export default App;
