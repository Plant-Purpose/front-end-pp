export const validateRegistration = values => {
    let errors = {}

    if (!values.full_name) {
        errors.full_name = 'Please enter your full name'
    }

    if (!values.email) {
        errors.email = 'Please enter an email address'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Please enter a valid email addresss'
    }

    if (!values.password) {
        errors.password = 'Please enter a password'
    } else if (values.password.length < 7) {
        errors.password = 'Password must contain at least 7 characters'
    }

    return errors
}