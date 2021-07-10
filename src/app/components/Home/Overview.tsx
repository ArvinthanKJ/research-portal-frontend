import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  top: 75vh;
  width: 60vw;
  left: 20vw;
  box-shadow: 4px 0px 21px rgba(0, 0, 0, 0.25),
    -4px 4px 22px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 80vw;
    left: 10vw;
    border-radius: 24px;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
    left: 5vw;
    border-radius: 16px;
  }
`;

const Overview = () => {
  return (
    <Container className="h-full bg-gray-300 absolute lg:p-9 md:p-6 p-4 flex justify-around items-start flex-col">
      <p className=" xl:text-7xl lg:text-6xl md:text-5xl text-3xl text-gray-800 border-b-2 border-gray-400 pb-3 font-bold">
        OVERVIEW
      </p>
      <p className="xl:text-2xl lg:text-xl md:text-lg text-sm text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus diam
        quam odio donec fringilla sed. Egestas pharetra, egestas consequat sit
        erat. Condimentum vel vestibulum, facilisi euismod id ornare fermentum
        ac. Bibendum turpis faucibus faucibus lectus cursus elementum. Suscipit
        mauris viverra pellentesque nisi, diam rhoncus vitae purus. Sed purus
        sed lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Senectus diam quam odio donec fringilla sed. Egestas pharetra, egestas
        consequat sit erat.
      </p>
    </Container>
  );
};

export default Overview;
