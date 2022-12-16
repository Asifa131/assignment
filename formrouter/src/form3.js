import React, { Component } from 'react';
import './form.css';
class Form extends Component{
    render(){
        return(
            <div>
              <form className='frm'>
              <h2> Welcome To service form </h2>
            <br/>
                <label>FullName</label><br/>
                  <input type="text"/>
                   <br/><br/>

                   <label>Parentage</label><br/>
                  <input type="text"/>
                   <br/><br/>

                   <label>Address</label><br/>
                  <textarea/>
                   <br/><br/>

                   <label>Email</label><br/>
                  <input type="email"/>
                   <br/><br/>

                   <label>Phone</label><br/>
                   <input type="number"/>
                   <br/><br/>

                   <label>Gender</label><br/>
                   <input type="radio"name="Gender"value="male"/>Male
                   <input type="radio"name="Gender"value="female"/>Female
                   <input type="radio"name="Gender"value="other"/>Other
                   <br/><br/>

                   <label>Message</label><br/>
                   <textarea/>
                   <br/><br/>

                   <input type="submit" value= "submit" />
              </form>
            </div>
        )
    }
}

export default Form;