import { styled } from "styled-components";
import { PageHeader } from "./PageHeader";

export const PageContent = styled.div`
  padding-top: 8px;
  padding-right: 4px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
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
      <PageContent>{children}</PageContent>
    </>
  );
};

export default Page;
