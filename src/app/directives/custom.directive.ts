import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Використовуємо декоратор HostListener для реєстрації обробника подій
  @HostListener('click') onClick() {
    console.log('Element clicked:', this.el.nativeElement.textContent);
  }

  ngOnInit() {
    // внутрішній елемент для демонстрації
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('<Додатковий контент доданий в директиві>');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
  }
}