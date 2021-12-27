import {searchTopicActionCreator, updateTopicActionCreator} from "../../redux/mainReducer";
import {connect} from "react-redux";
import Header from './Header';


let mapStateToProps = (state) => {
    return {
        suggestions: state.mainPage,
        newSearchText : state.mainPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        searchTopic: () => {
            dispatch(searchTopicActionCreator())
        },

        updateTopic: (text) => {
            dispatch(updateTopicActionCreator(text));
        } 
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;