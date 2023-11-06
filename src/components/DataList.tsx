import { useState } from 'react';
import generateRandomData from '../helper/DataGenerator';
import '../App.css';

const DataList = () => {
  const [value, setValue] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState(generateRandomData());

  const dataString = JSON.stringify(data, null, 4);
  const dataBlob = new Blob([dataString], { type: 'application/json' });
  const dataUrl = URL.createObjectURL(dataBlob);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(dataString);
    alert('Data copied to clipboard');
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);

    const inputValue = Number(event.target.value);

    if (isNaN(Number(inputValue))) {
      setError('Please enter a number');
      setValue('');
      return;
    }

    setValue(inputValue);
  };

  const handleGenerateData = () => {
    const number = Number(value);

    if (!(number >= 1 && number <= 100)) {
      setError('Please enter a number between 1 and 100');
      setValue('');
      return;
    }

    const newData = generateRandomData(Number(value));
    return setData(newData);
  };

  return (
    <>
      <span>
        <h2>Generate Fake Random Data</h2>
        <h4>Generate data between 1 to 100</h4>
      </span>

      <div className="generate">
        <input
          type="text"
          placeholder="Enter a number"
          value={value}
          required
          onChange={handleNumberChange}
        />
        <button onClick={handleGenerateData}>GENERATE</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="action-buttons">
        <a href={dataUrl} download="data.json">
          Download JSON File
        </a>
        <button onClick={handleCopy}>Copy Data</button>
      </div>

      <div className="data">
        <pre>{dataString}</pre>
      </div>
    </>
  );
};

export default DataList;
