import React from "react";
import Layout from "@/ui/Layout";
import {
  city,
  header,
  headerWrapper,
  headerWrapperMb,
  infoItem,
  infoItem_icon,
  infoItem_text,
  infoItem_title,
  infoItems,
  logo,
  phone,
  subheader,
  wallet,
  warning,
} from "@/componets/Header/style";
import { Icon } from "@/ui/Icon";
import Link from "@/ui/Link";
import Title from "@/ui/Title";
import clx from "classnames";
import { useSelector } from "react-redux";
import { getCitiesState } from "@/store/cities/selector";

type TProps = {
  onChangeCity: () => void;
};

const Header: React.FC<TProps> = ({ onChangeCity }) => {
  const citiesState = useSelector(getCitiesState);

  return (
    <>
      <Layout.Main>
        <Layout.Wrapper className={subheader}>
          <Link
            href={"https://www.kamkombank.ru/"}
            target={"_blank"}
            className={logo}
          >
            <Icon name={"logo"} />
          </Link>
          <div className={city} onClick={onChangeCity}>
            {citiesState.current.name}
          </div>

          <Link href={"tel:88002004638"} target={"_blank"} className={phone}>
            <Icon name={"phone-icon"} width={24} height={24} />
            <span>8 800 200 46 38</span>
          </Link>
        </Layout.Wrapper>
      </Layout.Main>

      <Layout.Main className={clx(header, "header")}>
        <Layout.Wrapper className={headerWrapper}>
          <Icon name={"wallet-img-1"} className={wallet} />

          <div className={headerWrapperMb}>
            <Title.H1>Работа в Камкомбанке</Title.H1>

            <div className={infoItems}>
              <div className={infoItem}>
                <Icon name={"currency-icon"} className={infoItem_icon} />
                <div>
                  <span className={infoItem_title}>$ ¥ £ € CNY AED</span>
                  <span className={infoItem_text}>Всегда в наличии</span>
                </div>
              </div>

              <div className={infoItem}>
                <Icon name={"check-icon"} className={infoItem_icon} />
                <div>
                  <span className={infoItem_title}>Бесплатный резерв</span>
                  <span className={infoItem_text}>Гарантия покупки</span>
                </div>
              </div>
            </div>

            <span className={warning}>
              Резервирование действует до конца дня
            </span>
          </div>
        </Layout.Wrapper>
      </Layout.Main>
    </>
  );
};

export default Header;
