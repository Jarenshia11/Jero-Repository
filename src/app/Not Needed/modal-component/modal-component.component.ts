import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from '../sevice/modal.service';

@Component({
  selector: 'my-modal',
  template: '<ng-content></ng-content>'
})
export class ModalComponentComponent implements OnInit,OnDestroy{
@Input() id:string;
private element:any;
  constructor(private modalService:ModalService,private el:ElementRef) { 
    this.element=el.nativeElement;
  }

  ngOnInit() {
    let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'my-modal') {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
}
  close() 
  {
    this.element.style.display = 'none';
    document.body.classList.remove('my-modal-open');
}
open(){
  this.element.style.display = 'block';
  document.body.classList.add('my-modal-open');
}
ngOnDestroy(): void {
  this.modalService.remove(this.id);
  this.element.remove();
}
  }


