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
          if(
            !(
              lastAtPos < lastDotPos && 
              lastAtPos > 0 &&
              fields["email"].indexOf("@@") ==
              lastDotPos > 2 &&
              fields["email"].length - lastDotPos > 2
            )
          ) {
            formIsValid =false;
            errors["email"] = "Email is not valid";
          }
       }
       this.setState({errors:errors});
       return formIsValid;
      }
      contactSubmit(e) {
        e.preventDefault();
        if ( this.handleValidation()){
          alert("Form submitted");
        } else {
          alert("Form has errors");
        }
      }
      handleChange(field , e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
      }
  render(){
        return(
            <div>
              <form name="signupform" className='frm' onSubmit={this.contactSubmit.bind(this)} >
              <h2> Welcome To signup form </h2>

                 
                  <input ref="name" type="text" size="30" placeholder="Name" 
                     onChange={this.handleChange.bind(this,"name")}
                     value={this.state.fields["name"]} />
                   <br/> <br/>

                   <input ref="email" type="text" size="30" placeholder="Email" 
                     onChange={this.handleChange.bind(this,"email")}
                     value={this.state.fields["email"]} />
                  <br/> <br/>

                  <input ref="phone" type="text" size="30" placeholder="Phone" 
                     onChange={this.handleChange.bind(this,"phone")}
                     value={this.state.fields["phone"]} />
                   <br/> <br/>

                   <input ref="password" type="text" size="30" placeholder="Password" 
                     onChange={this.handleChange.bind(this,"password")}
                     value={this.state.fields["password"]} />
                   <br/> <br/>

                   <input ref="confirmpassword" type="text" size="30" placeholder="Confirm Password" 
                     onChange={this.handleChange.bind(this,"Confirmpassword")}
                     value={this.state.fields["confirmpassword"]} />
                   <br/><br/>

                   <button  onClick={()=>alert("you have logged in")}>Submit</button> 
                   
              </form>
            </div>
        )
    }
}

export default Form;