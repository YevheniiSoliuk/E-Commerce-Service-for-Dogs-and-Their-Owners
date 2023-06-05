import {
  Button,
  Column,
  Img,
  Link,
  Section,
  Text
} from '@react-email/components';
import * as React from 'react';
import { IProduct } from '../../../../../interfaces/Order';

type EmailProductCardProps = {
  product: IProduct;
};

export const EmailProductCard: React.FC<EmailProductCardProps> = ({
  product
}) => {
  const { title, brand, price, discountAmount, images } = {
    ...product
  };

  return (
    <Column style={card}>
      <Section style={imgContainer}>
        <Link href="https://pet-goodies-shop.web.app/products">
          <Img src={images[0]} alt="product" style={cardImg} />
        </Link>
      </Section>
      <Text style={cardTitle}>{title}</Text>
      <Text style={cardBrand}>{brand.name}</Text>
      <Section style={priceContainer}>
        <Text style={discountPrice}>
          {(price - price * (discountAmount! / 100)).toFixed(2)} zł
        </Text>
        <Text style={priceStyle}>{price} zł</Text>
        <Button
          style={cardButton}
          href="https://pet-goodies-shop.web.app/products"
        >
          <Text style={buttonText}>ZŁAP</Text>
        </Button>
      </Section>
    </Column>
  );
};

const card = {
  display: 'inline-block',
  width: '20%',
  height: '350px',
  background: '#FDFFA9',
  border: 'solid 2px #4B4D0B',
  borderRadius: '25px',
  padding: '10px',
  marginBottom: '20px',
  marginRight: '20px',
  marginLeft: '20px',
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
  width: '100%',
  fontSize: '14px',
  marginBottom: '3px',
  overflow: 'hidden',
  whiteSpace: 'nowrap' as const,
  textOverflow: 'ellipsis'
};

const cardBrand = {
  fontSize: '12px',
  fontWeight: 'bold'
};

const priceContainer = {
  display: 'inline',
  margin: '30px 0',
  textAlign: 'center' as const
};

const discountPrice = {
  display: 'inline',
  fontSize: '20px',
  color: '#CD1515',
  fontWeight: 'bold',
  marginRight: '15px'
};

const priceStyle = {
  display: 'inline',
  fontSize: '14px',
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
  margin: '25px 0',
  padding: '0 37px',
  textAlign: 'center' as const
};

const buttonText = {
  display: 'inline',
  lineHeight: '200%',
  fontWeight: 'bold'
};
