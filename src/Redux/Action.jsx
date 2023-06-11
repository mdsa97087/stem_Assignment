import { STORE_VALUE } from "./Action_Type";


export const storeValue = (value) => {
      return {
        type: STORE_VALUE,
        payload: value,
      };
    };