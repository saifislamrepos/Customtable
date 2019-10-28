import React ,{Component} from 'react' ;
import resultcountselectcss from './resultcountselect.scss';
class resultcountselect extends React.Component {
    constructor(props) {
       super(props);
    }
    selectcounter(e) {
        this.props.changeresultsize(e.target.value)
    }
    render() {
        return (
                <div className="resultcountselect">
                    <div className="ib">
                        {this.props.totalresult} results available
                    </div>
                    <div className="ib">
                        <span className="text">Results per page</span>
                        <select onChange={this.selectcounter.bind(this)}>
                            {this.props.selectcounter.map((el,i)=>(
                                <option key={i} value={el}>{el}</option>
                            ))}
                        </select>
                    </div>
                </div>
        );
    }
}
export default resultcountselect;
