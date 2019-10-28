import productlist from './productlist';
import { connect } from 'react-redux';
import {setsortdata} from '../../store/actions'
import {sortdata} from '../../config'
const mapStateToProps = state => {
    return { data: sortdata(state.data,state.sort) ,sort:state.sort,selectedtheme:state.selectedtheme};
};
export default connect(mapStateToProps,{setsortdata})(productlist);