import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import styled from 'styled-components';
import 'antd/lib/button/style/css';

const MyBitButtonStyle = styled.div`
  .ant-btn{
    color: ${props => props.styling.color};
    background-color: ${props => props.styling.backgroundColor};
    border-color: ${props => props.styling.borderColor};
    font-size: 14px;
    line-height: 1.5;
    &:focus,
    &:hover{
      background-color: ${props => props.styling.backgroundColorHover};
      border-color: ${props => props.styling.borderColorHover};
      color: ${props => props.styling.colorHover};
    }
    &--is-active,
    &:active{
      color: ${props => props.styling.colorActive};
      background-color: ${props => props.styling.backgroundColorActive};
      border-color: ${props => props.styling.borderColorActive};
    }
  }
  .ant-btn-clicked:after{
    border: 0 solid ${props => props.styling.color};
  }
`;

const MyBitButton = props => (
  <div>
    <MyBitButtonStyle styling={props.styling}>
      <Button
        className={props.active ? 'ant-btn--is-active' : ''}
        {...props}
      >
        {props.children}
      </Button>
    </MyBitButtonStyle>
  </div>
);

MyBitButton.propTypes = {
  styling: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

MyBitButton.defaultProps = {
  active: false,
};

export default MyBitButton;
