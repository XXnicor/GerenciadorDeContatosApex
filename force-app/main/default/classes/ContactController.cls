public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsByAccountsID(Id accountId) {
        if (accountId == null) {
            throw new IllegalArgumentException('AccountId cannot be null');
        }
        return [SELECT Id, FirstName, Email, Phone, Title FROM Contact WHERE AccountId = :accountId];
    }
}