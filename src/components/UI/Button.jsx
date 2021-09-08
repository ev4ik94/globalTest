import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'


/*-----Style constants-------*/
import {color_purple} from "../../constants";

const ButtonStyle = styled.button`
    border: none;
    outline: none;
    padding: 20px 16px;
    border-radius: 50px;
    background-color: ${color_purple};
    cursor: pointer;
    color: #fff;
    width: 100%;
  
    ${props =>
            props.disabled && css `
              opacity: .3;
              cursor: default;
            `
    }
`

function Button({text, disabled=false, type='button'}){
    return(<ButtonStyle type={type} disabled={disabled}>{text}</ButtonStyle>)
}


Button.propTypes  = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string
}

export default Button
