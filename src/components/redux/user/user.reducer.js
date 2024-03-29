import { userActionsTypes } from "./user.types";

const initial_state = {
	currentUser: null,
};
const userReducer = (state = initial_state, action) => {
	switch (action.type) {
		case userActionsTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
