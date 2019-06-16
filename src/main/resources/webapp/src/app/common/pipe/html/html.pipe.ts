import { style } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'html'
})
export class HtmlPipe implements PipeTransform {

  transform(style) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }

  constructor (private sanitizer: DomSanitizer) {

  }

}
