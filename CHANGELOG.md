# Changelog

## [1.1.16]

### Added

- New stories for single choice survey component.

### Changed

- `SingleChoiceGroup` and `MultipleChoiceGroup` survey components display error message if there are no items (instead of crashing).

## [1.1.15]

### Added

- New stories to locally test and preview components.

### Changed

- `LoadingPlaceholder` widget supports "white" background color.
- `LoadingPlaceholder` widget allows configuring width of the spinner's line.
- Updated project dependencies

## [1.1.14]

### Changed

- Add `controlList='nodownload'` option to VideoPlayer to prevent download option appearing in video menu. (Videos aretypically not meant for downloading locally.)
- Survey's numeric slider component is using the "description" attribute, as a placeholder when no answer is selected yet.
- NumberInput component accepts new style attribute (e.g., `{ key: 'inputMaxWidth': '80px'}`) to control max width of the input field. Ignored if smaller than min width (50px). If not defined, component won't have max width, thus will try to fill up remaining space.

## [1.1.13]

### Added

- Multiple choice question can include numeric input fields as well. For this, inside the options array, add an item with `role: 'numberInput'`. Component properties like min, max, step can be applied.

### Changed

- Change styling of Text and Number input components. Label part should only expand as far as its content requires. Number input has max width currently.


## [1.1.12]

### Added

- Markdown component for survey questions: Inside a survey item, new component type with `role: 'markdown'` is available. This can be used either directly inside the route (e.g., as a top or bottom component below the response group) or inside a response group.
- Stories for more survey components: TextDisplay/Markdowns and Multiple choice group.

### Changed

- Multiple Choice survey component can render formatted text component between the options. For this, use the `role: 'text'` for the component insder the multiple choice group. Formatting is applied throug the `style` list's "className" entry.
