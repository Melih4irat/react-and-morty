import styled from "styled-components";
import { FaBookmark } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function Card({
  characters,
  characterId,
  name,
  image,
  gender,
  status,
  species,
}) {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);
  console.log(characters);
  if (id) {
    const handleClick = (event) => {
      // 👇️ toggle shown state
      setIsShown((current) => !current);
    };
    const characterToDisplay = characters.find(
      (character) => character.id === Number(id)
    );
    console.log(characterToDisplay);
    return (
      <CharacterCard>
        <Bookmarked>
          <FaBookmark />
        </Bookmarked>
        <Picture
          src={characterToDisplay.image}
          alt={characterToDisplay.name}
        ></Picture>
        <NameHeading>{characterToDisplay.name}</NameHeading>
        <InfoButton onClick={handleClick}>
          {isShown ? "Close Information" : "More Information"}
        </InfoButton>
        {isShown && (
          <TagList>
            <li>status: {characterToDisplay.status}</li>
            <li>species: {characterToDisplay.species}</li>
            <li>gender: {characterToDisplay.gender}</li>
          </TagList>
        )}
      </CharacterCard>
    );
  } else {
    return (
      <CharacterCard>
        <Bookmarked>
          <FaBookmark />
        </Bookmarked>
        <Picture src={image} alt={name}></Picture>
        <NameHeading>{name}</NameHeading>
        <NavigateButton onClick={() => navigate("/characters/" + characterId)}>
          More Information
        </NavigateButton>
      </CharacterCard>
    );
  }
}

const CharacterCard = styled.article`
  width: 350px;
  height: 420px;
  margin: 10px 10px;
  position: relative;
  padding-top: 20px;

  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const NameHeading = styled.h2`
  margin: 15px 0;
`;

const Picture = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
const Bookmarked = styled.div`
  position: absolute;
  top: -7px;
  right: 20px;
  font-size: 30px;
  :hover {
    color: blue;
  }
`;
const NavigateButton = styled.button`
  width: 150px;
  height: 35px;
  background-color: blue;
  color: white;
  border-radius: 25px;
  border: none;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
const InfoButton = styled.button`
  width: 150px;
  height: 35px;
  background-color: blue;
  color: white;
  border-radius: 25px;
  border: none;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  const TagList = styled.ul
`;
const TagList = styled.ul`
  display: flex;
  justify-content: center;

  li {
    list-style-type: none;
    margin: 5px 5px;
  }
`;
