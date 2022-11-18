import { LightningElement,api,wire,track } from 'lwc';
import CURRENTUSERID from '@salesforce/user/Id';
import getLayoutApex from '@salesforce/apex/CurrentLayout.getLayoutNameForCurrentUserProfile';
export default class CurrentLayoutUser extends LightningElement {

    @track error;
    @track layoutName;
    userId = CURRENTUSERID;
 
    @api recordId;
    @api objectApiName;

    //connect to apex
    @wire(getLayoutApex,{obj:'$objectApiName'})
    layoutData({data,error}) {
        if(data){
            this.layoutName=data;
        }
        else if(error) {
            console.log('error ->'+error);
        }
    }

    // connectedCallback() {
    //     console.log('object api-->', this.objectApiName);
    //     getLayoutApex({
    //         obj: this.objectApiName
    //     }).then(data =>{
    //         console.log('result-->', data);
    //     }).catch(error => {

    //     })
    // }
}