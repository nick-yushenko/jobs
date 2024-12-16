import { useDispatch } from "react-redux";
import { combineReducers, Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { CurrencyState } from "./currencies/types";
import { currenciesSlice } from "./currencies/reducer";
import { OfficeState } from "@/store/offices/types";
import { officesSlice } from "@/store/offices/reducer";
import { CustomerState } from "@/store/customer/types";
import { customerSlice } from "@/store/customer/reducer";
import { CitiesState } from "@/store/cities/types";
import { citiesSlice } from "@/store/cities/reducer";

export interface ApplicationStore {
  currencies: CurrencyState;
  offices: OfficeState;
  customer: CustomerState;
  cities: CitiesState;
}

export const store = configureStore({
  reducer: combineReducers<ApplicationStore>({
    currencies: currenciesSlice.reducer,
    offices: officesSlice.reducer,
    customer: customerSlice.reducer,
    cities: citiesSlice.reducer,
  }),
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export function createApplicationStore(): Store<ApplicationStore> {
  return store;
}

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
