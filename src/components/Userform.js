import React, { useState } from 'react';

const Userform = props => {
    const [state,setState] = useState({
        firstName: "",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        submitted: false
    });
    const createUser = e => {
        e.preventDefault();
        props.addUser(state);
        setState({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
            submitted: false
        });
    }
    const changefirstName = e => {
        setState({...state, firstName: e.target.value});
    }
    const changelastName = e => {
        setState({...state, lastName: e.target.value});
    }
    const changeemail = e => {
        setState({...state, email: e.target.value});
    }
    const changepassword = e => {
        setState({...state, password: e.target.value});
    }
    const changeconfirmPassword = e => {
        setState({...state, confirmPassword: e.target.value});
    }

    // const onSubmitHandler = event => {
    //     event.preventDefault();
    //     setState({
    //         ...state,
    //         submitted: true
    //     })
    // }

    let message1;
    if(state.firstName.length < 2){
        message1=<h3 class="message">First Name must be at least 2 characters.</h3>;
    }
    const onSubmitHandler = event => {
        event.preventDefault();
    }
    

    let message2;
    if(state.lastName.length < 2){
        message2=<h3 class="message">Last Name must be at least 2 characters.</h3>;
    }

    let message3;
    if(state.email.length < 5){
        message3=<h3 class="message">Email must be at least 5 characters.</h3>;
    }

    let message4;
    if(state.password.length < 8){
        message4=<h3 class="message">Password must be at least 8 characters.</h3>;
    }

    let message5;
    if(state.confirmPassword != state.password){
        message5=<h3 class="message">Passwords must match</h3>;
    }


    return (
        <>
            <form onSubmit={createUser, onSubmitHandler}>
                <div className="form-group">
                    <label> First Name: </label>
                    <input 
                        type="text"
                        className="form-control"
                        onChange={changefirstName}
                        value={state.firstName}
                    />
                    <p>{message1}</p>
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input 
                        type="text"
                        className="form-control"
                        onChange={changelastName}
                        value={state.lastName}
                    />
                    <p>{message2}</p>
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input 
                        type="text"
                        className="form-control"
                        onChange={changeemail}
                        value={state.email}
                    />
                    <p>{message3}</p>
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input 
                        type="password"
                        className="form-control"
                        onChange={changepassword}
                        value={state.password}
                    />
                    <p>{message4}</p>
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input 
                        type="password"
                        className="form-control"
                        onChange={changeconfirmPassword}
                        value={state.confirmPassword}
                    />
                    <p>{message5}</p>
                </div>
                <input type="submit" className="btn btn-outline btn-outline-primary "/>
            </form>
        </>
    );
}

export default Userform;