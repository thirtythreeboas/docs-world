import React, { useState, useEffect } from 'react'
import circle from '../styles/Circle.module.css'
import { circles } from '../data/data'
import Head from 'next/head'


interface CircleElem {
  num: number;
  id: string;
  image: string;
  medicIcon: string;
  message: string;
}

interface Circles {
  className: string;
  data: CircleElem[];
}

interface State {
  topRow: Circles;
  middleRow: Circles;
  bottomRow: Circles;
  column: Circles;
}

const ImgContainer = ({...e}) => {
  return (
    <div className={circle[`${e.className}`]}>
      <div className={circle.imgcontainer}>
        <img src={e.data[0].image} alt={e.data[0].message} />
        <p id={circle[`${e.data[0].id}`]}>{e.data[0].message}</p>
      </div>
      <div className={circle.imgcontainer}>
        <img src={e.data[1].image} alt={e.data[1].message} />
        <p id={circle[`${e.data[1].id}`]}>{e.data[1].message}</p>
      </div>
    </div>
  )
}

const Circle = () => {

  useEffect(() => {
    setCircleObj(circles)
  }, [])

  const [circleObj, setCircleObj] = useState<State | null>()

  const images = Object.values(!(circleObj) ? [] : circleObj);
  
  const generateKey = (param: number) => {
    return `${ param }_${ new Date().getTime() }`;
  }
  
  // if (!circleObj) return

  return (
    <>
      <Head>
        <title>МирВрача</title>
      </Head>
      <div className={circle.content}>
        <img className={circle.img} src="/img/round-parent.png" alt="kek" />
        <div className={circle.circles}>
          <div className={circle.subsircle}>
            {
              images.map((e: Circles, i: number) => (
                <ImgContainer key={generateKey(i)} {...e} />
                )
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Circle