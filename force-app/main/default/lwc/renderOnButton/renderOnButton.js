import { LightningElement, track } from 'lwc';
import submitForm from '@salesforce/apex/RenderOnButtonController.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RenderOnButton extends LightningElement {
    buttonClassic = true;
    buttonLightning = false;
    fullname;
    mobileNo;
    accountNo;

    //Classic Button
    handleClickClassic(){
        this.buttonClassic=true;
        this.buttonLightning=false;
    }
    //Lighting Button
    handleClickLighting(){
        this.buttonClassic=false;
        this.buttonLightning=true;
    }
    /* Input Form */

    //Input FullName
    handleFullNameChange(event){
        this.fullname = event.target.value;
    }
    //Mobile No
    handleMobileNoChange(event){
        this.mobileNo = event.target.value;
    } 
    // Account No
    handleAccountNoChange(event){
        this.accountNo = event.target.value;
    } 
    /* Input End */
    // Show toast Message
    showToast() {
        const event = new ShowToastEvent({
            title: 'Successfully',
            message: 'Submit Form',
            variant: 'success'
        });
        this.dispatchEvent(event);
    }

    /* Submit Button On Classic To Account */

    handleClickAccount(){
        window.alert("Name : "+this.fullname+"  Mobile NO : "+this.mobileNo+ "  Account No : "+this.accountNo );
        submitForm({
            name :  this.fullname,
            mobileno : this.mobileNo,
            accountno : this.accountNo
        }).then(data =>{
            console.log('result-->', data);
            this.showToast();
            }).catch(error => {
                console.log(error);
          })
    }
    handleRestAccount(){
        this.fullname = '';
        this.mobileNo = '';
        this.accountNo = '';
    }
    
    /* Submit Button On Classic To Account */
    
}