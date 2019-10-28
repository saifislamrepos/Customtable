import pagination from './pagination';
import { bindActionCreators } from 'redux'
import {updatedata,changeresultsize} from '../../store/actions';
import { connect } from 'react-redux';
const mapStateToProps = (state,ownProps) => {
    return { totalresult: state.totalresult,page:state.page,resultperpage:parseInt(state.resultperpage) };
};
export default connect(mapStateToProps, {updatedata,changeresultsize})(pagination);