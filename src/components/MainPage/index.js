import { Link } from "react-router-dom";

function MainPage(props) {
  const { colors } = props;
  
  return (
    <>
      <div className="header">
        Welcome to the color factory.
        <Link to="/addColor">Add a color</Link>
      </div>
      <div className="main">
        Please select a color.
        {Object.keys(colors).map((color, i) => (
          <li key={i}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </div>
    </>
  );
}
export default MainPage;
