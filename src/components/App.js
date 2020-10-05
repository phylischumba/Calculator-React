import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { result, next, operation } = this.state;
    const calcData = calculate({ result, next, operation }, buttonName);
    this.setState({
      result: calcData.result,
      next: calcData.next,
      operation: calcData.operation,
    });
  }

  render() {
    const { next, result, operation } = this.state;
    return (
      <div className="app">
        <Display result={result} next={next} operation={operation} />
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}
