  import React, { Component } from 'react';
import './form.css';
class Form extends Component{
       constructor(props){
       super(props);

       this.state={
                fields:{},
                errors:{} ,
       };
      }
     
      handleValidation(){
         let fields = this.state.fields;
         let errors  = {};
         let formIsValid =true;
          

         //Name
         if (!fields["name"]){
            formIsValid =false;
            errors["name"] ="cannot be empty";
         }

         if(typeof fields["name"] !== "undefined"){
           if (!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "only letters";
           }
         }


         //Email
         if (!fields["email"]){
          formIsValid =false;
          errors["email"] ="cannot be empty";
       }

       if(typeof fields["email"] !== "undefined"){
         let lastAtPos =fields["email"].lastIndexOf("@");
         let lastDotPos =fields["email"].lastIndexOf(".");
       }
      }
  render(){
        return(
            <div>
              <form className='frm'>
              <h2> Welcome To signup form </h2>
            <br/>
                <label>FullName</label><br/>
                  <input type="text"name="FullName"/>
                   <br/><br/>

                   <label>Email</label><br/>
                  <input type="email"name="email"/>
                   <br/><br/>

                   <label>Phone</label><br/>
                   <input type="number"/>
                   <br/><br/>

                   <label>Password</label><br/>
                   <input type="password"name="password"/>
                   <br/><br/>

                   <label>Confirm Password</label><br/>
                   <input type="password"name="password"/>
                   <br/><br/>

                   <button  onClick={()=>alert("you have logged in")}>Submit</button> 
              </form>
            </div>
        )
    }
}

export default Form;