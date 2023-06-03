import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const baseUrl = process.env.ANIMAL_DAEJEON_API_URL;
  // const accessKey = process.env.ANIMAL_DAEJEON_SERVICE_KEY;

  const fetchData = async () => {
    try {
      setError('');
      setData(null);
      setLoading(true);

      const response = await axios.get('http://apis.data.go.kr/6300000/animalDaejeonService/animalDaejeonList', {
        params: {
          serviceKey: 'gtHKcCYmQasMrVvice2tZvdRI8mRKJyYeuwJDKwftzA9P/iVWswT0zdKmwGDN68Wz7CxoQQq4q22LZh8dR2Nag==',
          numOfRows: 1,
          pageNo: 10,
        },
      });
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      setError('error');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    console.log(fetchData)
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return (
    <div className="App">
      <p>병원명 : { data}</p>
  
    </div>
  );
}

export default App;
