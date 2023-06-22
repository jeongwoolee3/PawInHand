type ResponseForm = {
  [key: number]: string;
};

type ItemForm = {
  [key: string]: string;
};

export const adoptionStatusCd: ResponseForm = {
  1: "공고중",
  2: "입양가능",
  3: "입양예정",
  4: "입양완료",
  5: "자연사",
  6: "안락사",
  7: "주인반환",
  8: "임시보호",
  9: "입양불가",
  10: "방사",
  11: "주민참여",
  12: "입원중",
} as const;

export const classification: ResponseForm = {
  1: "개",
  2: "고양이",
  3: "기타동물"
} as const

export const gender: ResponseForm = {
  1: "암",
  2: "수",
  3: "중성화 암컷",
  4: "중성화 수컷",
  5: "미상",
} as const;

export const ItemKeyTransfer: ItemForm = {
  adoptionStatusCd: "입양상태",
  age: "나이",
  classification: "유기동물구분",
  foundPlace: "발견장소",
  gender: "성별",
  memo: "메모",
  species: "품종",
  weight: "무게",
} as const;

export const ItemKey = [
  "adoptionStatusCd",
  "age",
  "classification",
  "foundPlace",
  "gender",
  "memo",
  "species",
  "weight",
]

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
