import React ,{Component} from 'react' ;
import paginationcss from './pagination.scss';
import {getdata} from '../../config'
class pagination extends React.Component {
    constructor(props) {
       super(props);
       this.state= {
           totalpages:0
       }
    }
    getmoredata(next) {
        let page = this.props.page;
        if(next == "first") {
            page = 0;
        } else if (next == "last") {
            page = this.state.totalpages-1
        } else if (next) {
            page++
        } else {
            page--
        }
        const pdata = getdata(page*this.props.resultperpage,this.props.resultperpage)
        this.props.updatedata({
            data:pdata.data,
            page:page
        })
    }
    static getDerivedStateFromProps(props, state){
        const total = props.totalresult;
        const perpage = props.resultperpage;

        const pages = Math.ceil(total/perpage);
        return {
            ...state,
            totalpages:pages
        }
    }
    render() {
        return (
            <div className="pagination">
                <p className="ib page">Page {this.props.page+1} of {this.state.totalpages}</p>
                <div title="first Page" className="first next ib" onClick={this.getmoredata.bind(this,"first")}>
                    <i className="icons icon-fast-bwd"></i>
                </div>
                <div title="Previous Page" className={"prev ib" +(this.props.page <= 0?" disabled":'')} onClick={this.getmoredata.bind(this,false)}>
                    <i className="icons icon-angle-left"></i>
                </div>
                <div title="Next Page" className={"next ib" +(this.props.page >= this.state.totalpages-1?" disabled":'')}onClick={this.getmoredata.bind(this,true)}>
                    <i className="icons icon-angle-right"></i>
                </div>
                <div title="last Page" className="last next ib" onClick={this.getmoredata.bind(this,"last")}>
                    <i className="icons icon-fast-fwd"></i>
                </div>
            </div>
        );
    }
}
export default pagination;
