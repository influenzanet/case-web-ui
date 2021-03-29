# Changelog

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
