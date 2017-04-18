import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'supre-root',
  templateUrl: './app.component.html',
  providers: [FormBuilder]
})
export class AppComponent {

  public range1: any = {min: null, max: null, units: 'total'};
  public range2: any = {min: null, max: null, units: 'total'};
  private form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
      this.form = formBuilder.group({
        range1 : this.range1,
        range2 : this.range2
      });

      this.form.valueChanges.subscribe(
        data => {
          console.log("data", data);
          this.range1 = data.range1;
          this.range2 = data.range2;
        }
      );
  }
}
