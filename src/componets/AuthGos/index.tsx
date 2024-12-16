import React, { useEffect, useState } from "react";
import "swiper/css";
import Modal from "@/ui/Modal";
import { Icon } from "@/ui/Icon";
import { popupAnswers } from "@/mock";
import {
  arrow,
  arrow_icon,
  container,
  gos,
  info,
  textStyles,
  title,
} from "@/componets/AuthGos/style";

type TProps = {
  url: string;
};
const AuthGos: React.FC<TProps> = ({ url }) => {
  useEffect(() => {
    // установка цели по я. метрикам
    // @ts-ignore
    window.ym(95283405, "reachGoal", "windowspasibo");
  }, []);

  return (
    <Modal isOpen={true}>
      <div className={container}>
        <Icon name={"success-icon"} width={44} height={44} />
        <p className={textStyles}>
          Авторизуйтесь через Госуслуги для резервирования суммы до конца дня.
          Это быстро и безопасно.
        </p>
        <a href={url} className={gos}>
          <Icon name={"gosuslugi-icon"} width={50} height={50} />
          <div>
            <span className={title}>Авторизуйтесь через Госуслуги</span>
            <span className={info}>Нажмите для авторизации</span>
          </div>
          <div className={arrow}>
            <Icon
              name={"arrow-gos"}
              width={14}
              height={14}
              fill={"CurrentColor"}
              className={arrow_icon}
            />
          </div>
        </a>
      </div>
    </Modal>
  );
};

export default AuthGos;
