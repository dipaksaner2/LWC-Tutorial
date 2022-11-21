public with sharing class RenderOnButtonController {
    @AuraEnabled
    public static String createAccount(String name, Integer mobileno, Integer accountno){
        List<Account>  acclist = new List<Account>();
        Account acc = new Account();
        acc.Name = name;
        acc.Phone = String.valueOf(mobileno);
        acc.NumberOfEmployees = accountno;
        acclist.add(acc);
        insert acclist;
        return 'created';
    }
}