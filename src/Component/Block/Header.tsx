// import styled from "styled-components";
// import { BsChevronDown, BsSearch } from "react-icons/bs";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <div>
//       <Container>
//         <Main>
//           <Logo src={"./footer_logo.png"} />

//           <NavHolder>
//             <Nav>
//               HOME
//               <IconDown />
//             </Nav>
//             <Nav> ABOUT </Nav>
//             <Nav>
//               SERVICE <IconDown />
//             </Nav>
//             <Nav>
//               DOWNLOAD APP <IconDown />
//             </Nav>
//             <Nav> CONTACT </Nav>
//             <Nav> BOOK APPOINTMENT </Nav>
//             <Nav> LOGIN</Nav>
//           </NavHolder>

//           <SearchBar>
//             <Sbar />
//             <Stext placeholder="TYPE AND HIT ENTER" />
//           </SearchBar>
//           <ButtonHolder>
//             <NavLinks to={"login"}></NavLinks>
//           </ButtonHolder>
//         </Main>
//       </Container>
//     </div>
//   );
// };
// export default Header;

// const NavLinks = styled(NavLink)`
//   text-decoration: none;
// `;
// const Sbar = styled(BsSearch)`
//   margin-right: 5px;
//   font-size: 13px;
// `;
// const NavHolder = styled.div`
//   display: flex;
// `;
// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;
// `;

// const Main = styled.div`
//   display: flex;
//   width: 98%;
//   justify-content: space-between;
//   align-items: center;
// `;
// const Stext = styled.input`
//   outline: none;
//   border: none;
//   background-color: transparent;
//   width: 49%;
//   font-size: 12.5px;
// `;
// const SearchBar = styled.div`
//   height: 35px;
//   width: 190px;
//   background-color: #f2f2f2;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #6b6b6b;
//   border-radius: 5px;

//   :hover {
//     border: 1px solid #6b6b6b;
//     cursor: pointer;
//   }
// `;

// const ButtonHolder = styled.div`
//   display: flex;
// `;
// const Logo = styled.img`
//   width: 150px;
//   margin-left: 80px;
// `;

// const IconDown = styled(BsChevronDown)`
//   font-size: 12px;
//   margin-top: 2.5px;
//   margin-left: 2px;
// `;
// const Nav = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 30px;
//   font-size: 14px;
//   color: #6b6b6b;
//   cursor: pointer;
//   font-weight: 600;
//   transition: all 300ms;
//   :hover {
//     color: black;
//   }
// `;

import React from "react"
const Header=()=>{
  return(
    <div>Header</div>
  )
}
 export default Header