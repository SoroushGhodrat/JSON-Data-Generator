import generateRandomData from '../helper/DataGenerator';
import '../App.css';
import { useState } from 'react';

const DataList = () => {
  const [value, setValue] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState(generateRandomData());

  const dataString = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataString], { type: 'application/json' });
  const dataUrl = URL.createObjectURL(dataBlob);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(dataString);
    alert('Data copied to clipboard');
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const insertValue = event.target.value;
    if (Number(insertValue) < 1 || !Number.isInteger(Number(insertValue))) {
      setError('Please enter a whole number equal or greater than 1');
    } else {
      setError(null);
      setValue(Number(insertValue));
    }
  };

  const handleGenerateData = () => {
    const newData = generateRandomData(value);
    setData(newData);
  };

  return (
    <>
      <span>
        <h2>Generate Fake Random Data</h2>
        <h4>Generate data between 1 to 100</h4>
      </span>

      <div className="generate">
        <input
          type="number"
          min="1"
          placeholder="Enter a number"
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
