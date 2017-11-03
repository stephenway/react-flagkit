# react-flagkit

Beautiful flag icons for usage in React webapps. All flags are provided as importable images by React.

## Documentation

* [FlagKit Country Codes][1]

## Installation

```shell
npm install --save react-flagkit
```

## Usage

### JSX Structure

```js
<Flag country="US" />
```

### Methods and Props

Prop name | Type | Default | Description
--- | --- | --- | ---
`country` | string | Required | The country code for the image path
`role` | string | img | The a11y role type for the `<img />` tag
`size` | number | 24 | The size of the image

### Testing

This project uses [Jest][2] & [Enzyme][3] for component unit testing and [React Styleguidist][4] for visual regression testing and documentation. Also, EsLint is used for linting code.

* Unit testing `npm run test` or `npm run test:watch` for constant feedback
* Visual regression testing `npm run styleguide` or `npm run styleguide:build` to build `./docs`
* Code linting `npm run lint` runs to check your code for syntax issues.

[1]: https://github.com/madebybowtie/FlagKit/blob/master/Assets/Flags.md
[2]: https://facebook.github.io/jest/
[3]: http://airbnb.io/enzyme/
[4]: https://react-styleguidist.js.org/
