const intialState = {
	selectedCoins: [],
	happyCoins: [],
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

				happyCoins: state.happyCoins,
			};

		case 'CLEAR':
			return { selectedCoins: [], happyCoins: payload };

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

export const clear = (happyCoins) => {
	return {
		type: 'CLEAR',
		payload: happyCoins,
	};
};
