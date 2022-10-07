import { connect } from "react-redux";
import AddListingsLost from "../components/AddListingsLost";
import { addLost } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    found: state.found
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addLost: (lost) => dispatch(addLost(lost)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListingsLost);