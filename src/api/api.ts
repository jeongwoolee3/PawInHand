import axios from "axios";
import X2JS from "x2js";

export interface AnimalInfo {
  adoptionStatusCd: string;
  age: string;
  animalSeq: string;
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

const baseUrl = import.meta.env.VITE_APP_API_URL;
const accessKey = import.meta.env.VITE_APP_API_KEY;

function XmlToListObject(xml: any) {
  const rawFile = new X2JS();
  let document = rawFile.xml2js(xml) as any;

  return document.ServiceResult.MsgBody.items;
}

function XmlToItemObject(xml: any) {}

const AnimalList = async (
  numOfRows: number,
  pageNo: number,
  searchCondition3: number
) => {
  try {
    let response = await axios.get(baseUrl, {
      params: {
        serviceKey: accessKey,
        numOfRows: numOfRows,
        pageNo: pageNo,
        searchCondition3: searchCondition3,
      },
    });
    const animalList = XmlToListObject(response.data);
    return Promise.resolve(animalList);
  } catch (e) {
    console.log(e);
  }
};

export { AnimalList };
