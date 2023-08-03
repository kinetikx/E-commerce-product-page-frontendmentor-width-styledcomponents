import React from "react";
import {
  Nawdisplay,
  Nawdisplayelements,
  Navlogo,
  NavelementsUl,
  NavelementsLi,
  Profile,
  Avatar,
  Shop,
  
} from "./Navbarstyle.js";
import logo from "../../Assets/logo.svg";
import shop from "../../Assets/shop.svg";
import avatar from "../../Assets/image-avatar.png";
const Navbar = () => {
  return (
    <Nawdisplay>
      <Nawdisplayelements>
        <Navlogo src={logo} />
        <NavelementsUl>
          <NavelementsLi>
            <a>Collections</a>
          </NavelementsLi>
          <NavelementsLi>
            <a>Man</a>
          </NavelementsLi>
          <NavelementsLi>
            <a>Women</a>
          </NavelementsLi>
          <NavelementsLi>
            <a>About</a>
          </NavelementsLi>
          <NavelementsLi>
            <a>Contact</a>
          </NavelementsLi>
        </NavelementsUl>
      </Nawdisplayelements>
      <Profile>
        <Shop src={shop} />
        <Avatar src={avatar}/>
      </Profile>
    </Nawdisplay>
  );
};

export default Navbar;
