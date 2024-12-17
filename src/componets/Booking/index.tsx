import React, { useEffect, useState } from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import {
  container,
  formItem,
  loader,
  submit,
} from "@/componets/Booking/style";
import Input from "@/ui/Input";
import Dropdown, { DropdownOption } from "@/ui/Dropdown";
import clx from "classnames";
import Loader from "@/ui/Loader";
import { Employee } from "@/store/employee/types";

type TProps = {
  onSubmit: (employee: Employee) => void;
  vacancies: DropdownOption[];
  loading: boolean;
};
const Booking: React.FC<TProps> = ({
  onSubmit,
  vacancies,
  loading,
}) => {
  const [phone, setPhone] = useState<string>();
  const [vacancy, setVacancy] = useState<DropdownOption>();

  const [isValid, setIsValid] = useState<boolean>(false);

  const [isPhoneError, setIsPhoneError] = useState<boolean>(false);
  const [isVacancyError, setIsVacancyError] = useState<boolean>(false);

  const validate = () => {
    let isValid = true;
    if (!phone || !(phone.length === 10 || phone.length === 12)) isValid = false;
    if (!vacancy) isValid = false;

    return isValid;
  };

  const onChangeVacancy = (val: any, meta: object) => {
    setVacancy(val);
  };



  const onChangePhone = (val: string) => {
    setPhone(val.replace(/[^\+\d]/g, ""));
    console.log("fie")
  };

  const onSubmitHandler = () => {
    const obj: Employee = {
      phone: phone ?? "",
      vacancy_id: vacancy?.id ?? 0,
    };

    if (validate()) onSubmit(obj);
    else {
      setIsPhoneError(true);
      !vacancy && setIsVacancyError(true);
    }
  };

  useEffect(() => {
    setIsValid(validate());
  }, [phone, vacancy]);

  return (
    <Layout.Container>
      <Title.H2>Выбрать вакансию</Title.H2>

      {loading ? (
        <div className={loader}>
          <Loader loadingText={"Подождите, идет загрузка"} />
        </div>
      ) : (
        <>
          <div className={container}>
            <div className={formItem}>
              <Dropdown
                options={vacancies}
                onChange={onChangeVacancy}
                isError={isVacancyError}
              />
            </div>
            <div className={formItem}>
              <Input
                type={"phone"}
                placeholder={"Телефон*"}
                required
                onChange={onChangePhone}
                isError={isPhoneError}
              />
            </div>


          </div>

          <div
            onClick={onSubmitHandler}
            className={clx(submit, !isValid && "disabled")}
          >
            Откликнуться
          </div>
        </>
      )}
    </Layout.Container>
  );
};

export default Booking;
