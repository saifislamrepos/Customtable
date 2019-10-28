import React ,{Component} from 'react' ;
import sortingcss from './sorting.scss';
class sorting extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           config: [
               {label:"Name",key:"nm"},
               {label:"Price",key:"pr"},
               {label:"Discount",key:"dis"},
               {label:"Rating",key:"rat"}
           ],
            sort :{
               key:this.props.sort.key,
               rev:this.props.sort.rev
            }
       }
    }
    selectsortopt(e){
        const key = e.target.name;
        const val = e.target.type == "checkbox"?e.target.checked:e.target.value
        this.setState(prevState=>({
            ...prevState,
            sort:{
                ...prevState.sort,
                [key]:val
            }
        }));
        setTimeout(() => {
            this.props.setsortdata(this.state.sort)  
        });
    }
    render() {
        return (
                <div className="sorting flex">
                    Sort by 
                    <select name="key" value={this.props.sort.key} onChange={this.selectsortopt.bind(this)}>
                        {this.state.config.map((opt,i)=>(
                            <option key ={i} value ={opt.key}>{opt.label}</option>
                        ))}
                    </select>
                    <span>Reverse sort</span>
                    <div className="select-rev">
                        <label className={"ib toggle-button cursor-pointer"+(this.props.sort.rev?" selected":"")}>
                            <input className="input-hidden" name="rev" type="checkbox" checked={this.state.sort.rev} onChange={this.selectsortopt.bind(this)} />
                            <div className="select-circle v-aligm-m toggle-circle"></div>
                        </label>
                    </div>
                </div>
        );
    }
}
export default sorting;
