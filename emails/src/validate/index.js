import * as Yup from 'yup';

export const signUpSchema = Yup.object( {
    name:Yup.string().required("Please enter your name"),
    from:Yup.string().email().required("Please enter your email id") ,
    to:Yup.string().email().required("Please enter the email") ,
    subject:Yup.string().required("enter subject"),
    message:Yup.string().required("Please enter the message")
}
);