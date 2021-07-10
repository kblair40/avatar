import withStyles from "@material-ui/core/styles/withStyles";
import "./Hair.css";

const Hair = ({ classes }) => {
  return (
    <div>
      <div className="hair-base"></div>
      <div className="hair-left"></div>
      <div className="hair-right"></div>
      <div className="hair-left-detail"></div>
    </div>
  );
};

export default Hair;
