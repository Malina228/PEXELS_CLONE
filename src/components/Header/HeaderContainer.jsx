import {connect} from "react-redux";
import Header from './Header';


let mapStateToProps = (state) => {
    return {
        suggestions: state.mainPage
    }
}

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;