import themeswitch from './themeswitch.js';
import { connect } from 'react-redux';
import {setselectedtheme} from '../../store/actions'
const mapStateToProps = state => {
    return { themes: state.themes,selectedtheme:state.selectedtheme };
};
export default connect(mapStateToProps,{setselectedtheme})(themeswitch);