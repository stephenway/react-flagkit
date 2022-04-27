import * as React from 'react';
import Flag, { countryCodes, type Variants } from '../.';
import './App.css';

const variants = ['rounded', 'square', 'circle'];

function App() {
  const [variant, setVariant] = React.useState<Variants>();
  const [size, setSize] = React.useState(85); // pixels
  const [country, setCountry] = React.useState('UA');
  let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  const previewCode = `<Flag ${!variant ? "" : `variant="${variant}" `}country="${country}" size={${size}} />`;

  const otherFlagLabels = {
    LGBT: 'LGBT',
    ['GB-ENG']: 'England',
    ['GB-NIR']: 'Northern Ireland',
    ['GB-SCT']: 'Scotland',
    ['GB-WLS']: 'Wales',
    ['GB-ZET']: 'Shetland',
    ['US-CA']: 'California',
  };

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="App">
      <main className="App-main">
        <h1>
          <em>react-flagkit</em>
        </h1>

        <Flag country={country} size={size || 85} variant={variant} />

        <div className="App-form">
          <div className="App-field">
            <label htmlFor="variants">Variant</label>{' '}
            <select
              className="App-select"
              name="variants"
              onChange={e => setVariant(e.target.value as Variants || undefined)}
              value={variant}
            >
              <option value="">Choose...</option>
              {variants.map(s => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="App-field">
            <label htmlFor="countries">Country</label>{' '}
            <select
              className="App-select"
              name="countries"
              onChange={e => setCountry(e.target.value)}
              value={country}
            >
              {countryCodes.map(code => {
                const isCountry = !Object.keys(otherFlagLabels).includes(code);
                const label = isCountry
                  ? regionNames.of(code)
                  : otherFlagLabels[code];
                const labelWithCode = `${label} (${code})`;
                return (
                  <option key={code} value={code}>
                    {labelWithCode}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="App-field">
            <label htmlFor="size">Size</label>{' '}
            <input
              className="App-input"
              name="size"
              type="number"
              value={size}
              onChange={e => setSize(Number(e.target.value))}
              min={24}
              max={400}
            />
          </div>
        </div>

        <code className="App-code">
          <button
            className="App-copy-btn"
            onClick={() => copyToClipboard(previewCode)}
          >
            📋
          </button>
          <pre>{previewCode}</pre>
        </code>
      </main>
    </div>
  );
}

export default App;
