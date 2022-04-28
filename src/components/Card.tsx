export type CardProps = {
  id: number
  title: string
  imageUrl: string
}

export const Card: React.FC<CardProps> = ({ id, title, imageUrl }) => {
  const cardClass = `card card_${id}`
  return (
    <div className={ cardClass }>
      <h2 className="card__title">{ title }</h2>
      <div className="card__image">
        <img src={ imageUrl } alt="card logo" />
      </div>
    </div>
  )
}
