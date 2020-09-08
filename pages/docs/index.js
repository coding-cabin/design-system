import styled from "styled-components";

import Layout from "../../components/layout/Layout";
import ContainerSidebar from "../../components/layout/ContainerSidebar";

import BreadCrumbs from "../../components/ui/Breadcrumbs";

import { colors } from "../../styles/variables";

const Title = styled.h1`
  margin-bottom: 0.65rem;
  color: ${colors.headingColor};
`;

const Text = styled.p`
  color: ${colors.bodyColor};
`;

export default function About() {
  return (
    <>
      <Layout pageTitle="Docs">
        <BreadCrumbs title="docs"></BreadCrumbs>
        <ContainerSidebar>
          <Title>Documentation</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a
            diam sollicitudin tempor id. Id consectetur purus ut faucibus
            pulvinar elementum. Elementum sagittis vitae et leo duis ut diam
            quam nulla. Sodales ut etiam sit amet nisl purus in mollis nunc.
            Tempus egestas sed sed risus. Vulputate enim nulla aliquet porttitor
            lacus luctus. Vel fringilla est ullamcorper eget nulla facilisi
            etiam dignissim diam. In nulla posuere sollicitudin aliquam ultrices
            sagittis orci a. Est ante in nibh mauris. Orci a scelerisque purus
            semper eget duis at. Enim neque volutpat ac tincidunt vitae.
            Eleifend mi in nulla posuere. Id ornare arcu odio ut. Nunc consequat
            interdum varius sit. Felis eget nunc lobortis mattis. Tortor
            dignissim convallis aenean et tortor at risus. Cras fermentum odio
            eu feugiat pretium nibh ipsum consequat. Tristique sollicitudin nibh
            sit amet commodo. Nunc aliquet bibendum enim facilisis gravida
            neque. Dolor sit amet consectetur adipiscing elit pellentesque
            habitant morbi. Donec ultrices tincidunt arcu non sodales. Lacinia
            at quis risus sed vulputate odio ut enim blandit. Molestie nunc non
            blandit massa enim nec dui nunc mattis. Netus et malesuada fames ac
            turpis egestas sed. Leo a diam sollicitudin tempor id eu nisl. Non
            consectetur a erat nam. Pharetra vel turpis nunc eget lorem dolor
            sed viverra ipsum. Lectus quam id leo in. Nunc lobortis mattis
            aliquam faucibus purus in. Tristique sollicitudin nibh sit amet
            commodo nulla facilisi nullam. Magna etiam tempor orci eu lobortis
            elementum. At imperdiet dui accumsan sit amet nulla facilisi. Aenean
            vel elit scelerisque mauris pellentesque pulvinar pellentesque. Amet
            venenatis urna cursus eget nunc scelerisque viverra mauris. Volutpat
            est velit egestas dui. Hac habitasse platea dictumst quisque
            sagittis. Ante in nibh mauris cursus mattis molestie a iaculis at.
            Nunc pulvinar sapien et ligula. Vitae turpis massa sed elementum
            tempus egestas sed sed risus. Cras sed felis eget velit aliquet
            sagittis id consectetur purus. Nisi scelerisque eu ultrices vitae.
            Faucibus purus in massa tempor nec feugiat. Eu nisl nunc mi ipsum
            faucibus vitae. Mi sit amet mauris commodo quis imperdiet. Viverra
            nibh cras pulvinar mattis nunc sed blandit libero. Id interdum velit
            laoreet id donec ultrices tincidunt arcu. Magna sit amet purus
            gravida quis blandit turpis cursus in. Velit aliquet sagittis id
            consectetur purus ut faucibus pulvinar elementum. Non pulvinar neque
            laoreet suspendisse interdum. Ultrices tincidunt arcu non sodales.
            Adipiscing tristique risus nec feugiat in fermentum posuere urna.
            Arcu cursus euismod quis viverra nibh cras pulvinar. Feugiat nisl
            pretium fusce id velit. Et tortor consequat id porta nibh venenatis
            cras. Massa id neque aliquam vestibulum morbi. Hac habitasse platea
            dictumst quisque sagittis purus sit. Scelerisque viverra mauris in
            aliquam sem fringilla ut morbi tincidunt. Justo donec enim diam
            vulputate ut pharetra sit amet aliquam. Tortor dignissim convallis
            aenean et. Nibh sit amet commodo nulla facilisi. Sit amet mattis
            vulputate enim. Cursus metus aliquam eleifend mi in nulla posuere.
            Nunc scelerisque viverra mauris in aliquam sem. Euismod lacinia at
            quis risus sed. Feugiat sed lectus vestibulum mattis. Nibh sed
            pulvinar proin gravida. Pellentesque pulvinar pellentesque habitant
            morbi tristique senectus et netus. Viverra ipsum nunc aliquet
            bibendum enim facilisis. Eu mi bibendum neque egestas congue quisque
            egestas diam. Integer vitae justo eget magna fermentum iaculis eu
            non. Bibendum at varius vel pharetra. Eu augue ut lectus arcu
            bibendum at. Fermentum odio eu feugiat pretium nibh ipsum consequat.
            Euismod elementum nisi quis eleifend quam adipiscing vitae proin.
            Sed euismod nisi porta lorem mollis. Eget nunc lobortis mattis
            aliquam faucibus purus. Neque egestas congue quisque egestas diam in
            arcu. Cras semper auctor neque vitae tempus quam. Velit egestas dui
            id ornare arcu odio ut sem nulla. Et egestas quis ipsum suspendisse
            ultrices gravida. Rhoncus urna neque viverra justo.
          </Text>
        </ContainerSidebar>
      </Layout>
    </>
  );
}
