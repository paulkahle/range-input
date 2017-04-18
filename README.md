# Suprematism Range Input

An Angular 2 range input component.


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-range-input
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-clearable-input/)
- Run the example locally with `npm run example`


## Component

#### `supre-range-input`
A simple range input component that supports entry of two values and the selection of units as either total or percent.  This component implements ControlValueAccessor and can be used with the Angular Form API.

#### Options
- `value:{unit: Unit ('total'|'percent'), min: number, max: number}`
- `minPlaceholder: string`: Placeholder text for minimum.
- `maxPlaceholder: string`: Placeholder text for maximum.
- `showUnits: boolean`: If false hides the unit toggle buttons.

#### Events
- `valueChange`: Event when any change is made to the input.

#### Example
```
<supre-range-input
  formControlName="audienceSize"
  minPlaceholder="Enter Min"
  maxPlaceholder="Enter Max">
</supre-range-input>
```
