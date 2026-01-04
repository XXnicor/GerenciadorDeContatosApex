import { LightningElement, api, wire } from 'lwc';
import getContactsByAccountsID from '@salesforce/apex/ContactController.getContactsByAccountsID';

export default class contactTableRenamedNew extends LightningElement {
    @api recordId;
    data = [];
    error;
    columns = [
        { label: 'First Name', fieldName: 'FirstName', type: 'text' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Job Title', fieldName: 'Title', type: 'text' }
    ];

    @wire(getContactsByAccountsID, { accountId: '$recordId' })
    wiredContacts({ error, data }) {
        if (data) {
            this.data = data;
            this.error = undefined;
        } else if (error) {
            this.error = error.body.message;
            console.error('Error retrieving contacts: ', error);
        }
    }
}