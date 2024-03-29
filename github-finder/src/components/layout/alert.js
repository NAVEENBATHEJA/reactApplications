import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext';


export const Alert = () => {

 const alertContext = useContext(AlertContext);
 const { alert } = alertContext;

 return (
  alert !== null && (
   <div className={`alert alert-${alert.type}`}>
    <i className="fa fa-info-cicle" /> {alert.msg}
   </div>
  )
 );
};

export default Alert;