// we watn to create a new component and it should produce some html


import {React} from 'react';
import { ReactDOM } from 'react-dom';

const App = () =>{
    return <div>hi</div>;
}
//take this components generated html and put it on the page(in dom)
ReactDOM.render(<App/>, document.querySelector('.container'))


