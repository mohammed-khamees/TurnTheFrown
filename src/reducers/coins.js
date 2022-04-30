const intialState = {
	selectedCoins: [],
};

const coins = (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SELECTED_COINS':
			return { selectedCoins: [...payload] };

		case 'TOGGLE_COIN':
			return {
				selectedCoins:
					!state.selectedCoins.includes(payload) &&
					state.selectedCoins.length < 3
						? [...state.selectedCoins, payload]
						: state.selectedCoins.filter((item) => item != payload),
			};

		case 'CLEAR':
			return { selectedCoins: payload };

		default:
			return state;
	}
};

export default coins;

export const getSelectedCoins = (selectedCoins) => {
	return {
		type: 'SELECTED_COINS',
		payload: selectedCoins,
	};
};

export const toggleCoin = (coin) => {
	return {
		type: 'TOGGLE_COIN',
		payload: coin,
	};
};

export const clear = () => {
	return {
		type: 'CLEAR',
		payload: [],
	};
};
