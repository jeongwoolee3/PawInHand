import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import X2JS from "x2js";

export interface AnimalInfo {
  adoptionStatusCd: string;
  age: string;
  animalSeq: string,
  classification: string;
  fileNm: string;
  filePath: string;
  foundPlace: string;
  gender: string;
  gu: string;
  hairColor: string;
  hitCnt: string;
  memo: string;
  modDtTm: string;
  noticeDate: string;
  regDtTm: string;
  regId: string;
  rescueDate: string;
  species: string;
  weight: string;
}

const initialAnimals: AnimalInfo[] = [
  {
    adoptionStatusCd: "7",
    age: "3년령(추정)",
    animalSeq: "42961",
    classification: "1",
    fileNm: "23-2-108.jpg",
    filePath: "FileUpload/ANI/202305/20230515093156693.jpg",
    foundPlace: "목동초등학교 주변",
    gender: "1",
    gu: "2",
    hairColor: "황백색",
    hitCnt: "37",
    memo: "칩존재, 현장반환",
    modDtTm: "2023-05-15",
    noticeDate: "2023-05-17",
    regDtTm: "2023-05-15",
    regId: "23-2-108",
    rescueDate: "2023-05-14",
    species: "믹스",
    weight: "5kg(추정)",
  },
];
function App() {
  const [data, setData] = useState<AnimalInfo[]>(initialAnimals);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const accessKey = import.meta.env.VITE_APP_API_KEY;

  const fetchData = async () => {
    try {
      setError("");
      setLoading(true);

      const response = await axios.get(baseUrl, {
        params: {
          serviceKey: accessKey,
          numOfRows: 10,
          pageNo: 10,
          searchCondition: 1,
        },
      });

      const rawFile = new X2JS();
      let document = rawFile.xml2js(response.data) as any;
      setData(document.ServiceResult.MsgBody.items);
      console.log(document.ServiceResult.MsgBody.items);
    } catch (e) {
      setError("error");
    }


    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;
  
  return (
    <div className="App">
      <p>나이 : {data[0].age}</p>
    </div>
  );
}

export default App;
