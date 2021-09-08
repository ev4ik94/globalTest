import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'


/*----Style constant----*/
import {color_light_grey, color_black, color_red} from "../../constants";

const InputStyle = styled.input`
    border: 2px solid ${color_light_grey};
    border-radius: 50px;
    outline: none;
    padding: 16px 14px;
    width: 100%;
    color: ${color_black};
    font-weight: 600;
      ${props =>
              props.error && css `
                  border-color: ${color_red};
                `
      }
`

const InputGroup = styled.div`
    position: relative;
    margin: 20px auto;
`

const Label = styled.label`
  position: absolute;
  top: -10px;
  font-weight: 400;
  left: 16px;
  color: ${color_black};
  font-size: 12px;
  background: white;
  pointer-events: none;

  ${props =>
          props.error && css `
                  color: ${color_red};
                `
  }
`

const ErrorsMessage = styled.span`
  color: ${color_red};
  font-size: 12px;
  font-weight: 400;
  padding-left: 15px;
`

const InputButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  top: 25%;
  right: 13px;
`


function Input({
                   register,
                   name,
                   required=false,
                   label=null,
                   type='text',
                   error={},
                   button=null,
                   buttonFunc = null,
                   ...rest }){

    return(
        <InputGroup>
            {label?(<Label error={error[name]}>{label}</Label>):''}
            <InputStyle {...register(name, {required})} error={error[name]} type={type} {...rest}/>
            {button?(<InputButton onClick={(e)=>{
                e.preventDefault()
                buttonFunc()
            }}>{button}</InputButton>): ''}
            {error[name] && <ErrorsMessage>{error[name].message.length?error[name].message:'Эта строка необходима для заполнения'}</ErrorsMessage>}
        </InputGroup>
    )
}

Input.prototype = {
    type: PropTypes.string,
    label: PropTypes.string,
    register: PropTypes.func,
    name: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.object,
    button: PropTypes.any,
    buttonFunc: PropTypes.func

}


export default Input
