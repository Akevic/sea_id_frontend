import camera from '../assets/camera.png'

type CameraBtnProps = {
  handleClick: any
}

export const CameraBtn: React.FC<CameraBtnProps> = ({ handleClick }) => {
  return (
    <div onClick={ handleClick } className="camera">
      <img src={ camera } alt="camera" />
    </div>
  )
}
