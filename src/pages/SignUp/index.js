import { useContext, useEffect } from "react";
import { Mycontext } from '../../App';
import logo from '../../assets/images/logo.png';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {

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
                        <h2 className="mb-3">Admin Sign Up</h2>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField label="Name" required type="text" variant="standard" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField label="Phone No." required type="text" variant="standard" className="w-100" />
                                </div>

                            </div>
                        </div>

                        <div className="form-group">
                            <TextField id="standard-basic" label="Email" required type="email" variant="standard" className="w-100" />
                        </div>


                        <div className="form-group">
                            <TextField id="standard-basic" label="Password" required type="password" variant="standard" className="w-100" />
                        </div>

                        <a className="border-effect cursor txt">Forgot Password?</a>

                        <div className="d-flex align-items-center mt-3 mb-3 ">
                            <Button className="btn btn-primary col btn-lg " variant="contained" color="success">Sign Up</Button>
                            <Link to="/"><Button className="btn btn-outline-secondary col btn-lg ml-3" variant="outlined" onClick={() => context.setishideheader(false)}>Cancel</Button></Link>
                        </div>



                        <p>Already Registered?<Link to="/signIn" className="border-effect">Sign In</Link></p>
                        <h6 className="mt-3 text-center fw-bold">Or continue with Social Account</h6>

                        <ul className="list list-inline mt-3 mb-3 socials text-center ">
                            <li className="list-inline-item ">
                                <Link to="#"><Button><FcGoogle /></Button></Link>
                            </li>



                        </ul>
                    </form>
                </div>
            </div>
        </section>
    )

}
export default SignUp;