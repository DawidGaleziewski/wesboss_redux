import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from "../actions/actionCreators";
import Main from './Main';


//  We need to connect the state and disptach to our component props
const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    // We reutn our binActionCreators with all actions as first argument and a dispatch as a second
    return bindActionCreators(actionCreators, dispatch)
}

// After that we run our connected peops agains our main component making all the actions and state available to them
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App