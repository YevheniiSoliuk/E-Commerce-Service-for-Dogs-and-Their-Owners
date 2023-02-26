import { DeliveryInfo } from './DeliveryInfo';
import { PaymentMethodsSection } from './PaymentMethodsSection/PaymentMethodsSection';
import { DeliveryMethodsSection } from './DeliveryMethods/DeliveryMethodsSection';
import { SummarySection } from './SummarySection';

export const Order = () => {
  return (
    <main className="my-[50px] mx-[100px]">
      <h2 className="text-[40px] text-center">Realizacja zamówienia</h2>
      <div className="mt-[50px]">
        <div className="flex items-start justify-between">
          <DeliveryInfo />
          <PaymentMethodsSection />
        </div>
        <div className="flex items-start justify-between mt-[40px]">
          <DeliveryMethodsSection />
          <SummarySection />
        </div>
      </div>
    </main>
  );
};