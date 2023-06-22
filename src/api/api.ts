import axios from "axios";
import X2JS from "x2js";


const baseUrl = import.meta.env.VITE_APP_API_URL;
const itemUrl = import.meta.env.VITE_APP_API_ITEM_URL;
const accessKey = import.meta.env.VITE_APP_API_KEY;

function XmlToListObject(xml: any) {
  const rawFile = new X2JS();
  let document = rawFile.xml2js(xml) as any;

  return document.ServiceResult.MsgBody.items;
}

function XmlToItemObject(xml: any) {
  const rawFile = new X2JS();
  let document = rawFile.xml2js(xml) as any;

  return document.ServiceResult.msgBody;
}

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


const AnimalItem =async (
  animalSeq: string
) => {
  console.log(animalSeq)
  try{
    let response = await axios.get(itemUrl, {
      params: {
        serviceKey: accessKey,
        animalSeq: animalSeq,
      }
    });
    const animalItem = XmlToItemObject(response.data);
    return Promise.resolve(animalItem);
  }catch (e) {
    console.log(e);
  }
  
}

export { AnimalList, AnimalItem };
