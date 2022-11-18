import { LightningElement, track,wire } from 'lwc';
import getStudentList from '@salesforce/apex/StudentFrom.getStudentList';
export default class studentForm extends LightningElement {
    
    @track conList;
    @track showContact=false;

    /* //This 1st Method
    @track conList;
    @wire (getStudentList) conList;
    */

   
   // This is 2nd Method
    @wire(getStudentList,{flag : '$showContact'}) 
    contactList({data,error}) {
        if(data){
            this.conList=data;
        }
        else if(error) {
            console.log('error ->'+error);
        }
    }
    handleChange(event){
        this.showContact =event.target.checked;
    }

    /*
    //without wier apex call
    getStudentLists() {
        getStudentList().then(result=>{
            this.conList=result;
        })
        .catch(error=>{
            console.log('error #-->'+error);
        })

   }
   */

}