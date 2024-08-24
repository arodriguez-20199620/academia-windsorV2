import { CorporateClassesSection, PrivateClassesSection, GroupClassesSection } from "./components";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const PlansPage = () => {
  useDocumentTitle('Academia Windsor | Planes')
  return (
    <div>
      <>
        <CorporateClassesSection />
        <PrivateClassesSection />
        <GroupClassesSection />
      </>
    </div>
  );
};

export default PlansPage;
