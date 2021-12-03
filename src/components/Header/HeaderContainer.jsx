import {connect} from "react-redux";
import Header from './Header';


let mapStateToProps = (state) => {
    return {
        suggestions: state.mainPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;