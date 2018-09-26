import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../styles/colors';

const textboxSizes = {
    small: {
        'width': '144px',
        'height': '24px',
        'font-size': '20px',
        margin: '8px'
        },
    medium: {
        'width': '216px',
        'height': '28px',
        'font-size': '24px',
        margin: '8px'
        },
    large: {
        'width': '288px',
        'height': '32px',
        'font-size': '28px',
        margin: '8px'
        }
};

const Textbox = styled.input.attrs({
    type: 'text',
    
})`
  display: inline-block;
  border-radius: 5px;
  border: 3px solid;
  border-color: ${({ borderColor }) => borderColor}
  margin: ${({ size }) => textboxSizes[size]['margin']};
  width: ${({ size }) => textboxSizes[size]['width']};
  height: ${({ size }) => textboxSizes[size]['height']};
  font-size: ${({ size }) => textboxSizes[size]['font-size']};s
  color: ${({ color }) => colors[color]};
`;

Textbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  borderColor: PropTypes.string
};
Textbox.defaultProps = {
  color: 'black',
  size: 'medium',
  borderColor: colors.lightCream
};
export default Textbox;