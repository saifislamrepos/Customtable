import resultcountselect from './resultcountselect';
import { bindActionCreators } from 'redux'
import {changeresultsize} from '../../store/actions';
import { connect } from 'react-redux';
const mapStateToProps = (state,ownProps) => {
    return {resultperpage:state.resultperpage ,totalresult:state.totalresult};
};
export default connect(mapStateToProps, {changeresultsize})(resultcountselect);