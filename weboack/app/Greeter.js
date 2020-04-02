import React,{Component} from 'react';
import config from './config.json';
// var config = require('./config.json');

/* module.exports = function() {
    var greet = document.createElement('div');
    // greet.textContent = 'Hi there and greetings!';
    greet.textContent = config.greetText;
    return greet;
} */

class Greeter extends Component{
    render(){
        return (

            <div>
                
                {config.greetText}
            
            </div>
        );
    }
}
export default Greeter