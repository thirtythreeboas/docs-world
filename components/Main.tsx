import React, { useState, useEffect } from 'react'
import main from '../styles/Main.module.css'
import { data } from '../data/data.js'
import Patient from './Patient'
import Note from './Note'

interface desc {
  firstBlock: string;
  secondBlock: string;
  thirdBlock?: string;
}

interface InfoObject {
  num: number;
  patient: string;
  image: string;
  description: desc;
}

const Main = () => {

  useEffect(() => {
    setPeeps([...data])
  }, [])

  const [peeps, setPeeps] = useState<InfoObject[]>([])

  return (
    <div className={main.main}>
      <h1 className={main.header}>Выберите, кто ваш пациент:</h1>
      <div className={main.content}>
        {
          peeps?.map((e: InfoObject, i: number) => (
            <Patient key={e.num + i} {...e} />
          ))
        }
      </div>
      <Note />
    </div>
  )
}

export default Main