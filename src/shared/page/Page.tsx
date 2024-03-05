import { styled } from "styled-components";

import { Location } from "../../utils/Location";
import { PageHeader } from "./PageHeader";

const PageContent = styled.div`
  margin-top: 8px;
  margin-left: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  @media (min-width: 800px) {
    align-self: center;
    min-width: 800px;
    max-width: 800px;
  }
`;

const PageInner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 12px;
`;

type PageProps = {
  pageName: string;
  prevLocation?: Location;
  children: React.ReactNode;
};
const Page = ({ pageName, prevLocation, children }: PageProps) => {
  return (
    <>
      <PageHeader pageName={pageName} prevLocation={prevLocation} />
      <PageContent id={"scrollable-content"}>
        <PageInner>{children}</PageInner>
      </PageContent>
    </>
  );
};

export default Page;
