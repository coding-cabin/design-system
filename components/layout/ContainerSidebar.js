import styled, { css } from "styled-components";
import { width, breakpoints } from "../../styles/variables";
// import StickyBox from "react-sticky-box";
import LinkList from "../ui/ListLink";

const Root = styled.section`
  position: relative;

  display: flex;
  align-items: flex-start;

  max-width: ${width.lg}px;
  margin: auto;

  @media (max-width: ${breakpoints.md}rem) {
    padding: 3.5rem 2rem;
    flex-direction: column;
  }
`;

const RootContent = styled.div`
  padding: 2.85rem 1.95rem;

  @media (max-width: 60rem) {
    margin-top: 1.85rem;
    padding: 0;
  }
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 0;
  min-width: 20rem;
  @media (min-width: 65rem) {
    padding: 2.85rem 1.95rem;
  }

  h1 {
    font-size: 1.5em;
    margin-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.md}rem) {
    position: unset;
    width: 100%;
    min-width: auto;
  }
`;

const ContainerSidebar = ({ children }) => {
  return (
    <>
      <Root>
        {/* <StickyBox
          offsetTop={0}
          offsetBottom={20}
          style={{ border: "3px solid green" }}
        >
          <Sidebar>Sidebar</Sidebar>
        </StickyBox> */}
        <Sidebar>
          <h1>Table of Contents</h1>
          <LinkList />
        </Sidebar>
        <RootContent>{children}</RootContent>
      </Root>
    </>
  );
};

export default ContainerSidebar;
