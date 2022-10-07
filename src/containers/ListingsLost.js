import { connect } from "react-redux";
import ListingsLost from "../components/ListingsLost";
import { addLost } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLost: (index) => dispatch(addLost(index)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListingsLost);
