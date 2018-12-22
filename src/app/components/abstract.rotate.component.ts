import { OnInit, Input } from '@angular/core';

import { SimpleCarpoolingViewModel } from 'app/modelview/simple.carpooling.view.model';
import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';

export abstract class AbstractRotateComponent implements OnInit {
    @Input() isAller: boolean = true;
    
    flip: string = 'inactive';
    current : SimpleCarpoolingViewModel;
    
    ngOnInit() {
        this.current =  this.getCarpooling().getSimpleCarpooling(this.isAller);
    }
    
    toggleFlip() {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
        this.isAller = !this.isAller;
        this.current = this.getCarpooling().getSimpleCarpooling(this.isAller);
    }
    
    protected abstract getCarpooling(): CarpoolingViewModel;

}
