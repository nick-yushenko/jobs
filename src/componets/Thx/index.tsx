import React, { useEffect, useState } from "react";
import "swiper/css";
import Modal from "@/ui/Modal";
import { container, submit, textStyles } from "@/componets/Thx/style";
import { Icon } from "@/ui/Icon";
import { popupAnswers } from "@/mock";

type TProps = {
  isFail: boolean;
  onClose: () => void;
};
const Thx: React.FC<TProps> = ({ onClose, isFail }) => {
  const [text, setText] = useState<string>("");
  console.log(123);
  useEffect(() => {
    // установка цели по я. метрикам
    // @ts-ignore
    window.ym(95283405, "reachGoal", "windowspasibo");
  }, []);
  useEffect(() => {
    if (isFail) {
      setText(popupAnswers.failText);
    } else {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      if (
        currentHour > popupAnswers.dayEnd ||
        currentHour < popupAnswers.dayStart
      ) {
        // Время с 20:00 до 08:59
        setText(popupAnswers.nightText);
      } else {
        // В остальное время
        setText(popupAnswers.dayText);
      }
    }
  }, []);
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className={container}>
        {isFail ? (
          <Icon name={"fail-icon"} width={44} height={44} />
        ) : (
          <Icon name={"success-icon"} width={44} height={44} />
        )}
        <p className={textStyles}>{text}</p>
        <div onClick={onClose} className={submit}>
          Закрыть
        </div>
      </div>
    </Modal>
  );
};

export default Thx;
