import { connect } from "react-redux";
import AddComments from "../components/AddComments";
import { addComments } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addComments: (found) => dispatch(addComments(found)),
  };
};

export default connect(null, mapDispatchToProps)(AddComments);
