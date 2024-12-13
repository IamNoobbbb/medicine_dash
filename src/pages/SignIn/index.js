import { useContext, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import { Mycontext } from '../../App';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";



import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";



const SignIn = () => {

    const context = useContext(Mycontext)
    useEffect(() => {
        context.setishideheader(true);

    }, []);
    return (

       
            <section className="section signInPage">
              
                <div className="container">
                    <div className="box card p-3 shadow border-0">
                        <div className="text-center">
                            <img src={logo} alt="Logo" className="img-fluid" />
                        </div>
    
    
    
    
                        <form className="mt-3">
                            <h2 className="mb-3">Admin Sign In</h2>
                            <div className="form-group">
                                <TextField id="standard-basic" label="Email" required type="email" variant="standard" className="w-100" />
                            </div>
    
    
                            <div className="form-group">
                                <TextField id="standard-basic" label="Password" required type="password" variant="standard" className="w-100" />
                            </div>
    
                            <a className="border-effect cursor txt">Forgot Password?</a>
    
                            <div className="d-flex align-items-center mt-3 mb-3 ">
                            <Button className="btn btn-primary col btn-lg " variant="contained" color="success">Sign In</Button>
                            <Link to="/"><Button className="btn btn-outline-secondary col btn-lg ml-3" variant="contained" color="error" onClick={() => context.setishideheader(false)}>Cancel</Button></Link>
                            </div>
    
                            
    
                            <p>Not Registered?<Link to ="/signUp" className="border-effect">Sign Up</Link></p>
                            <h6 className="mt-3 text-center fw-bold">Or continue with Social Account</h6>
    
                            <ul className="list list-inline mt-3 mb-3 socials text-center ">
                                <li className="list-inline-item ">
                                    <Link to ="#"><Button><FcGoogle/></Button></Link>
                                </li>
    
                                
    
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
    )
}

export default SignIn;