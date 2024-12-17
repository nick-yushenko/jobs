import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch, callApiFn } from "@/services/request";
import { City } from "@/store/cities/types";
import { Vacancy } from "@/store/vacancies/types";

export const getVacancies = createAsyncThunk(
  "vacancies/getVacancies",
  async (city: City) => {
    try {
      const now = new Date();
      let url = `${
        process.env.VITE_APP_API_URL
      }/v1/vacancy`;

      if (city && city.id) url += `/get-by-city?city_id=${city?.id}`;

      const result = await callApiFn<Vacancy[]>(() =>
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
