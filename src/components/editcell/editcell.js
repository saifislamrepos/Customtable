import React ,{Component} from 'react' ;
import editcellcss from './editcell.scss';
class editcell extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           message : "editcell"
       }
    }
    render() {
        const message = this.state.message
        return (
                <div className="editcell">
                message : {message}
                </div>
        );
    }
}
export default editcell;
