// import { Link } from "react-router-dom";

const SubTiltle = ({ title, btntitle }) => {
  return (
    <div className="d-flex justify-content-between p-4">
      <div className="sub-tile">{title}</div>
      {btntitle ? (
        // <Link to={`${pathText}`} style={{ textDecoration: "none" }}>
        <div className="shopping-now {pathText}">{btntitle}</div>
      ) : // </Link>
      null}
    </div>
  );
};

export default SubTiltle;
