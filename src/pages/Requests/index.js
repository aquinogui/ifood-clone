import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Container,
  Wrapper,
  Warning,
  Suggestion,
  Message,
} from './styles';

import Lottie from '../../components/Lottie';

export default function Requests() {
  const [requests, setRequests] = useState(null);

  return (
    <Container>
      {requests ? (
        <View />
      ) : (
        <Wrapper>
          <Lottie src={"panela"} />
          <Warning>Nenhum pedido em andamento</Warning>
          <Message>
            <Suggestion>Que tal experimentar um lugar novo?</Suggestion>
            <Suggestion>É só selecionar Início</Suggestion>
          </Message>
        </Wrapper>
      )}
    </Container>
  );
}

Requests.navigationOptions = {
  title: 'ANDAMENTO',
};
