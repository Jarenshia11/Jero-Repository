import { Directive, Input } from '@angular/core';
import {TemplateRef,ViewContainerRef} from '@angular/core';
@Directive({
  selector: '[appRepeat]',
  exportAs:'changeText,repeatElement'
})
export class RepeatDirective {

  constructor(private template_Ref:TemplateRef<any>,private _viewContainer:ViewContainerRef) { }
appRepeat(count:number)
{
  for(var i=0;i<count;i++)
  {
this._viewContainer.createEmbeddedView(this.template_Ref);
  }
}
appChange(count:number)
{
  for(var i=0;i<count;i++)
  document.getElementsByTagName('p').item(i).innerHTML="I am changed";
}
}
