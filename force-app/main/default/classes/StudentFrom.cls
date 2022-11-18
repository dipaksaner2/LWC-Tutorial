public with sharing class StudentFrom {
    public StudentFrom() {

    }
    @AuraEnabled(cacheable=true)
    public static List<contact> getStudentList(boolean flag){
        List<Contact> conList= [SELECT Id,lastname FROM contact limit 10];
        return conList;
    }
}