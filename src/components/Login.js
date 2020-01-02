import React, {useState} from 'react'


const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit =e => {
        e.preventDefault();
        axiosAuth()
        .post('/api/login', user)
        .then(response => {
            localStorage.setItem('token', response.data.token)
        })
        .catch(error => {
            console.log(error)
        })
    };

        return 


}

export default Login;