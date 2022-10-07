import { connect } from "react-redux";
import Spotted from "../components/Spotted";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    found: state.found
  };
};

export default connect(mapStateToProps)(Spotted);