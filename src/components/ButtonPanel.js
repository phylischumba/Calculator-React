import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="Groups">
      <div className="Group1">
        <Button name="AC" color />
        <Button name="+/-" color />
        <Button name="%" color />
        <Button name="÷" />
      </div>
      <div className="Group2">
        <Button name="7" color />
        <Button name="8" color />
        <Button name="9" color />
        <Button name="X" />
      </div>
      <div className="Group3">
        <Button name="4" color />
        <Button name="5" color />
        <Button name="6" color />
        <Button name="-" />
      </div>
      <div className="Group4">
        <Button name="1" color />
        <Button name="2" color />
        <Button name="3" color />
        <Button name="+" />
      </div>
      <div className="Group5">
        <Button name="0" wide color />
        <Button name="." color />
        <Button name="=" />
      </div>
    </div>
  );
}
