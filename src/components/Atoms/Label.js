import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../styles/colors';

const labelSizes = {
    small: {
        'font-size': '16px',
        'line-height': '16px'
        },
    medium: {
        'font-size': '20px',
        'line-height': '20px'
        },
    large: {
        'font-size': '24px',
        'line-height': '24px'
        }
};

const Label = styled.label`
  color: ${({ color }) => color};
  font-size: ${({ size }) => labelSizes[size]['font-size']};
  line-height: ${({ size }) => labelSizes[size]['line-height']};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 8px 0;
  text-transform: ${({ textTransform }) => textTransform};
  transition: all 300ms ease;
`;

Label.propTypes = {
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  size: PropTypes.string,
  textTransform: PropTypes.string,
};
Label.defaultProps = {
  color: colors.lightCream,
  fontWeight: 600,
  size: 'medium',
  textTransform: 'none',
};
export default Label;