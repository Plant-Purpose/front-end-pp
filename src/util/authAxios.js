import axios from 'axios';

export const authAxios = () => {
	return axios.create({
		headers: {
			authorization: localStorage.getItem('token')
		}
	});
};
