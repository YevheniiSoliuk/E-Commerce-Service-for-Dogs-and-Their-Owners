import {
  Button,
  Column,
  Img,
  Link,
  Section,
  Text
} from '@react-email/components';
import * as React from 'react';
import { StarRating } from '../../../StarRating';
import BasketIcon from '../../../../../assets/icons/add-to-basket.svg';
import { IProduct } from '../../../../../interfaces/Order';

type EmailProductCardProps = {
  product: IProduct;
};

export const EmailProductCard: React.FC<EmailProductCardProps> = ({
  product
}) => {
  const { title, brand, rate, ratesAmount, price, discountAmount, images } = {
    ...product
  };

  return (
    <Column style={card}>
      <Section style={imgContainer}>
        <Link href="#">
          <img src={images[0]} alt="product" style={cardImg} />
        </Link>
      </Section>
      <Text style={cardTitle}>{title}</Text>
      <Text style={cardBrand}>{brand.name}</Text>
      {/* <StarRating
        type="static"
        active={rate}
        size="h-[11px] w-[11px]"
        alignment="text-left"
        rates={ratesAmount}
      /> */}
      <Section style={priceContainer}>
        <Text style={discountPrice}>
          {(price - price * (discountAmount! / 100)).toFixed(2)} zł
        </Text>
        <Text style={priceStyle}>{price} zł</Text>
        <Button style={cardButton} href="#">
          <Text style={buttonText}>KUP</Text>
        </Button>
      </Section>
    </Column>
  );
};

const card = {
  display: 'inline-block',
  width: '165px',
  height: '100%',
  background: '#FDFFA9',
  border: 'solid 2px #4B4D0B',
  borderRadius: '25px',
  padding: '10px',
  marginBottom: '20px',
  marginRight: '40px',
  textAlign: 'left' as const
};

const imgContainer = {
  width: '100%',
  height: '100px',
  marginBottom: '20px'
};

const cardImg = {
  width: '100%',
  height: '150px'
};

const cardTitle = {
  fontSize: '14px',
  marginBottom: '3px'
};

const cardBrand = {
  fontSize: '12px',
  marginBottom: '5px'
};

const priceContainer = {
  display: 'inline',
  marginTop: '20px',
  textAlign: 'center' as const
};

const discountPrice = {
  display: 'inline',
  fontSize: '16px',
  color: '#CD1515',
  fontWeight: 'bold',
  marginRight: '15px'
};

const priceStyle = {
  display: 'inline',
  fontSize: '12px',
  color: '#CD1515',
  fontWeight: 'medium',
  textDecoration: 'line-through'
};

const cardButton = {
  display: 'inline',
  width: '135px',
  height: '30px',
  color: '#4B4D0B',
  backgroundColor: '#FFD365',
  border: 'solid 2px #4B4D0B',
  borderRadius: '15px',
  marginTop: '20px',
  padding: '0 37px',
  textAlign: 'center' as const
};

const buttonText = {
  display: 'inline'
};
