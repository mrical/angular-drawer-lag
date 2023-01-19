import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidenav';
  selectedIndex:number=1;
  opened=true;
  constructor(private _formBuilder: FormBuilder) { }
  reminderTypeList=false;
  stockRelated=false;
  hideRequiredControl = new FormControl(false);
}
