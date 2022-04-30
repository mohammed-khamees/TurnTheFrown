const intialState = {
	selectedCoins: [],
	happyCoins: [],
	noOfTurns: 0,
};

const coins = (state = intialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'TOGGLE_COIN':
			return {
				selectedCoins:
					!state.selectedCoins.includes(payload) &&
					state.selectedCoins.length < 3
						? [...state.selectedCoins, payload]
						: state.selectedCoins.filter((item) => item !== payload),

				happyCoins: state.happyCoins,
				noOfTurns: state.noOfTurns,
			};

		case 'CLEAR':
			return {
				selectedCoins: [],
				happyCoins: payload.happyCoins,
				noOfTurns: payload.noOfTurns,
			};

		case 'RETRY':
			return payload;

		default:
			return state;
	}
};

export default coins;

export const toggleCoin = (coin) => {
	return {
		type: 'TOGGLE_COIN',
		payload: coin,
	};
};

export const clear = (payload) => {
	return {
		type: 'CLEAR',
		payload: payload,
	};
};

export const retry = () => {
	return {
		type: 'RETRY',
		payload: {
			selectedCoins: [],
			happyCoins: [],
			noOfTurns: 0,
		},
	};
};
