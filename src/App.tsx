import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardProps } from './components/Card'
import { CameraBtn } from './components/CameraBtn'
import SeaHut from './assets/seaHut.png'

export const App = () => {
  const navigate = useNavigate()
  const [cardPropsArray] = useState<CardProps[]>([{
    id: 1,
    title: 'Catch Log',
    imageUrl: SeaHut
    },{
      id: 2,
      title: 'SeaHut',
      imageUrl: SeaHut
    },{
      id: 3,
      title: 'Weather',
      imageUrl: SeaHut
    },{
      id: 4,
      title: 'Calendar',
      imageUrl: SeaHut
    }
  ])

  const activateCamera = () => {
    navigate('/camera')
  }

  return (
    <div className="app">
      {cardPropsArray?.map(item => (
        <Card title={ item.title } imageUrl={ item.imageUrl } id={ item.id } />
      ))}
      <CameraBtn handleClick={ activateCamera } />
    </div>
  )
}
