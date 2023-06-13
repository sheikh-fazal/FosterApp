import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Documents from "../documents/Documents";
import { EHCPINFOTABSDATA } from ".";
import EhcpInfo from "../EhcpInfo";



const EhcpInfoTabs = () => {

  return (
    <HorizaontalTabs tabsDataArray={EHCPINFOTABSDATA}>
      <EhcpInfo />
      <Documents />
    </HorizaontalTabs>
  );
};

export default EhcpInfoTabs;
