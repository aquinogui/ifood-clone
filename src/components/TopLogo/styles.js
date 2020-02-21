import styled from 'styled-components/native';

import toplogo from '../../assets/toplogo.png';

export const Container = styled.View`
  padding: 10px 10px;
  margin: auto;
`;

export const ImageLogo = styled.Image.attrs({
    source: toplogo
  })`
    width: 150px;
    height: 80px;
  `;
