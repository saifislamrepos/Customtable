import React ,{Component} from 'react' ;
import './container.scss';
import Themeswitch from '../themeswitch'
import ProductList from '../productlist/'
import Header from '../header/header'
import Pagination from '../pagination'
import Countselect from '../resultcountselect'
import {selectcounter} from '../../config'
import Sortoptions from '../sorting'
class container extends React.Component {
    render() {
        return (
                <div className="container">
                    <Header/>
                    <Themeswitch/>
                    <div className="ib list-container">
                        <Sortoptions/>
                        <Countselect selectcounter= {selectcounter}/>
                        <ProductList/>
                        <Pagination/>
                    </div>
                </div>
        );
    }
}
export default container;
