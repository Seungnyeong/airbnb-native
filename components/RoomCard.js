import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";


const Container = styled.View`
    width: 100%;
    margin-bottom : 50px;
    align-items: flex-start;
`;

const Name = styled.Text`
    font-size: 17px;
    font-weight : 300;
    margin-bottom :  7px;
`;

const PriceContainer = styled.View`
    flex-direction : row;
`;

const PriceText = styled.Text`
    font-size : 16px;
`;

const PriceNumber = styled.Text`
    font-weight : 600;
`;

const Superhost = styled.View`
    padding: 3px 5px;
    border : 1px solid black;
    border-radius : 5px;
    margin-bottom : 5px;
`;

const SuperHostText = styled.Text`
    text-transform : uppercase;
    font-weight : 500;
    font-size : 10px;
`;


const RoomCard = ({id, isFav, isSuperHost, photos, name, price}) => (
    <Container>
        {isSuperHost ? 
            (<Superhost>
                <SuperHostText>SuperHOst</SuperHostText>
            </Superhost>)
            : null
        }
        <Name>{name}</Name>
        <PriceContainer>
            <PriceNumber>${price}</PriceNumber><PriceText>/ night</PriceText>
        </PriceContainer>
    </Container>
)

RoomCard.propTypes = {
    id : Pt.number.isRequired,
    isFav : Pt.bool.isRequired,
    isSuperHost: Pt.bool.isRequired,
    photos : Pt.arrayOf(
        Pt.shape({
            file: Pt.string
        })
    ),
    name: Pt.string.isRequired,
    price : Pt.number.isRequired
}

export default RoomCard;