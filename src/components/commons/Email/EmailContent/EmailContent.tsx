import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text
} from '@react-email/components';
import * as React from 'react';

import { IProduct } from '../../../../interfaces/Order';
import { EmailProductCard } from './EmailProductCard/EmailProductCard';

import './styles.css';

type EmailContentProps = {
  discountProducts: IProduct[];
  name: string;
};

export const EmailContent: React.FC<EmailContentProps> = ({
  discountProducts,
  name
}) => {
  return (
    <Container style={body}>
      <Container style={header}>
        <Text style={h2}>
          Dla wszystkich miłośników psów: Niesamowite okazje w środku!
        </Text>
      </Container>
      <Container style={logoContainer}>
        <Section style={logoStyle}>
          <Img
            src={
              'https://firebasestorage.googleapis.com/v0/b/pet-goodies-shop.appspot.com/o/email-images%2Fmail-logo.png?alt=media&token=200bf1f7-4d56-4ccb-b91b-e25a953e4d18&_gl=1*prsh0q*_ga*MTc4MTY3MzA1NC4xNjc2Njc2NDA0*_ga_CW55HF8NVT*MTY4NTk3MjEyNC40MC4xLjE2ODU5NzIzMDMuMC4wLjA.'
            }
            alt="Paw Paw Shop logo"
            style={logoImg}
          />
          <Row style={menu}>
            <Link
              href="https://pet-goodies-shop.web.app/products"
              style={menuLink1}
            >
              Karma
            </Link>
            <Link
              href="https://pet-goodies-shop.web.app/products"
              style={menuLink2}
            >
              Akcesoria
            </Link>
            <Link
              href="https://pet-goodies-shop.web.app/products"
              style={menuLink3}
            >
              Zdrowie
            </Link>
            <Link
              href="https://pet-goodies-shop.web.app/products"
              style={menuLink4}
            >
              Zabawki
            </Link>
          </Row>
        </Section>
        <Section style={banner}>
          <Img
            src="https://zooart.com.pl/data/include/cms/Royal-Canin/karmy-dla-psow-royal-canin.jpg"
            alt="Banner"
            style={bannerImg}
          />
          <Button href="https://pet-goodies-shop.web.app/" style={bannerButton}>
            <Text style={buttonText}>Zgarnij rabat</Text>
          </Button>
        </Section>
        <Section style={text}>
          <Text>
            Wyjątkowe okazje dla miłośników psów! {name} wejdź do naszego sklepu
            i odkryj niesamowite oferty na produkty dla Twojego pupila.
            Oferujemy znaczne rabaty na wyżywienie, akcesoria i zabawki.
            Znajdziesz u nas wysokiej jakości karmę, wygodne legowiska oraz
            modne obroże. Nie czekaj dłużej! To doskonały czas, aby zaopatrzyć
            się w najlepsze produkty dla swojego psa. Kliknij tutaj, aby
            zobaczyć naszą pełną ofertę. Zadbaj o szczęście swojego pupila już
            dziś!
          </Text>
        </Section>
        <Section style={productsContainer}>
          {discountProducts.slice(0, 3).map((discountProduct) => (
            <EmailProductCard
              key={discountProduct.id}
              product={discountProduct}
            />
          ))}
        </Section>
        <Section style={text}>
          <Text>
            Nie czekaj dłużej! Odwiedź nasz sklep internetowy i skorzystaj z
            tych niepowtarzalnych rabatów. Twojemu psu należy się tylko to, co
            najlepsze.
          </Text>
          <Text>
            Pamiętaj, że nasz zespół jest zawsze gotowy, aby odpowiedzieć na
            Twoje pytania i zapewnić Ci kompleksową obsługę. Jesteśmy dumni z
            naszej pasji do psów i chcemy, abyś podzielał ją razem z nami.
          </Text>
          <Text>Dziękujemy za zaufanie i życzymy Ci wspaniałych zakupów!</Text>
          <Text>Z psem w sercu, Zespół sklepu internetowego dla psów.</Text>
        </Section>
      </Container>
      <Container style={footer}>
        <Column>
          <Text style={h2}>Adres</Text>
          <Text style={street}>Lublin, Nadbystrycka 44</Text>
          <Link href="https://goo.gl/maps/rAM9Kc8Yjt7VCjat7" style={link}>
            <Img
              src={
                'https://firebasestorage.googleapis.com/v0/b/pet-goodies-shop.appspot.com/o/email-images%2Fplace-marker.png?alt=media&token=c65c5c82-0009-407b-b7e6-16f09f14069c&_gl=1*9szf8p*_ga*MTc4MTY3MzA1NC4xNjc2Njc2NDA0*_ga_CW55HF8NVT*MTY4NTk3MjEyNC40MC4xLjE2ODU5NzIyODYuMC4wLjA.'
              }
              alt="GeoCon"
              style={linkImg}
            />
            <Text style={linkText}>Sprawdź na mapie</Text>
          </Link>
        </Column>
        <Column style={contact}>
          <Text style={contactH2}>Kontakt</Text>
          <Container style={socialIcons}>
            <Link
              href="https://www.facebook.com/profile.php?id=100041035039263"
              target="_blank"
            >
              <Img
                src={
                  'https://firebasestorage.googleapis.com/v0/b/pet-goodies-shop.appspot.com/o/email-images%2Ffacebook.png?alt=media&token=305e9f79-b70b-4710-8db4-bcf3f9989336&_gl=1*j6onq8*_ga*MTc4MTY3MzA1NC4xNjc2Njc2NDA0*_ga_CW55HF8NVT*MTY4NTk3MjEyNC40MC4xLjE2ODU5NzIyMjMuMC4wLjA.'
                }
                style={iconLink}
                alt="FBICon"
              />
            </Link>
            <Link href="https://twitter.com/" target="_blank">
              <Img
                src={
                  'https://firebasestorage.googleapis.com/v0/b/pet-goodies-shop.appspot.com/o/email-images%2Ftwitter.png?alt=media&token=3971e629-0cf9-42a7-9475-6c5cfc3f3e24&_gl=1*tmhc5l*_ga*MTc4MTY3MzA1NC4xNjc2Njc2NDA0*_ga_CW55HF8NVT*MTY4NTk3MjEyNC40MC4xLjE2ODU5NzIyNjguMC4wLjA.'
                }
                style={iconLink}
                alt="TwitterCon"
              />
            </Link>
            <Link href="https://www.instagram.com/svikt02/" target="_blank">
              <Img
                src={
                  'https://firebasestorage.googleapis.com/v0/b/pet-goodies-shop.appspot.com/o/email-images%2Finstagram.png?alt=media&token=fef59fa8-0922-4cfe-922d-d0f89ca175c7&_gl=1*mx5kxw*_ga*MTc4MTY3MzA1NC4xNjc2Njc2NDA0*_ga_CW55HF8NVT*MTY4NTk3MjEyNC40MC4xLjE2ODU5NzIyNTAuMC4wLjA.'
                }
                style={iconLink}
                alt="InstaCon"
              />
            </Link>
          </Container>
        </Column>
      </Container>
      <Container style={disclaimer}>
        <Text>
          Otrzymujesz tę wiadomość e-mail, ponieważ poprosiłeś o otrzymywanie od
          nas aktualizacji.
        </Text>
        <Link href="#" style={unsubLink}>
          Wypisz się z subskrypcji
        </Link>
        <Text>© 2023 PawPawShop.com</Text>
      </Container>
    </Container>
  );
};

const body = {
  width: '940px',
  maxWidth: '100%',
  height: '100%',
  color: '#4B4D0B',
  backgroundColor: '#0b926580',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const header = {
  maxWidth: '100%',
  height: '70px',
  background: '#FDFFA9',
  textAlign: 'center' as const
};

const h2 = {
  fontSize: '20px',
  fontWeight: 'bold'
};

const logoContainer = {
  maxWidth: '100%',
  margin: '20px 0',
  padding: '0 20px'
};

const logoStyle = {
  height: '100%'
};

const logoImg = {
  width: '205px',
  height: '70px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const menu = {
  maxWidth: '100%',
  margin: '30px 0',
  fontSize: '20px',
  fontWeight: 'medium',
  color: '#FDFFA9',
  textDecoration: 'none',
  textAlign: 'center' as const
};

const menuLink1 = {
  color: '#FDFFA9'
};

const menuLink2 = {
  color: '#FDFFA9',
  margin: '0 20px'
};

const menuLink3 = {
  color: '#FDFFA9'
};

const menuLink4 = {
  color: '#FDFFA9',
  marginLeft: '20px'
};

const banner = {
  width: '100%',
  height: '150px',
  textAlign: 'center' as const
};

const bannerImg = {
  width: '100%'
};

const bannerButton = {
  width: '30%',
  background: '#FFD365',
  border: 'solid 2px #4B4D0B',
  borderRadius: '20px',
  textAlign: 'center' as const,
  marginTop: '20px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const buttonText = {
  fontSize: '16px',
  color: '#4B4D0B'
};

const text = {
  fontSize: '16px',
  marginTop: '27px',
  marginBottom: '27px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '0 50px'
};

const productsContainer = {
  display: 'flex',
  width: 'auto',
  textAlign: 'center' as const
};

const footer = {
  maxWidth: '100%',
  height: '150px',
  backgroundColor: '#FDFFA9',
  padding: '0 15%'
};

const street = {
  margin: '21px 0'
};

const link = {
  textDecoration: 'underline',
  marginTop: '50px 0'
};

const linkImg = {
  display: 'inline-block',
  marginRight: '10px',
  width: '7%'
};

const linkText = {
  display: 'inline-block',
  textDecoration: 'underline',
  color: '#FFD365'
};

const contact = {
  display: 'table-header-group'
};

const contactH2 = {
  ...h2,
  margin: '20px 0'
};

const socialIcons = {
  display: 'block',
  marginTop: '20px'
};

const iconLink = {
  display: 'inline-block',
  cursor: 'pointer',
  marginRight: '10px'
};

const disclaimer = {
  maxWidth: '100%',
  margin: '22px 0',
  fontSize: '14px',
  fontWeight: 'light',
  textAlign: 'center' as const
};

const unsubLink = {
  fontSize: '16px',
  fontWeight: 'normal',
  textDecoration: 'underline',
  color: '#FDFFA9'
};
