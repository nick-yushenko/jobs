import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch, callApiFn } from "@/services/request";

export const fetchEmployee = createAsyncThunk(
  "employee/fetchEmployee",
  async (employee: any ) => {
    try {
      const formData = new FormData();
      const urlParams = new URLSearchParams(window.location.search);
      for (const [key, value] of urlParams.entries()) {
        formData.append(key, value);
      }
      for (const key in employee) {
        if (employee.hasOwnProperty(key)) {
          formData.append(key, employee[key]);
        }
      }

      const result = await callApiFn<any>(() =>
        apiFetch({
          url: `${process.env.VITE_APP_API_URL}/v1/candidates/send`,
          options: {
            method: "POST",
            body: formData,
          },
        }),
      );
      return result;
    } catch (e) {
      throw e;
    }
  },
);
