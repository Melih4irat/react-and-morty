import styled from "styled-components";
import useFetch from "../../Hooks/useFetch";
import Card from "../Card/Card";

export default function CardGrid() {
  const [characters, setCharacters] = useFetch(
    "https://rickandmortyapi.com/api/character",
    "results"
  );

  return (
    <CardSection>
      {characters.map(({ id, name, ...charackterPic }) => {
        return <Card key={id} name={name} charackterPic={charackterPic} />;
      })}
    </CardSection>
  );
}

const CardSection = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f4d03f;
  background-image: linear-gradient(132deg, #f4d03f 0%, #16a085 100%);
  padding-top: 20px;
`;
