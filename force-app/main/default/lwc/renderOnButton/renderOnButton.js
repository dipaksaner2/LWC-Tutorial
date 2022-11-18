import { LightningElement, track } from 'lwc';

export default class RenderOnButton extends LightningElement {
    buttonClassic = false;
    buttonLightning = true;

    handleClickClassic(){
        this.buttonClassic=true;
        this.buttonLightning=false;
    }
    handleClickLighting(){
        this.buttonClassic=false;
        this.buttonLightning=true;
    }
}