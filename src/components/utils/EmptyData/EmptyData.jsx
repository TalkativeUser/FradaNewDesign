import "./EmptyData.css"
const EmptyData = ({text,style}) => {
  return (
    <div className="empty" style={style}>{text}</div>
  )
}
export default EmptyData