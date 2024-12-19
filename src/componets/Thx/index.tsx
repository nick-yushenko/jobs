import React, { useEffect, useState } from "react";
import "swiper/css";
import Modal from "@/ui/Modal";
import {
  container,
  submit,
  text2Styles,
  textStyles
} from "@/componets/Thx/style";
import { Icon } from "@/ui/Icon";
import { popupAnswers } from "@/mock";

type TProps = {
  isFail: boolean;
  onClose: () => void;
};
const Thx: React.FC<TProps> = ({ onClose, isFail }) => {
  useEffect(() => {
    // установка цели по я. метрикам
    // @ts-ignore
    window.ym(99226891, "reachGoal", "windowspasibo");
  }, []);

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className={container}>
        {isFail ? (
          <>
            <Icon name={"fail-icon"} width={44} height={44} />
            <p className={textStyles}>Спасибо за отклик!</p>
            <span>Мы рассмотрим вашу кандидатуру и свяжемся с вами.</span>
          </>
        ) : (
          <>
            <Icon name={"success-icon"} width={44} height={44} />
            <p className={textStyles}>Спасибо за отклик!</p>
            <span className={text2Styles}>Мы рассмотрим вашу кандидатуру и свяжемся с вами.</span>
          </>
        )}

      </div>
    </Modal>
  );
};

export default Thx;
