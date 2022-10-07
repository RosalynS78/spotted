import { connect } from "react-redux";

import Navigation from "../components/Navigation"

const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    found: state.found
  };
};


export default connect(mapStateToProps)(Navigation);