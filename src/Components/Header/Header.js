import styled from "styled-components";

export default function Header() {
  return (
    <Heading>
      <h1>React and Morty</h1>
    </Heading>
  );
}

const Heading = styled.header`
  width: 100vw;
  height: 80px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;
