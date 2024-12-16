import React, { useEffect, useState } from "react";
import Title from "@/ui/Title";
import "swiper/css";
import Modal from "@/ui/Modal";
import Input from "@/ui/Input";
import Loader from "@/ui/Loader";
import { useSelector } from "react-redux";
import { getCitiesState } from "@/store/cities/selector";
import { City } from "@/store/cities/types";
import { citiesSlice, defaultCity } from "@/store/cities/reducer";
import clx from "classnames";
import { citiesWrapper, cityItem, current } from "@/componets/Cities/style";
import { useAppDispatch } from "@/store";
import { getCities } from "@/store/cities/actions";

type TProps = {
  onClose: () => void;
};

const Cities: React.FC<TProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const citiesState = useSelector(getCitiesState);
  const onSubmit = (val: City) => {
    dispatch(citiesSlice.actions.setCurrentCity(val));
    onClose();
  };

  useEffect(() => {
    void dispatch(getCities());
  }, []);

  return (
    <Modal isOpen={true} onClose={onClose}>
      {citiesState.loading ? (
        <Loader loadingText={"Подождите, идет загрузка"} />
      ) : (
        <>
          <Title.H3>Выбор города</Title.H3>

          {/*<Input*/}
          {/*  placeholder={"Название города"}*/}
          {/*  onChange={val => {*/}
          {/*    console.log(val);*/}
          {/*  }}*/}
          {/*/>*/}

          <div className={citiesWrapper}>
            {citiesState.cities.map((item: City, index: number) => {
              return (
                <div
                  className={clx(
                    cityItem,
                    item.id === citiesState.current.id && current,
                  )}
                  onClick={() => {
                    onSubmit(item);
                  }}
                  key={`city_${index}`}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </>
      )}
    </Modal>
  );
};

export default Cities;
