import { connect } from "react-redux";
import AddListingsFound from "../components/AddListingsFound";
import { addFound } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    found: state.found
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFound: (found) => dispatch(addFound(found)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListingsFound);