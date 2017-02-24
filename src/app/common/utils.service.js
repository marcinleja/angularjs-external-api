import {API_URL} from '../../environment.config'

export default function utils($location) {

	var utils = {
		apiUrl: () => {
			return API_URL;
		}
	};

	return utils;
}
