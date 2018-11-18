import { Directive, HostListener } from '@angular/core';
import {ElementRef,Renderer2,Input} from '@angular/core';

@Directive({
  selector: '[appMessage]'
})
export class MessageDirective {

  constructor(private ele_ref:ElementRef,private renderer:Renderer2) { 
    renderer.setStyle(this.ele_ref.nativeElement,'cursor','pointer');
  }
@Input('appMessage') message;
@HostListener('click') onclick()
{
  this.ele_ref.nativeElement.innerHTML=this.message;
  this.renderer.setStyle(this.ele_ref.nativeElement,'color','red');
}
}
