import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { 

    //todo: Dessa forma tb funciona porém não é recomendada
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow'
    // this._elementRef.nativeElement.style.width = '30%'
    // this._elementRef.nativeElement.style.texAlign = 'center'
    // this._elementRef.nativeElement.style.marginLeft = 'auto'
    // this._elementRef.nativeElement.style.marginRight = 'auto'

    //todo: tem que usar o renderer
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'pink')
  }

}
