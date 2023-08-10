import React from 'react';
import { useSelector } from 'react-redux'
import './alert.css';

function Alert() {
    const message = useSelector((state) => state.alert.message);
  return (
    <div className="alert">{message}</div>
  )
}

export default Alert