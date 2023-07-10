import VipCustomer from "./vip-customer/VipCustomer";
import Customer from "./customer/Customer";
import PorchCamPartner from "./porchcam-partner/PorchCamPartner";
import Influencer from "./influencer/Influencer";
export const data = [
    {
      title: "VIP Customer",
        component: <VipCustomer />
    },
    {
      title: "Customer",
        component: <Customer />
    },
    {
      title: "PorchCam Partner",
        component: <PorchCamPartner />
    },
    {
      title: "Influencer",
        component: <Influencer />
    }
  ];