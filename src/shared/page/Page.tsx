import { styled } from "styled-components";
import { PageHeader } from "./PageHeader";

const PageContent = styled.div`
  padding-top: 8px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

const PageInner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 12px;
`;

type PageProps = {
  pageName: string;
  prevLocation?: {
    path: string;
    name: string;
  };
  children: React.ReactNode;
};
const Page = ({ pageName, prevLocation, children }: PageProps) => {
  return (
    <>
      <PageHeader pageName={pageName} prevLocation={prevLocation} />
      <PageContent>
        <PageInner>{children}</PageInner>
      </PageContent>
    </>
  );
};

export default Page;
