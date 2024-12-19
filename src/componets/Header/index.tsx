import React from "react";
import Layout from "@/ui/Layout";
import {
  city,
  header,
  headerWrapper,
  headerWrapperMb,
  list,
  listItem,
  logo,
  phone, styledIcon,
  subheader,
  wallet,
  text,
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

          <Link href={"tel:89872602041"} target={"_blank"} className={phone}>
            <Icon name={"phone-icon"} width={24} height={24} />
            <span>8 987 260 20 41</span>
          </Link>
        </Layout.Wrapper>
      </Layout.Main>

      <Layout.Main className={clx(header, "header")}>
        <Layout.Wrapper className={headerWrapper}>
          <Icon name={"wallet-img-1"} className={wallet} />

          <div className={headerWrapperMb}>
            <Title.H1>Работа в Камкомбанке</Title.H1>

            <div className={list}>
              <div className={listItem}>
                <Icon name={"bullet-icon"} className={styledIcon}/>
                <span>Комфортные условия</span>
              </div>
              <div className={listItem}>
                <Icon name={"bullet-icon"} className={styledIcon}/>
                <span>Высокий уровень оплаты</span>
              </div>
              <div className={listItem}>
                <Icon name={"bullet-icon"} className={styledIcon}/>
                <span>Уверенность в завтрашнем дне</span>
              </div>
            </div>

            <span className={text}>
             Станьте частью команды профессионалов!
            </span>
          </div>
        </Layout.Wrapper>
      </Layout.Main>
    </>
  );
};

export default Header;
