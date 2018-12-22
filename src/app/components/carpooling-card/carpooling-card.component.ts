import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialog } from '@angular/material';

import { rotation } from 'app/animation/rotation.animation'
import { AutoAcceptanceCpDialogComponent } from 'app/dialogboxes/auto-acceptance-cp-dialog/auto-acceptance-cp-dialog.component';
import { DetailDialogComponent } from 'app/dialogboxes/detail-dialog/detail-dialog.component';
import { MapDialogComponent } from 'app/dialogboxes/map-dialog/map-dialog.component';

import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';
import { SimpleCarpoolingViewModel } from 'app/modelview/simple.carpooling.view.model';
import { CarpoolingEvent } from 'app/event/carpooling.event';

import { CarpoolingService } from 'app/service/carpooling.service';
import { CarpoolingUtils } from 'app/utils/carpooling.utils';

import { AbstractRotateComponent } from 'app/components-shared/abstract.rotate.component';


@Component({
  selector: 'carpooling-card',
  templateUrl: './carpooling-card.component.html',
  styleUrls: ['./carpooling-card.component.css'],
  animations: [ rotation ]
})
export class CarpoolingCardComponent extends AbstractRotateComponent {
    @Input() carpooling : CarpoolingViewModel;
    @Input() selections: CarpoolingViewModel[];
    
    @Output() notifySelection = new EventEmitter<CarpoolingEvent>();
    
    constructor(public _dialog: MatDialog, private _carpoolingService: CarpoolingService) {
        super();
    }

    onNotifySelection(event:MatCheckboxChange): void {
        this.current.checked = event.checked;
        if(event.checked) {
            if(this.current.acceptationAuto) {
                this.openAutoAcceptationDialog();
            } else {
                this.notifySelection.emit(new CarpoolingEvent(this.carpooling, this.isAller));
            }
        } else {
            this.notifySelection.emit(new CarpoolingEvent(this.carpooling, this.isAller));
        }
    }
    
    onShowMap(): void {
        this._dialog.open(MapDialogComponent, {
           width: '500px',
            data: { carpooling: this.carpooling },
        });
    }
    
    openAutoAcceptationDialog(): void {
        const dialogRef = this._dialog.open(AutoAcceptanceCpDialogComponent, {
            width: '600px',
        });
        this.treatDialogReturn(dialogRef);
    }
    
    onShowDetail(): void {
        const dialogRef = this._dialog.open(DetailDialogComponent, {
           width: '700px',
            data: this.carpooling,
        });
        this.treatDialogReturn(dialogRef);
    }
    
    disabledAction(): boolean {
        return (this.countSelections() === 4 || this.existAcceptionAutoSurSelections())
                    && !this.current.checked
    }
    
    protected getCarpooling() : CarpoolingViewModel {
        return this.carpooling;
    }
    
    private treatDialogReturn(dialogRef: any) : void {
        dialogRef.afterClosed().subscribe(response => {
            this.current.checked = response;
            this.notifySelection.emit(new CarpoolingEvent(this.carpooling, this.isAller));
        });
    }
    
    private countSelections(): number {
        return CarpoolingUtils.countSelections(this.selections, this.isAller);
    }
    
     private existAcceptionAutoSurSelections(): boolean {
         if(this.isAller) {
            return CarpoolingUtils.existAcceptionAutoSurSelectionsAller(this.selections);
        } 
        return CarpoolingUtils.existAcceptionAutoSurSelectionsRetour(this.selections);
    }
    
}
