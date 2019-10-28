import sortoption from './sorting.js';
import { connect } from 'react-redux';
import {setsortdata} from '../../store/actions'
const mapStateToProps = state => {
    return {sort:state.sort};
};
export default connect(mapStateToProps,{setsortdata})(sortoption);