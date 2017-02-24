export default class ContactsController {

	constructor(ContactsRepository) {
		this.ContactsRepository = ContactsRepository;

		this.contacts = null;
    //TODO implement paging
		this.pageSize = 10;
		this.offset = 0;

		this.loadContacts();
	}

	loadContacts() {
		this.ContactsRepository.findAll().then(
			(response) => {
				this.contacts = response.data;
			});
	}
}

ContactsController.$inject = ['ContactsRepository'];
