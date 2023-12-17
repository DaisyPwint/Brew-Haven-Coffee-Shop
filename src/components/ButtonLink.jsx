import { Link } from "react-router-dom"

const ButtonLink = ({direction,children}) => {
  return (
    <Link to={direction} className="inline-block mt-10 px-3 py-2 border-2 border-primary-200 bg-primary-200 text-white rounded-md drop-shadow-md">{children}</Link>
  )
}

export default ButtonLink