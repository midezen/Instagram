import styled from "styled-components";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ProfileImage from "../images/Ayomide 2.png";

const Container = styled.div`
  flex: 1;
  border-right: 1px solid lightgrey;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div``;

const Logo = styled.h1`
  font-family: "Lobster Two", cursive;
  padding: 30px 20px;
  font-size: 25px;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 15px 20px;
  font-size: 16px;
`;

const Image = styled.img`
  width: 29px;
  height: 29px;
  object-fit: cover;
  border-radius: 50%;
`;

const Menu = ({ darkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>Instagram</Logo>
        <Item>
          <HomeOutlinedIcon style={{ fontSize: "29px" }} />
          Home
        </Item>
        <Item>
          <SearchOutlinedIcon style={{ fontSize: "29px" }} />
          Search
        </Item>
        <Item>
          <ExploreOutlinedIcon style={{ fontSize: "29px" }} />
          Explore
        </Item>
        <Item>
          <SmartDisplayOutlinedIcon style={{ fontSize: "29px" }} />
          Reels
        </Item>
        <Item>
          <SendOutlinedIcon style={{ fontSize: "29px" }} />
          Messages
        </Item>
        <Item>
          <FavoriteBorderOutlinedIcon style={{ fontSize: "29px" }} />
          Notifications
        </Item>
        <Item>
          <AddCircleOutlineOutlinedIcon style={{ fontSize: "29px" }} />
          Create
        </Item>
        <Item>
          <Image src={ProfileImage} alt="" />
          Profile
        </Item>
        {darkMode ? (
          <Item>
            <LightModeOutlinedIcon style={{ fontSize: "29px" }} />
            LightMode
          </Item>
        ) : (
          <Item>
            <DarkModeIcon style={{ fontSize: "29px" }} />
            DarkMode
          </Item>
        )}
      </Wrapper>
    </Container>
  );
};

export default Menu;
