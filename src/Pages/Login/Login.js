import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-20 md:my-20">
                <div className="mx-20 lg:mx-auto">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error base-bg-color text-white" type="submit" value="Login" />
                        </div>
                        <p className='label-text text-center pt-2'>New to Genius Car? <Link className='base-color font-semibold' to="/signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;