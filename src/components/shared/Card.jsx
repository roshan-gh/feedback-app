import PropTypes from 'prop-types'

function Card({children,reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}` }>{children}</div>
  )
}

Card.defaultProps = {
    reverse: false, //For dark theme of cards
}

Card.propTypes = {
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}

export default Card