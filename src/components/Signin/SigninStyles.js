import { styled } from 'styletron-react';
import { BodyText, Link, Button } from '../../ui';

export const LoginButton = styled(Button, {
  marginTop: '20px'
});

export const RegisterLink = styled(Link, {
  marginLeft: '20px'
});

export const RegisterText = styled(BodyText, {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});



