import React from 'react';
import { useFormik  } from 'formik';
import { signUpSchema } from './validate';

const initialValues= {
    name:" ",
    from: " ",
    to:" " ,
    subject:" ",
    message :" ",
};
const Email = () => {
    const { values , errors , touched , handleBlur , handleChange , handleSubmit } =
     useFormik({
          initialValues ,
          validationSchema:signUpSchema ,
           onSubmit : (values , action)  => {
                console.log(
                    " ~ file: Email.js ~line 17 ~ Email ~ values", 
                    values
                    );
                    action.resetForm();
           } ,
        }); 
     
     return (
          <div className='container'> 
            <h2  className='heading'>Mail Us</h2>
           
            <form onSubmit={handleSubmit} className='frm'>

                 <label>Name</label>
                 <input type="name"  name='name' id='name' placeholder='Name' values={values.name}
                  onChange={handleChange} onBlur={handleBlur} /> 
                  {errors.name && touched.name ? (
                    <p className='frm-error'>{errors.name}</p>
                  ):null}
                 <br/><br/>
                 
                 <label> From</label>
                 <input type="email" name='from' id='from'  values={values.from}
                  onChange={handleChange} onBlur={handleBlur} />
                  {errors.from && touched.from ? (
                    <p className='frm-error'>{errors.from}</p>
                  ):null}
                 <br/> <br/>

                 <label> To</label>
                 <input type="email"  name='to' id='to' values={values.to}
                  onChange={handleChange} onBlur={handleBlur}  />
                  {errors.to && touched.to ? (
                    <p className='frm-error'>{errors.to}</p>
                  ):null}
                 <br/> <br/>

                 <label> Subject</label>
                 <input type="text"  name='subject' id='subject' values={values.subject}
                  onChange={handleChange} onBlur={handleBlur}  />
                  {errors.subject && touched.subject ? (
                    <p className='frm-error'>{errors.subject}</p>
                  ):null}
                 <br/> <br/>

                 <label>Message</label>
                 <textarea name='message'  id='message' values={values.message}
                  onChange={handleChange} onBlur={handleBlur}  />
                  {errors.message && touched.message ? (
                    <p className='frm-error '>{errors.message}</p>
                  ):null}
                 <br/> <br/>

                 <button type="submit">sendEmail</button>
            </form>
        
            </div>
     )
};

export default Email;