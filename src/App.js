import React, { useMemo } from 'react';
import './App.css';

import ChartJs from './components/ChartJs';
import HChart from './components/HChart';

const App = () => {
  const [count, setCount] = React.useState(100);

  const data = useMemo(() => {
    const x = Array.from({ length: count }, (_, i) => i + 1);
    return {
      x,
      y: x.map(() => Math.random() * 25),
    }
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      {
        [100, 500, 1000, 5000, 10000].map((c) => (
          <button key={c} onClick={() => setCount(c)}>{c}</button>
        ))
      }

      <div style={{ height: 275, width: '100%', marginBottom: '40px' }}>
        <ChartJs data={data} />
      </div>

      <div style={{ height: 275, width: '100%' }}>
        <HChart data={data} />
      </div>
    </div>
  );
}


export default App;
