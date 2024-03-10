import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { API_BASE_URL } from '../config';
import { Firm, Commitment } from '../types';
import FirmTable from '../component/FirmTable';


function App() {

    const FIRMS_URL = `${API_BASE_URL}/investors/`;

    const [firms, setFirms] = React.useState<Firm[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    // fetch firms from the backend
    // TODO: use hooks to fetch data asynchronously
    React.useEffect(() => {
        fetch(FIRMS_URL)
            .then(response => response.json())
            .then(data => setFirms(data))
            .catch(setError)
            .finally(() => setLoading(false));
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