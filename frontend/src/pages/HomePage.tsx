import React from 'react';
import '../App.css';
import { API_BASE_URL } from '../config';
import { Firm } from '../types';
import FirmTable from '../component/FirmTable';


function App() {

    const FIRMS_URL = `${API_BASE_URL}/investors/`;

    const [firms, setFirms] = React.useState<Firm[]>([]);

    // fetch firms from the backend
    // TODO: use hooks to fetch data asynchronously
    React.useEffect(() => {
        fetch(FIRMS_URL)
            .then(response => response.json())
            .then(data => setFirms(data))
    }, []);


    return (
      <div className="App">
        <body>
        {firms && FirmTable(firms)}
        </body>
      </div>
    );
  }
  
  export default App;