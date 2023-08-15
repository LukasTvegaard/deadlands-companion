import { styled } from "styled-components";
import { PageHeader } from "./PageHeader";
import { Location, getPrevLocationFromURLParams } from "../../utils/Location";
import { useSearchParams } from "react-router-dom";

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
  prevLocation?: Location; // Indicate prevLocation unless overwritten by prevLocation from URL
  children: React.ReactNode;
};
const Page = ({ pageName, prevLocation, children }: PageProps) => {
  const [params] = useSearchParams();
  const urlPrevLocation = getPrevLocationFromURLParams(params);

  return (
    <>
      <PageHeader
        pageName={pageName}
        prevLocation={urlPrevLocation ?? prevLocation}
      />
      <PageContent id={"scrollable-content"}>
        <PageInner>{children}</PageInner>
      </PageContent>
    </>
  );
};

export default Page;
