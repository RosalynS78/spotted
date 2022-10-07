import { connect } from "react-redux";
import ListingsFound from "../components/ListingsFound";
import { addFound } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.found,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFound: (index) => dispatch(addFound(index)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListingsFound);
