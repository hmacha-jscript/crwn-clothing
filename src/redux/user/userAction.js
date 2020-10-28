import { userTypes } from "./userTypes";

export const setCurrentUserAction = (user) => {
	return {
		type: userTypes.SET_CURRENT_USER,
		payload: user,
	};
};
