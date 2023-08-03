import Styled from "styled-components";
import Colors from "../Colors";
const Nawdisplay = Styled.div`
display:flex;
flex-direction:row;
padding-top:24px;
padding-bottom:32px;
align-items:center;
text-align:center;
border-bottom:2px solid #f1f1f1;
justify-content: space-around;

`;

const Nawdisplayelements = Styled.div`
display:flex;
flex-direction:row;
align-items:center;

`;

const Navlogo = Styled.img`
padding:0;
`;

const NavelementsUl = Styled.ul`
display:flex;
flex-direction:row;

`;
const NavelementsLi = Styled.li`

margin:0 16px;
list-style-type: none;
position:relative;
font-size:18px;
font-weight:600;
color: ${Colors.blueGrayCrayola};
cursor:pointer;

&:hover::after {
    content:"";
    position:absolute;
    display: inline-block;
    background-color:red;
    left:0;
    margin:auto;
    width:100%;
    top:66px;
    height:3px;

}

&:hover {
    color: ${Colors.slateGray};



}


`;

const Profile = Styled.div`
    display: flex;
    flex-direction:row;
`;
const Shop = Styled.img`
    width: 22px;
    height: 22px;
    margin:auto;
    cursor:pointer;

`;
const Avatar = Styled.img`
    border-radius:50%;
    width: 40px;
    height: 40px;
    margin-left:24px;
    border:2px solid transparent;
    cursor:pointer;

    &:hover {
        content:"";
        border:2px solid ${Colors.orangeCrayola};
    
    }

`;

export {
  Nawdisplay,
  Nawdisplayelements,
  Navlogo,
  NavelementsUl,
  NavelementsLi,
  Profile,
  Avatar,
  Shop,
};
