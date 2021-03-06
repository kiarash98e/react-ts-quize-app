import styled,{createGlobalStyle} from 'styled-components'

import BGImage from './images/nattu-adnan-unsplash.jpg'

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
    width:100%;
}
body{
    background-image: url(${BGImage});
    background-size: cover;
    margin:0;
    padding: 0 20px;
    display:flex;
    justify-content:center;
    width:100%;
    height:100%;
}
*{
    box-sizing:border-box;
    font-family:'Catamaran',sans-serif;
}
`

export const Warraper = styled.div`
display:flex;
flex-direction:column;
align-items:center;

> p {
    color:#fff;

}
.score{
    color:#fff;
    font-size:2rem;
    margin:0
}
h1{
    background-image: linear-gradient(180deg,#fff,#876166);
    background-size: 100%;
    background-clip: text;
    --webkit-background-clip: text;
    --webkit-background-fill-color:transparent;
    --moz-background-clip:text;
    --moz-background-fill-color:transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size:45px;
    text-align:center;
    margin:20px;
}
.start,.next{
    cursor:pointer;
    background-image: linear-gradient(180deg,#fff,#ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
}
.start{
    max-width: 200px;
}

`