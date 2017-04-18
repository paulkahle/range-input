import { Component, OnInit, Input, Output, forwardRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type Unit = 'percent' | 'total';

/**
 * RangeInputComponent
 *
 * Range control with units selection.
 * Implements ControlValueAccessor for compatibility with Angular Forms API
 */
@Component({
  selector: 'supre-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeInputComponent),
      multi: true
    }
  ]
})
export class RangeInputComponent implements ControlValueAccessor {

  @Input() public value: {min: number, max: number, units: Unit} = {min : null, max : null, units : 'total'};
  @Input() public minPlaceholder  = '';
  @Input() public maxPlaceholder = '';
  @Input() public showUnits = true;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  private propagateChange = (_: any) => { };

  constructor() { }

  handleKeyPress(event){
    console.log("keypress", event);
    if (event.which < 48 || event.which > 57)
    {
        event.preventDefault();
    }
  }

  /**
   * setMin
   * Updates the min value
   *
   */
  public setMin(min) {
    this.value = Object.assign({}, this.value, {min});
    this.handleChange();
  }

  /**
   * setMax
   * Updates the max value
   *
   */
  public setMax(max) {
    this.value = Object.assign({}, this.value, {max});
    this.handleChange();
  }

  /**
   * setUnits
   * Updates the selected units
   *
   */
  public setUnits(units: Unit) {
    this.value = Object.assign({}, this.value, {units});
    this.handleChange();
  }

  private handleChange() {
    this.valueChange.emit(this.value);
    this.propagateChange(this.value);
  }

  /**
   * ControlValueAccessor Implementation
   * for Angular Forms API compatibility
   *
   */

  public writeValue(value: any) {
    if (value) {
      this.value = value;
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  // not used, used for touch input
  public registerOnTouched() { }

}
