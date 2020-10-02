/* eslint-disable no-unused-vars */
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calcData = { ...this.state };
    this.setState(calculate(calcData, buttonName));
  }

  render() {
    const { next, result, operation } = this.state;
    return (
      <div className="app">
        <Display result={result || '0'} next={next} operation={operation} />
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}
