import Appcomp from './app.js';
import {assigndata,updatedata} from '../../store/actions';
import { connect } from 'react-redux';
const mapStateToProps = state => {
    return { resultperpage: parseInt(state.resultperpage) };
};
export default connect(mapStateToProps, {assigndata,updatedata})(Appcomp);