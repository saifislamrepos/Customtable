import React ,{Component} from 'react' ;
import './customcell.scss';
import {appContext} from '../../config'
class customcell extends React.Component {
    static contextType = appContext;
    constructor(props) {
        super(props);
        this.state = {
            showedit: false,
            config: {
                backgroundColor: this.props.theme.bgcolor,
                color: this.props.theme.fontcolor,
                fontSize:this.props.theme.fontsize,
                paddingLeft:15,
                paddingRight:15,
                paddingTop:10,
                paddingBottom:10,
                textAlign: "left"
            }
        }
    }
    editCell(e) {
        e.stopPropagation();
        if(this.context.showPlugins == "editcell") {
            this.context.setpopup(false);
        }
        setTimeout(() => {
            const state = this.context.showPlugins == "editcell" ? false:"editcell";
            this.context.setpopup(state);
            this.setState(prevState =>({
                ...prevState,
                showedit:!prevState.showedit,
            }))
        });
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.theme.index != this.props.theme.index){
            this.setState(prevState =>({
                ...prevState,
                config: {
                    ...prevState.config,
                    backgroundColor: nextProps.theme.bgcolor,
                    color: nextProps.theme.fontcolor,
                    fontSize:nextProps.theme.fontsize,
                }
            }))
        }
        if(this.state.showedit && this.context.showPlugins == "editcell") {
            this.setState(prevState =>({
                ...prevState,
                showedit:false,
            }))
        }
    }
    closecell() {
        this.context.setpopup(false);
        this.setState(prevState =>({
            ...prevState,
            showedit:false,
        }))
    }
    stoppropogation(e) {
        e.stopPropagation()
    }
    resetcell(){
        this.setState(prevState => ({
            ...prevState,
            config: {
                backgroundColor: this.props.theme.bgcolor,
                color: this.props.theme.fontcolor,
                fontSize:this.props.theme.fontsize,
                paddingLeft:15,
                paddingRight:15,
                paddingTop:10,
                paddingBottom:10,
                borderColor: this.props.theme.fontcolor,
                textAlign: "left"
            }
        }))
    }
    onChange(e) {
        const key = e.target.name;
        const val = e.target.value;
        this.setState((prevState,e) =>({
            ...prevState,
            config : {
                ...prevState.config,[key]:val
            }
        }))
    }
    render() {
        const styleconfig = {...this.state.config}
        styleconfig.fontSize+= "px";
        styleconfig.paddingBottom+= "px";
        styleconfig.paddingLeft+= "px";
        styleconfig.paddingRight+= "px";
        styleconfig.paddingTop+= "px";
        const pluginstate = this.context.showPlugins
        return (
            <td title="click to customize" className="pr customcell" style={styleconfig} onClick={this.editCell.bind(this)}>{this.props.text}
                {this.state.showedit && pluginstate == "editcell" && <div className="editdet abs" style={{fontSize:this.props.theme.fontsize}} onClick={this.stoppropogation.bind(this)}>
                    <label className="flex">
                        <span className="label">Background Color</span>
                        <input onChange={this.onChange.bind(this)} name="backgroundColor" value={this.state.config.backgroundColor} type="color"/>
                    </label>
                    <label className="flex">
                        <span className="label">Font Color</span>
                        <input onChange={this.onChange.bind(this)} name="color" value={this.state.config.color} type="color"/>
                    </label>
                    <label className="flex">
                        <span className="label">Font Size ({this.state.config.fontSize}px)</span>
                        <input onChange={this.onChange.bind(this)} name="fontSize" value={this.state.config.fontSize} type="range" min={8} max={30}/>
                    </label>
                    <label className="flex">
                        <span className="label">Padding Top ({this.state.config.paddingTop}px)</span>
                        <input name="paddingTop" onChange={this.onChange.bind(this)} value={this.state.config.paddingTop} type="range" min={0} max={100}/>
                    </label>
                    <label className="flex">
                        <span className="label">Padding Bottom ({this.state.config.paddingBottom}px)</span>
                        <input name="paddingBottom" onChange={this.onChange.bind(this)} value={this.state.config.paddingBottom} type="range" min={0} max={100}/>
                    </label>
                    <label className="flex">
                        <span className="label">Padding Left ({this.state.config.paddingLeft}px)</span>
                        <input name="paddingLeft" onChange={this.onChange.bind(this)} value={this.state.config.paddingLeft} type="range" min={0} max={100}/>
                    </label>
                    <label className="flex">
                        <span className="label">Padding Right ({this.state.config.paddingRight}px)</span>
                        <input name="paddingRight" onChange={this.onChange.bind(this)} value={this.state.config.paddingRight} type="range" min={0} max={100}/>
                    </label>

                    <label className="flex">
                        <span className="label">Text Align</span>
                        <select name="textAlign" value={this.state.config.textAlign} onChange={this.onChange.bind(this)}>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                            <option value="center">Center</option>
                        </select>
                    </label>
                    <div className="btns">
                        <button className="reset" onClick={this.resetcell.bind(this)}>Reset</button>
                        <button className="done" onClick={this.closecell.bind(this)}>Done</button>
                    </div>
                </div>}

            </td>
        );
    }
}
export default customcell;
