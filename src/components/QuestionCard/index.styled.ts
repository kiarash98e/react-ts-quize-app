import styled from 'styled-components'

export const Wrapper = styled.div`
max-width:1100px;
background:#ebfeff;
border-radius:10px;
border: 2px solid #0085a3;
padding: 20px;
box-shadow:0 5px 10px rgba(0,0,0,.25);
p {
    font-size:1rem;
}
` 
type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
  }

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
transition: all .3s ease;
:hover{
    opacity: 0.8;
    
}
button{
    cursor: pointer;
    user-select:none;
    font-size:.8rem;
    width:100%;
    height:40px;
    margin:5px 0;
    background: ${({ correct, userClicked }) =>
      correct && userClicked
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        // :'linear-gradient(90deg , #f00)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ffeec4, #ffBC86)'
        : 'linear-gradient(90deg, #bbb, #bbb)'
    };
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size:rem;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    
}
`