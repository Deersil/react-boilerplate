import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

const Button = styled(MaterialButton)`
  width: ${props => (props.wide ? '100%' : 'auto')};
`;

export default Button;
