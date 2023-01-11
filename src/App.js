import React, { useMemo } from 'react';

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
    <>
      <button onClick={() => setCount(100)}>100</button>
      <button onClick={() => setCount(500)}>500</button>
      <button onClick={() => setCount(1000)}>1000</button>
      <button onClick={() => setCount(5000)}>5000</button>

      <div style={{ height: 300, width: 750, marginBottom: '100px' }}>
        <ChartJs data={data} />
      </div>

      <div style={{ height: 300, width: 750 }}>
        <HChart data={data} />
      </div>
    </>
  );
}


export default App;
