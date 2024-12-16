import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch, callApiFn } from "@/services/request";
import { Office } from "@/store/offices/types";
import { City } from "@/store/cities/types";

export const getOffices = createAsyncThunk(
  "offices/getOffices",
  async (city: City) => {
    try {
      const now = new Date();
      let url = `${
        process.env.VITE_APP_API_URL
      }/v1/order/address-list?currentHour=${now.getHours()}`;

      if (city && city.id) url += `&city=${city?.id}`;

      const result = await callApiFn<Office[]>(() =>
        apiFetch({
          url: url,
          options: {
            method: "GET",
          },
        }),
      );
      return result;
    } catch (e) {
      throw e;
    }
  },
);
