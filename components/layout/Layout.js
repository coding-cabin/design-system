import styled from "styled-components";
import SEO from "./SEO";
import reset from "../../styles/reset";
import Header from "./Header";
import Footer from "./Footer";

const Root = styled.main`
  min-height: 100vh;
`;

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <SEO pageTitle={pageTitle} />
      <style jsx global>
        {reset}
      </style>
      <Header />
      <Root>{children}</Root>
      <Footer>&copy; 2020 Coding Cabin. All rights reserved.</Footer>
    </>
  );
}
