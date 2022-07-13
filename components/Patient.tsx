import React from 'react'
import patient from '../styles/Patient.module.css'


const Patient = ({...e}) => {

  const generateKey = (param: number) => {
    return `${ param }_${ new Date().getTime() }`;
  }

  return (
    <div className={patient.container}>
      <h3 className={patient.header}>{e.patient}</h3>
      <img className={patient.img} src={e.image} alt={e.patient} />
      <div className={patient.content}>
        {
          Object.values(e.description).map((text: any, i: number) => <p className={patient.info} key={generateKey(i)}>{text}</p>)
        }
      </div>
    </div>
  )
}

export default Patient