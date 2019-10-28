import React ,{Component} from 'react' ;
import './productlist.scss';
import Customcell from '../customcell/customcell.js'
class productlist extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           sort :{
               key:'nm',
               rev:false
           }
       }
    }
    setsortingopt(key){
        const sort = {
            key:key,
            rev : this.props.sort.key == key ?!this.props.sort.rev:false
        }
        this.props.setsortdata(sort)
    }
    static getDerivedStateFromProps(props, state) {
        props.data.forEach(el => {
            el.config = {
                bgcolor:props.selectedtheme.bgcolor,
                color:props.selectedtheme.fontcolor,
                padding:"inherit",
                fontsize:"inherit",
                bdrcolor:props.selectedtheme.fontcolor
            }
        });
        return {
            data:props.data
        }
    }
    render() {
        return (
            <div className="productlist"> 
                {this.props.data && this.props.data.length>0 && <table>
                    <thead>
                        <tr>
                            <th className={(this.props.sort.key == "nm"?"":" normal")} onClick={this.setsortingopt.bind(this,'nm')}>
                                <span className="text">Name</span> 
                                <span className="ib sort-ind">
                                    <i className={"icons icon-dir-down "+(!this.props.sort.rev?"":"normal")}></i>
                                    <i className={"icons icon-dir-up "+(this.props.sort.rev?"":"normal")}></i>
                                </span>
                            </th>
                            <th className={(this.props.sort.key == "pr"?"":" normal")} onClick={this.setsortingopt.bind(this,'pr')}>
                                <span className="text">Price</span>
                                <span className="ib sort-ind">
                                    <i className={"icons icon-dir-down "+(!this.props.sort.rev?"":"normal")}></i>
                                    <i className={"icons icon-dir-up "+(this.props.sort.rev?"":"normal")}></i>
                                </span>
                            </th>
                            <th className={(this.props.sort.key == "dis"?"":" normal")} onClick={this.setsortingopt.bind(this,'dis')}>
                                <span className="text">Discount</span>
                                <span className="ib sort-ind">
                                    <i className={"icons icon-dir-down "+(!this.props.sort.rev?"":"normal")}></i>
                                    <i className={"icons icon-dir-up "+(this.props.sort.rev?"":"normal")}></i>
                                </span>
                            </th>
                            <th className={(this.props.sort.key == "rat"?"":" normal")} onClick={this.setsortingopt.bind(this,'rat')}>
                                <span className="text">Rating</span>
                                <span className="ib sort-ind">
                                    <i className={"icons icon-dir-down "+(!this.props.sort.rev?"":"normal")}></i>
                                    <i className={"icons icon-dir-up "+(this.props.sort.rev?"":"normal")}></i>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((elem,i)=>(
                            <tr key ={i} >
                                <Customcell text ={elem.nm} theme= {this.props.selectedtheme}/>
                                <Customcell text ={elem.pr} theme= {this.props.selectedtheme}/>
                                <Customcell text ={elem.dis} theme= {this.props.selectedtheme}/>
                                <Customcell text ={elem.rat} theme= {this.props.selectedtheme}/>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </div>
        );
    }
}
export default productlist;
