import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit";
import { AnimalInfo } from "../types";



const initialState: AnimalInfo = {
  adoptionStatusCd: '',
  age:'',
  animalSeq: '',
  classification: '',
  fileNm: '',
  filePath: '',
  foundPlace: '',
  gender: '',
  gu: '',
  hairColor: '',
  hitCnt: '',
  memo: '',
  modDtTm: '',
  noticeDate: '',
  regDtTm: '',
  regId: '',
  rescueDate: '',
  species: '',
  weight: '',
  
};

const animalItemListSlice = createSlice({
    name: "itemList",
    initialState: initialState,
    reducers: {
        setAnimalItemList(state ,action: PayloadAction<AnimalInfo>) {
          console.log(action.payload, state);

           state = action.payload

           return action.payload
        }
    }
});

const store = configureStore({
  reducer: {
    itemList : animalItemListSlice.reducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const {setAnimalItemList} = animalItemListSlice.actions;

