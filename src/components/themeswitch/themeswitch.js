import React ,{Component} from 'react' ;
import './themeswitch.scss';
import {themes} from '../../config'
class themeswitch extends React.Component {
    constructor(props) {
       super(props);
       this.state= {
           themes:[],
           addtheme:false,
           newconfig:{
            bgcolor:"",
            fontcolor:"",
            label:"",
            fontsize:14,
            index:1
        
           }
       }
    }
    componentDidMount(){
        this.setState({
            themes:themes
        })
        this.setdefaulttheme(themes[1])
    }
    showaddtheme() {
        this.setState(prevState =>({
            ...prevState,
            addtheme:!prevState.addtheme
        }))
    }
    onChange(e) {
        const value = e.target.value;
        const key = e.target.name;
        this.setState(prevState => ({
            ...prevState,
            newconfig: {
                ...prevState.newconfig,
                [key]:value
            }
        }))
    }
    setdefaulttheme(theme) {
        document.documentElement.style.setProperty("--theme-color", theme.bgcolor);
        document.documentElement.style.setProperty("--font-color", theme.fontcolor);
        this.props.setselectedtheme(theme);
    }
    stoppropogation(e) {
        e.stopPropagation()
    }
    addnewtheme() {
        const newtheme = {...this.state.newconfig};
        newtheme.index = this.state.themes.length+1;
        newtheme.fontsize +="px" 
        this.setState(prevState => ({
            ...prevState,
            themes:[...prevState.themes,newtheme],
            addtheme:false

        }))

    }
    render() {
        return (
            <div className="themeswitch">
                <p className="ib text">Select Theme</p>
                {this.state.themes.map((theme,i)=>(
                    <button style={{"color":theme.fontcolor,"backgroundColor":theme.bgcolor}} key={i} className={"theme-2 " +(this.props.selectedtheme.index == theme.index ? " selected":"")} onClick={this.setdefaulttheme.bind(this,theme)}>{theme.label}</button>
                ))}
                <div className="addtheme ib pr">
                <button onClick={this.showaddtheme.bind(this)}>Add new Theme</button>
                {this.state.addtheme &&
                <div className="editdet abs" onClick={this.stoppropogation.bind(this)}>
                    <label className="flex">
                        <span className="label">Label</span>
                        <input onChange={this.onChange.bind(this)} value={this.state.newconfig.label} name="label"  type="text"/>
                    </label>
                    <label className="flex">
                        <span className="label">Background Color</span>
                        <input onChange={this.onChange.bind(this)} value={this.state.newconfig.bgcolor} name="bgcolor" type="color"/>
                    </label>
                    <label className="flex">
                        <span className="label">Font Color</span>
                        <input onChange={this.onChange.bind(this)} value={this.state.newconfig.fontcolor} name="fontcolor"  type="color"/>
                    </label>
                    <div className="btns">
                        <button className="done" onClick={this.addnewtheme.bind(this)}>Done</button>
                    </div>
                </div>
                }
                </div>
            </div>
        );
    }
}
export default themeswitch;
