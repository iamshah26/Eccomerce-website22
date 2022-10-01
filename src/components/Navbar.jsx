import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  ${mobile({ padding: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 1.5 })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 25px;
  display: flex;
  align-items: center;
  padding: 5px;
`;
const Input = styled.input`
  border: none;

  ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({ fontSize: "22px", marginLeft: "2px" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BELZONA.</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link
              to="/Register"
              style={{
                textDecoration: "none",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Register
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/Login"
              style={{
                textDecoration: "none",
                color: "#000",
                cursor: "pointer",
              }}
            >
              {" "}
              Sign in
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/Cart"
              style={{
                textDecoration: "none",
                color: "#000",
                cursor: "pointer",
              }}
            >
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
