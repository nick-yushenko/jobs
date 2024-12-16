import React, { useEffect, useState } from "react";
import Title from "@/ui/Title";
import "swiper/css";
import Modal from "@/ui/Modal";
import {
  notion,
  notionError,
  submit,
  submitWrapper,
  text,
  timer,
} from "@/componets/Confirm/style";
import Input from "@/ui/Input";
import clx from "classnames";
import Loader from "@/ui/Loader";

type TProps = {
  onSubmit: (code: any) => void;
  onRetry: () => void;
  phone: string;
  onClose: () => void;
  loading: boolean;
  error: string | undefined;
};
const Confirm: React.FC<TProps> = ({
  onSubmit,
  onClose,
  loading,
  onRetry,
  phone,
  error,
}) => {
  const [isValid, setIsValid] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(30);

  const [inpValue, setInpValue] = useState<string>();
  const [code, setCode] = useState<string>();
  const onChangeCodeHandle = (val: string) => {
    if (val.length === 5) {
      setIsValid(true);
      setCode(val);
    } else {
      setIsValid(false);
    }
  };

  const onTimerEnd = () => {
    setInpValue("");
    setIsValid(false);
    setSecondsLeft(30);
    onRetry();
  };

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setInterval(() => {
        setSecondsLeft(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [secondsLeft]);

  return (
    <Modal isOpen={true} onClose={onClose}>
      {loading ? (
        <Loader loadingText={"Подождите, идет загрузка"} />
      ) : (
        <>
          <Title.H3>Подтверждение телефона</Title.H3>
          <div className={notion}>
            Подтвердите номер телефона, чтобы получить консультацию и оформить
            продукт. Мы гарантируем безопасность и сохранность ваших данных.
          </div>
          {error && <div className={notionError}>{error}</div>}

          <div className={text}>
            Мы отправили вам СМС с кодом на номер{" "}
            {phone.replace(
              /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
              "$1 ($2) $3 $4-$5",
            )}
          </div>

          <Input
            placeholder={"Код подтверждения"}
            onChange={onChangeCodeHandle}
            newValue={inpValue}
          />

          <div className={submitWrapper}>
            <div
              onClick={() => {
                isValid && onSubmit({ sms: code });
              }}
              className={clx(submit, !isValid && "disabled")}
            >
              Подтвердить
            </div>
            <div className={timer}>
              {secondsLeft > 0 ? (
                <span>Отправить код повторно через {secondsLeft} сек.</span>
              ) : (
                <span onClick={onTimerEnd}>Отправить код еще раз</span>
              )}
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default Confirm;
