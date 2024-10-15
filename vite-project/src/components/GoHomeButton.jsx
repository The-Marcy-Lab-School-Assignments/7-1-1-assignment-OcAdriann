import { Link } from "react-router-dom";
// TODO: 
// - Make the button navigate the user back to the home page

const GoHomeButton = () => {

  return (
    <>
      <Link to="/">
        <button className="ui button fluid">Go Home</button>
      </Link>
    </>
  )
}

export default GoHomeButton;