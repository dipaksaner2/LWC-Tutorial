//@RestResource(urlMapping='/sObject/*')
public with sharing class CurrentLayout {
    public CurrentLayout() {

    }
    static String restGet(String endPoint, String method, String sid) {
        Http h = new Http();
        HttpRequest hr = new HttpRequest();
        hr.setHeader('Authorization', 'Bearer ' + sid);
        hr.setTimeout(60000);
        hr.setEndpoint(endPoint);
        hr.setMethod(method);
        HttpResponse r = h.send(hr);
        return r.getBody();
    }
    static String toolingAPISOQL( String query) {
        String baseURL = URL.getSalesforceBaseUrl().toExternalForm();
        return restGet( baseURL +
    '/services/data/v41.0/tooling/query?q='+ (query.replace(' ', '+'))
    ,
    'GET', UserInfo.getSessionId() );
    } 

    @AuraEnabled
    public static String getLayoutNameForCurrentUserProfile(String obj ) {
        System.debug(obj);
        String body = toolingAPISOQL('select Layout.Name from ProfileLayout where ProfileId = \'' + UserInfo.getProfileId() + '\' AND  Layout.TableEnumOrId = \'' +obj+ '\'');
        System.debug(LoggingLevel.ERROR, '@@@ v: ' + body );
        String name = body.substringBetween('"Name":"', '"');
        System.debug(LoggingLevel.ERROR, '@@@ v: ' + name );
        return name;
    }
}