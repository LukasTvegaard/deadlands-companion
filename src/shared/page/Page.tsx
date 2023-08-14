import { useRef } from "react";
import { styled } from "styled-components";
import { PageHeader } from "./PageHeader";
import { Location } from "../../utils/Location";

const PageContent = styled.div`
  padding-top: 8px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
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
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <PageHeader pageName={pageName} prevLocation={prevLocation} />
      <PageContent id={"scrollable-content"} ref={pageRef}>
        <PageInner>{children}</PageInner>
      </PageContent>
    </>
  );
};

export default Page;