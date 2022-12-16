import React, { Component } from 'react';
import './form.css';
class Form extends Component{
     constructor(props){
      super(props);
       
      this.state= { FullName: " " ,
                    Email:" ",
                    Message:" "
                  }
     }
      handleChangeall = (event) => {
         this.setState({ [event.target.name] :  event.target.value  })
         console.log(event.target.value);
      }
      handleSubmit = (event) => {
        alert (`My first name is ${this.state.FullName}. 
             My email id is ${this.state.Email}
             My message is ${this.state.Message}`);

             console.log( JSON.stringify(this.state));
             event.preventDefault();
      }
      
    render(){
        return(
            <div>
              <form  onSubmit ={this.handleSubmit} className='frm'>
              <h2> Welcome To Contact form </h2>
            <br/>
                <label>FullName</label><br/>
                  <input type="text"name="FullName"value={this.state.FullName} onChange={this.handleChangeall} />
                   <br/><br/>

                   <label>Email</label><br/>
                   <input type="email"name="Email"value={this.state.Email} onChange={this.handleChangeall} />
                   
                   <br/><br/>

                   <label>Message</label><br/>
                   <textarea value={this.state.Message} name="Message"onChange={this.handleChangeall}/>
                   <br/>

                   <input type="submit" value= "send" />
              </form>
            </div>
        )
    }
}

export default Form;