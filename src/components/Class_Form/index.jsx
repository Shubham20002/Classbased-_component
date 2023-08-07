import {Component} from 'react';

class Form extends Component{
 
    constructor(){
        super();
        this.state={
            heading:"shubham"
        }
    }

     change= () => (
        this.setState({
            heading:"shubham patil"
        })
     )

    render(){
       return (
        <>
        <h1 >class Component by {this.state.heading}</h1>
        <button onClick={this.change}>change heading</button>
       <h2>second heading from class component</h2>
        
        </>
       
       )
    }
}

export default Form;