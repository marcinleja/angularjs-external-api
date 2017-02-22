export default class AlertService {

	constructor(toastr) {
		this.toastr = toastr;
	}

	displaySuccessMessage(content, title) {
		this.toastr.success(content, title);
	}

	displayWarningMessage(content, title) {
		this.toastr.warning(content, title);
	}

	displayInfoMessage(content, title) {
		this.toastr.info(content, title);
	}

	displayErrorMessage(content, title) {
		this.toastr.error(content, title);
	}

}

AlertService.$inject = ['toastr'];
