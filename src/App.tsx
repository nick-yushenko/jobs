import React, { useEffect, useState } from "react";
import Layout from "@/ui/Layout";
import Header from "@/componets/Header";
import { appContent } from "@/style";
import Booking from "@/componets/Booking";
import Confirm from "@/componets/Confirm";
import Thx from "@/componets/Thx";
import { getCurrencies } from "@/store/currencies/actions";
import { useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { getCurrenciesState } from "@/store/currencies/selector";
import { getOfficesState } from "@/store/offices/selector";
import { getOffices } from "@/store/offices/actions";
import { prepareOfficesList } from "@/utils/prepareOfficesList";
import { getCustomerState } from "@/store/customer/selector";
import { fetchCustomer } from "@/store/customer/actions";
import { Customer } from "@/store/customer/types";
import { customerSlice } from "@/store/customer/reducer";
import { apiFetch, callApiFn } from "@/services/request";
import { getCitiesState } from "@/store/cities/selector";
import Cities from "@/componets/Cities";
import AuthGos from "@/componets/AuthGos";

const App = () => {
  const dispatch = useAppDispatch();
  const currenciesState = useSelector(getCurrenciesState);
  const officesState = useSelector(getOfficesState);
  const customerState = useSelector(getCustomerState);
  const citiesState = useSelector(getCitiesState);
  const [gosusligiAuth, setGosusligiAuth] = useState<string>("");

  const [isConfirm, setIsConfirm] = useState(false);
  const [smsError, setSmsError] = useState<string | undefined>(undefined);
  const [isThx, setIsThx] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [isAuthGos, setIsAuthGos] = useState(false);
  const [isChooseCity, setIsChooseCity] = useState(true);

  const onSubmitForm = (customer: Customer) => {
    void dispatch(customerSlice.actions.setCustomer(customer));
    void dispatch(fetchCustomer(customer));
  };

  const onSubmitSMSCode = async (sms: any) => {
    const url = `${process.env.VITE_APP_API_URL}/v1/candidates/validate-sms`;
    const formData = new FormData();

    sms.token = customerState.data?.token;

    for (const key in sms) {
      if (sms.hasOwnProperty(key)) {
        formData.append(key, sms[key]);
      }
    }

    try {
      const result = await callApiFn<{
        brainsoft: { data: number };
        success: boolean;
        message: string;
      }>(() =>
        apiFetch({
          url: url,
          options: {
            method: "POST",
            body: formData,
          },
        }),
      );
      if (result.success) {
        setIsConfirm(false);
        setIsAuthGos(true);
        setGosusligiAuth(
          `https://lk.kamkombank.ru/start/booking?lead_id=${result.brainsoft.data}`,
        );
      } else {
        setSmsError(result.message);
      }
    } catch (e) {
      console.log("error");
      console.log(e);
    }
  };

  const onRetry = () => {
    void dispatch(fetchCustomer(customerState.data));
  };

  useEffect(() => {
    if (!isChooseCity && citiesState.current) {
      void dispatch(getCurrencies());
      void dispatch(getOffices(citiesState.current));
    }
  }, [isChooseCity, citiesState.current]);

  useEffect(() => {
    if (customerState.success) setIsConfirm(true);
  }, [customerState]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const status = searchParams.get("status");

    if (status === "success") {
      setIsThx(true);
      setIsChooseCity(false);
    } else if (status === "fail") {
      setIsThx(true);
      setIsFail(true);
      setIsChooseCity(false);
    }

    searchParams.delete("status");
    const newUrl = `${window.location.protocol}//${window.location.host}${
      window.location.pathname
    }?${searchParams.toString()}`;
    window.history.replaceState({ path: newUrl }, "", newUrl);
  }, []);
  return (
    <>
      {isChooseCity && (
        <Cities
          onClose={() => {
            setIsChooseCity(false);
          }}
        />
      )}
      {isConfirm && (
        <Confirm
          onSubmit={onSubmitSMSCode}
          onRetry={onRetry}
          onClose={() => {
            setIsConfirm(false);
            setSmsError(undefined);
          }}
          phone={customerState.data?.phone ?? ""}
          loading={customerState.loading}
          error={smsError}
        />
      )}
      {isThx && (
        <Thx
          isFail={isFail}
          onClose={() => {
            setIsThx(false);
            setIsFail(false);
          }}
        />
      )}

      {isAuthGos && <AuthGos url={gosusligiAuth} />}
      <Header
        onChangeCity={() => {
          setIsChooseCity(true);
        }}
      />

      <Layout.Main className={appContent}>
        <Booking
          onSubmit={onSubmitForm}
          currencies={currenciesState.currencies}
          offices={prepareOfficesList(officesState.offices)}
          loading={officesState.loading || currenciesState.loading}
        />
      </Layout.Main>
    </>
  );
};

export default App;
