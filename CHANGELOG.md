# Changelog

## [1.3.0] - 2021-07-08

### Changed:

- `SurveySingleItemView`: Apply same style to debug key as title even if there is no title component.
- Add Italian date locale for datepickers.
- Updating dependencies: material-ui, react-date-picker

## [1.2.2 (1)] - 2021-05-28

Needed to downgrade rollup and plugin versions. When creating the bundle and deploying, react-markdown was not working anymore.

## [1.2.0] - 2021-05-28

### Changed

- Updated react-markdown version to 6.0.0
- Dialog header fixed always
- `SurveySingleItemView` and `SurveyPageView` are now exported, so that they can be used, e.g., by the editor.
- Add a new callback to SurveyView: `onResponsesChanged`. Optional method that will be called every time the responses changed.
- Option to display item and response option keys in surveys, to be used by the editor when testing. Option keys are currently only available for single and multiple choice questions.

### BREAKING-CHANGES

Due to the updates related to react-markdown version, the following markdown custom syntax need to be changed.

**Map Chart**

Previously:
~~~
[mapchart:/charts/ggd-map-nl.json]:  /charts/20210126_0801_kaart_data.json
~~~

New syntax:

~~~
<mapchart
  map-url="/charts/ggd-map-nl.json"
  data-url="/charts/20210126_0801_kaart_data.json"
/>
~~~

**Line and Scatter Chart**

Previously:
~~~
[line-and-scatter-chart]: /charts/20210126_0801_percentage_klachten_over_tijd.json
~~~

New syntax:
~~~
<lineandscatterchart
  data-url="/charts/20210126_0801_percentage_klachten_over_tijd.json"
/>
~~~

**Page info for date line**

Previously:
~~~
`Deze pagina is voor het laatst aangepast op 02.feb.2021 16:00.`
~~~

New syntax:
~~~
<pageinfo>
Deze pagina is voor het laatst aangepast op 02.feb.2021 16:00.
</pageinfo>
~~~

The old syntax will be rendered as the default code block.


## [1.1.18]

### Added

- `VideoPlayer` accepts `tracks` array (optional property), to define caption/subtitles.
- New storybook example for `VideoPlayer`

### Changed

- Likert scale survey component supports the option to put label before radio buttons
- Updating dependencies, especially bootstrap to stable version

## [1.1.17]

### Added

- New stories for single choice survey component.

### Changed

- Internal changes how color is handled by LoadingPlacelholder
- Updating project dependencies

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
