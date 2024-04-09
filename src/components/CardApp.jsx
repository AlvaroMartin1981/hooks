function CardApp ({title, name, image}) {
    return (
      <div>
        <h2>{title}</h2>
        <p>{name}</p>
        {image ? <img src={image} alt={name}  /> : null}
      </div>
    )
  }
  
  export default CardApp