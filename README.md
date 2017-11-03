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
--- | ---
`country` | string | Required | The country code for the image path
`role` | string | img | The a11y role type for the `<img />` tag
`size` | number | 24 | The size of the image

[1]: https://github.com/madebybowtie/FlagKit/blob/master/Assets/Flags.md
