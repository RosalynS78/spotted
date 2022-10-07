import { connect } from "react-redux";
import Signup from "../components/Signup";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    found: state.found
  };
};

export default connect(mapStateToProps)(Signup);