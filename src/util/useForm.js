import { useState, useEffect } from 'react';

export const useForm = (initialState, validate, callback) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});

	const handleChange = (event, result) => {
		const { name, value } = result || event.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setErrors(validate(values));
		callback()
	};

	return {
		handleSubmit,
		handleChange,
		values,
		errors
	};
};
