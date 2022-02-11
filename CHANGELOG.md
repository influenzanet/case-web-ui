# Changelog

## 1.9.1 - 2022-02-11

### Changed

- Fixing issue with response single choice and bipolar likert choice where keyboard navigation was not working as expected in table mode.
- Center text and number inputs content when used in a cloze question.
- TextLink should work as normal <a> tag.
- Updated project dependencies.

## 1.9.0 - 2022-02-04

### Added

- New input for "time", to ask for a specific hour and minute of the day. When stepsize is set, seconds can be asked as well.
- Added new response component with the role `timeInput` to select a time. Result will be interpreted as seconds since 00:00:00. Can also be used in cloze questions, single choice or multple choice questions.
- New question type `consent` to display a consent dialog and store the response in a survey.

### Changes

- Formatted text components in the survey can include date object to display a localized date. (With `role: dateDisplay`).
- Use webpack5 in storybook.
- Survey view accepts flag to turn on debug messages for survey engine.

## 1.8.7 - 2022-01-26

Action card images' copyright notice can be aligned right.

## 1.8.5 - 2022-01-26

Action card images can contain copyright notice.

## 1.8.4 - 2022-01-24

Color and font-size optimisations for accessibility.

## 1.8.3 - 2022-01-22

### Changed

- Fix optional survey list's top spacing and border behaviour

## 1.8.2 - 2022-01-22

### Changed

- Survey list header contains one top border, and this can be hidden. This change is to make the page less cluttered for use cases when report list or other article based content is displayed.

## 1.8.1 - 2022-01-21

- Run locale registration for react-datepicker, when a component is initialized.

## 1.8.0 - 2022-01-21

### BREAKING-CHANGES

- Survey View needs to receive date-fns locales as a prop. These locales needs to be registered outside of the library, from the host app.

## 1.7.0 - 2022-01-21

### Added

- New component called `ActionCard` - a configurable card with hover effect, clickable, can include image on top or on the left. Image is attached as background image to a div, with configurable width, height (also min/max) and and background postion and size. Optionally the image can be included as a normal `img` - by using the prop `as`.
- Survey renderer accepts an array of custom defined response components: `customResponseComponents: Array<CustomSurveyResponseComponent>;`. These can be used to extend the survey question types.
- New components for report history / report card / report detail dialog.

### Changed

- Accordion list component accepts itemKey property, and uses this to generate item keys. By setting the `itemKey`, more than one accordion list on the page can be used.
- Add shadow to modal (dialog) border.
- Cloze question can include line breaks with role `lineBreak`.
- Updated project dependencies. From this, important is especially the survey `survey-engine`.
- Dialog prop "onClose" is optional. If no onClose is provided, the closing icon is hidden.
- Responsive Single Choice array and Bipolar likert scale array rows support displayCondition.
- SurveyCard can handle 'immediate' category.

## 1.6.2 - 2021-11-22

Fix issue with dialog header rendering on windows.

## 1.6.1 - 2021-11-19

Updated project dependencies.

## 1.6.0 - 2021-11-19

### BREAKING-CHANGES

- Replacing  material-ui dialog, with react bootstrap's modal. Dialog component support now following props:
  - size (optional): 'sm', 'lg', 'xl'
  - fullScreenFrom (optional): 'sm-down', 'md-down', 'lg-down', xl-down', 'xxl-down'. If not defined, 'sm-down' will be used as a default value.

### Added

- New survey response item type for "cloze" question, a question where inputs embedded in a text can be placed. E.g., On .... between ... and ... . This can be embedded inside a single or multiple choice question as well. To invoke such an item, you can use the `role: 'cloze'`.
- New component available for file inputs using a dropzone.

### Changed

- Survey navigation buttons should loose focus after clicked. Also submit button should not gain autofocus now.
- Small improvements on TextInput and NumberInput styling.
- DateInput n survey also accepts className for the component.
- NavLink example removes `type="button"` that causes wrong style in Safari.
- TextInput and MultiLineTextInput survey components now support `maxLength` attribute passed down through the style array, to control how many characters can be entered.

## 1.5.3 - 2021-08-30

### Changed

- Fixed issue for map-time-series visualisation to be able include values with zero.
- Add css class `fs-survey-item-title` to survey items and set default size to 1.125rem.

## 1.5.2 - 2021-08-21

### Changed

- Survey Page buttons on last page, put focus on Submit instead of back button. This a temporary solution, since ideally focus should be set to the top survey item.

## 1.5.1 - 2021-08-19

### Changed

- Improve survey page progress indicator, to better handle cases with many survey pages.
- Improve click target for likert scales item, especially relevant for vertical mode.

## 1.5.0 - 2021-08-17

### Added

- New survey response component for role `responsiveBipolarLikertScaleArray`.

### Changed

- Updating project dependencies (react-markdown, recharts, react-datepicker)

## 1.4.2 - 2021-07-30

### Changed

- `responsiveSingleChoiceArray`: fix isLast for horizontal mode
- `likert` survey response item fixes issues with longer text when stacked in vertical mode.

## 1.4.1 - 2021-07-30

### Changed

- `SingleChoiceGroup` and `MultipleChoiceGroup`: use flex grow label also in case of formatted text.
- `responsiveSingleChoiceArray`: small improvements on props.

## 1.4.0 - 2021-07-29

### Added

- New survey question type: `ResponsiveSingleChoiceArray`. When using this component, you can define different view modes for different screen sizes. Currently supported are: 'vertical', 'horizontal' and 'table' modes. This question type can be used, e.g., to implement Likert Scale matrices.

### Changed

- `SingleChoiceGroup`: Options of a single choice group can be styled (with className attribute). In such a case, styling is not propagated down to the nested inputs, to avoid issues with improperly applied styles twice.
- `SingleChoiceGroup` and `MultipleChoiceGroup` accept now option items with multiple parts (items in the component's items array). Currently, only text-based components are supported, for the purpose if different parts of the text needs to be styled differently (e.g., bold, color highlight or underlined).
- Title component of a single survey item now supports className style attribute to attach CSS class to the whole title area. This can be used, e.g., to add "sticky-top", to make the question title stick to the top of the screen as long as the question is visible.
- Title component of a single survey item accepts now a list of items through its `items` attribute. This can be used to define a `content` with differently styled parts (e.g., to highlight specific words, or override default font weight from bold to normal).

## [1.3.0] - 2021-07-08

### Changed

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
