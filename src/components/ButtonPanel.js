import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="Groups">
      <div className="Group1">
        <Button name="AC" color="#EFEFEF" />
        <Button name="+/-" color="#EFEFEF" />
        <Button name="%" color="#EFEFEF" />
        <Button name="÷" />
      </div>
      <div className="Group2">
        <Button name="7" color="#EFEFEF" />
        <Button name="8" color="#EFEFEF" />
        <Button name="9" color="#EFEFEF" />
        <Button name="X" />
      </div>
      <div className="Group3">
        <Button name="4" color="#EFEFEF" />
        <Button name="5" color="#EFEFEF" />
        <Button name="6" color="#EFEFEF" />
        <Button name="-" />
      </div>
      <div className="Group4">
        <Button name="1" color="#EFEFEF" />
        <Button name="2" color="#EFEFEF" />
        <Button name="3" color="#EFEFEF" />
        <Button name="+" />
      </div>
      <div className="Group5">
        <Button name="0" wide color="#EFEFEF" />
        <Button name="." color="#EFEFEF" />
        <Button name="=" />
      </div>
    </div>
  );
}
