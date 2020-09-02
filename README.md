# react-flagkit

Beautiful flag icons for usage in React webapps. All flags are provided as importable images by React.

## Documentation

- [FlagKit Country Codes][1]

## Installation

```shell
npm install --save react-flagkit
```

## Usage

```js
import Flag from 'react-flagkit';

export default () => <Flag country="US" />;
```

Displays the flag of the United States (US)

```js
<Flag country="US" />
```

Component can render different flags by country, a list of all codes can be found [here](https://github.com/madebybowtie/FlagKit/blob/master/Assets/Flags.md).

```js
<Flag country="DE" />
```

It's also possible to make those flags whatever pixel size you want.

Big

```js
<Flag country="CA" size={84} />
```

or small

```js
<Flag country="GB" size={15} />
```

If needed you can also make the flag interactive with an `onClick` handler, just make sure to change the `role` to `button`

```js
<Flag
  country="SE"
  role="button"
  onClick={() => {
    alert('You just clicked on the flag.');
  }}
/>
```

## Thanks

- **madebybowtie** for FlagKit
- **jsDelivr** for free CDN access

[1]: https://github.com/madebybowtie/FlagKit/blob/master/Assets/Flags.md
