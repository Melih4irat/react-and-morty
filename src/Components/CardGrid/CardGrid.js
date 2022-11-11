import styled from "styled-components";
import Card from "../Card/Card";

export default function CardGrid({ characters }) {
  return (
    <CardSection>
      {characters.map(({ id, name, image, gender, status, species }) => {
        return (
          <Card
            characters={characters}
            characterId={id}
            key={id}
            name={name}
            image={image}
            gender={gender}
            status={status}
            species={species}
          />
        );
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
