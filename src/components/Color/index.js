import { Link } from "react-router-dom";

function Color(props) {
  const { color } = props.match.params;
  const colorCode = props.colors[color];
  
  return (
    <>
      {colorCode ? (
        <div style={{ backgroundColor: colorCode }}>
          <h3>color: {color}</h3>
        </div>
      ) : (
        <h3> there is no color like that</h3>
      )}

      <Link to="/"> go home</Link>
    </>
  );
}
export default Color;
