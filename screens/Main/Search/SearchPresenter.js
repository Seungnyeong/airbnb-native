import React, {useState} from "react";
import styled from "styled-components/native";
import DismissKeyboard from "../../../components/Auth/DismissKeyboard";
import { ActivityIndicator } from "react-native";
import colors from "../../../colors";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View``;

const SearchContainer = styled.View`
    flex-direction : row;
    margin-top : 60px;
    justify-content : space-between;
    align-items : center;
    padding : 10px 20px;
`;

const SearchBar = styled.TextInput`
    height: 40px;
    width: 80%;
    background-color : white;
    margin-bottom : 10px;
    
    box-shadow: 1px 5px 5px rgba(200,200,200, 0.5);
    border-radius: 12px;
    justify-content : center;
    padding-left: 10px;
`;

const CancelContainer = styled.TouchableOpacity``;

const CancelText = styled.Text``;

const FiltersContainer = styled.ScrollView`
  flex-direction: row;
  margin-top: 10px;
`;

const FilterContainer = styled.View`
  align-items: center;
  margin-right: 4px;
`;

const FilterLabel = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Filter = styled.TextInput`
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 2.5px 2.5px rgba(200, 200, 200, 0.5);
  width: 80px;
`;

const SearchBtn = styled.TouchableOpacity`
    background-color : ${colors.green};
    padding: 10px;
    margin : 0px 30px;
    border-radius : 10px;
    align-items : center;
`;

const SearchText = styled.Text`
    color : white;
    font-weight : 600;
    font-size : 16px;
`;

const ResultsText = styled.Text`
    margin-top : 10px;
    text-align : center;
    font-size : 16px;
`;

const Results = styled.ScrollView`
    margin-top : 25px;
`;


export default (
    {
        navigation,
        beds,
        setBeds,
        bedrooms,
        setBedrooms,
        bathrooms,
        setBathrooms,
        maxPrice,
        setMaxPrice,
        searching,
        triggerSearch,
        results
    }) => (
    <DismissKeyboard>
        <>
        <Container>
            <SearchContainer>
                <SearchBar autoFocus={true} placeholder="Search by city..." />
                <CancelContainer onPress={() => navigation.goBack()}>
                    <CancelText>Cancel</CancelText>
                </CancelContainer>
            </SearchContainer>
                <FiltersContainer
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 20 }}
                >
                <FilterContainer>
                    <FilterLabel>Beds</FilterLabel>
                    <Filter 
                        value={beds} 
                        placeholder="0" 
                        keyboardType={"number-pad"} 
                        onChangeText={text => setBeds(text)}
                    />
                </FilterContainer>
                <FilterContainer>
                    <FilterLabel>Bedrooms</FilterLabel>
                    <Filter 
                        value={bedrooms} 
                        placeholder="0" 
                        keyboardType={"number-pad"} 
                        onChangeText={text => setBedrooms(text)}
                    />
                </FilterContainer>
                <FilterContainer>
                    <FilterLabel>Bathrooms</FilterLabel>
                    <Filter 
                        value={bathrooms} 
                        placeholder="0" 
                        keyboardType={"number-pad"}
                        onChangeText={text => setBathrooms(text)}
                    />
                </FilterContainer>
                <FilterContainer>
                    <FilterLabel>Max. price</FilterLabel>
                    <Filter 
                        value={maxPrice} 
                        placeholder="$0" 
                        keyboardType={"number-pad"} 
                        onChangeText={text => setMaxPrice(text)}
                    />
                </FilterContainer>
            </FiltersContainer>
        </Container>
        <SearchBtn onPress={searching ? null : triggerSearch}>
            { searching ? <ActivityIndicator color="white" /> : <SearchText>
                Search
            </SearchText>}
        </SearchBtn>
        {results ?
        <ResultsText>Showing {results.count} results</ResultsText>
        : null
        }
        <Results contentContainerStyle={{ paddingHorizontal : 30 }}>
        {results?.results?.map(room => <RoomCard 
                                    key={room.id} 
                                    name={room.name}
                                    price={room.price}
                                    photos={room.photos}
                                    id={room.id}
                                    isSuperHost={room.user.superhost}
                                    isFav={room.is_fav}
                                    roomObj={room}
                                />)}
        </Results>
        </>
    </DismissKeyboard>
)
