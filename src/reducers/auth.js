const intialState = {
	username: '',
	userId: '',
	token: '',
};

const userInfo = JSON.parse(localStorage.getItem('userInfo'));

const signIn = (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'LOGIN':
			localStorage.setItem('userInfo', JSON.stringify(payload));
			const { username, userId, token } = payload;
			return { username, userId, token };

		case 'LOGOUT':
			localStorage.clear();
			return payload;

		default:
			return {
				username: userInfo ? userInfo.username : '',
				userId: userInfo ? userInfo.userId : '',
				token: userInfo ? userInfo.token : '',
			};
	}
};

export default signIn;

export const login = (user) => {
	return {
		type: 'LOGIN',
		payload: user,
	};
};

export const logout = () => {
	return {
		type: 'LOGOUT',
		payload: { username: '', userId: '', token: '' },
	};
};
