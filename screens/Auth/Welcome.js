import React from "react";
import styled from "styled-components/native";
import { StatusBar} from "react-native";
import { BlurView } from "expo-blur";
import Btn from "../../components/Auth/Btn";

const Container = styled.View`
    justify-content : center;
    align-items : center;
    flex: 1;
`;

const Image = styled.Image`
    position: absolute;
    z-index -1;
    top : 0
`;

const Logo = styled.Image`
    margin-top : 100px 
    width : 100px;
    height : 130px;
`;

const BtnContainer = styled.View`
    margin-top : 20px;
`;

export default ({ navigation }) => {
    const goToSignUp = () => navigation.navigate("SignUp")
    const goToSignIn = () => navigation.navigate("SignIn")
    return (
        <Container>
            
            <Image resizeMethod="scale" source={require("../../assets/loginBg.jpg")} />
            <BlurView intensity={50} tint="light" style={{ flex : 1, width : "100%", alignItems: "center", justifyContent: "center"}}>
                <Logo source={require("../../assets/airbnb-logo.png")} />
                <BtnContainer>
                    <Btn onPress={goToSignUp} text={"Sign Up"} accent={true} />
                    <Btn onPress={goToSignIn} text={"Sign In"} />
                </BtnContainer>
            </BlurView>
            <StatusBar barStyle="dark-content" />
        </Container>
    )
}