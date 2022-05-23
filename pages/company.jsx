import { CompanyItem1 } from "../components/CompanyItems/CompanyItem1";
import { CompanyItem2 } from "../components/CompanyItems/CompanyItem2";
import { CompanyItem3 } from "../components/CompanyItems/CompanyItem3";
import { PageDescription } from "../components/PageDescription";

const Company = () => {
  return (
    <>
      <PageDescription
        title="The art of visualization is a combination of technical and artistic mastery."
        text="Our specialists are able to approach a level of photorealism that is unmatched by other forms of representation."
      />

      <CompanyItem1 />
      <CompanyItem2 />
      <CompanyItem3 />
    </>
  );
};

export default Company;
