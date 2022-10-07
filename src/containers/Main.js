import { connect } from "react-redux";
import Home from "../components/Main";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    found: state.found
  };
};

export default connect(mapStateToProps)(Home);
