import React, { Component } from "react";
import logo from "./logo.svg";
import Customer from "./components/Customer";
import "./App.css";

const customer = {
  'name' : '홍길동',
  'birthday' : '930311',
  'gender' : '남자',
  'job' : 'programer'
}

class App extends Component {
  render() {
    return <Customer 
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />;
  }
}

export default App;
