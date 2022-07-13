import React from 'react'
import note from '../styles/Main.module.css'

const Note = () => {
  return (
    <h6 className={note.question}>Сообщает ли один из ваших пациентов о следующих симптомах? <span className={note.link}>(нажмите на любую иконку и узнайте больше)</span></h6>
  )
}

export default Note