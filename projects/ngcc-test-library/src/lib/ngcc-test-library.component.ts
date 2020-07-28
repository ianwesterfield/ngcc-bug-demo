import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngcc-test-library',
  template: `
    <p>
      ngcc-test-library works!
    </p>
  `,
  styles: []
})
export class NgccTestLibraryComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
