export default function NameCard({ name, title }) {
  return(
    <div className="NameCard">
      <h1 className="NameCardTitle">{name}</h1>
    <p className="NameCardSub">{title}</p>
    </div>
  )
}