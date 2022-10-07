import { connect } from "react-redux";
import DetailsLost from "../components/DetailsLost";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    found: state.found
  };
};

export default connect(mapStateToProps)(DetailsLost);
