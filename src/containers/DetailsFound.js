import { connect } from "react-redux";
import DetailsFound from "../components/DetailsFound";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    found: state.found
  };
};

export default connect(mapStateToProps)(DetailsFound);
