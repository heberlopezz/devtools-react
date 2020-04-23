import React from 'react';
import './App.css';
import { data } from './utils';
const list = data();
const App = () => (
  <div className="App">
    <Header title="DevTools" />
    <Content title="DevTools" list={list} />
  </div>
);

const Header = props => (
  <div className="App-header">
    {props.title}
  </div>
);

const Content = props => (
  <div>
    {props.title}
    <Table list={props.list}/>
  </div>
);

const Table = ({ list }) => (
  <div>
    {list.map(item => (<Row key={item.id} item={item} />))}
  </div>
);

const Row = ({ item }) => (
  <div>{item.name}</div>
);

export default App;
