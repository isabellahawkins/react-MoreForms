import React from 'react'

const FormList = props => {
    return (
        <table className="table table-striped">
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                </tr>
                {
                    props.users.map( (user, i) => 
                        <tr key={i}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.confirmPassword}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default FormList;