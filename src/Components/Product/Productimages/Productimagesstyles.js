import Styled from "styled-components";
import Colors from "../../Colors";
const Productimagedisplay = Styled.div`
    width:100%;
    display: flex;
    flex-direction:column;


`;

const Bigimage = Styled.img`
    width:100%;
    margin-bottom:20px;
    border-radius:16px;
    cursor:pointer;

`
const Imagecatalog = Styled.div`
    display: flex;
    flex-direction: row;
    gap:16px;
`
const Imagecatalogelement = Styled.img`
    border-radius:16px;
    width:100px;
    height:100px;
    border: 2px solid ${props => props.checked? Colors.lightCarminePink: "transparent"} ;
    cursor:pointer;
    &:hover{

        opacity:0.6;    
    }

`



export { Productimagedisplay,Bigimage, Imagecatalog,Imagecatalogelement };
