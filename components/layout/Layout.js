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
      <Footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere
        quod aliquid non quas soluta voluptatum, perspiciatis est, fugiat
        exercitationem esse! Soluta id eos vitae, exercitationem sunt mollitia
        obcaecati quisquam.
      </Footer>
    </>
  );
}
