import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import utils from "../../utils";


const Container = styled.View`
    padding-left : 20px
`

export default () => <Container>
<Ionicons size={28} name={utils.isAndroid() ? "md-arrow-back" : "ios-arrow-back"} />
</Container>