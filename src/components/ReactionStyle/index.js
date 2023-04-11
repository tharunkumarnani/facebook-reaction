import './index.css'

const ReactionStyle = props => {
  const {reactType, onFeedBack} = props
  const {name, imageUrl} = reactType
  const feedBackClicked = () => {
    onFeedBack(name)
  }

  return (
    <li className="emoji-style">
      <img
        onClick={feedBackClicked}
        className="image-style"
        alt={name}
        src={imageUrl}
      />
      <p className="react-name">{name}</p>
    </li>
  )
}

export default ReactionStyle
