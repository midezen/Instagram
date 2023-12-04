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
import ProfileImage from "../images/Ayomide 2.png";

const Container = styled.div`
  flex: 1;
  border-right: 1px solid lightgrey;
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
  // font-weight: 200;
`;

const Image = styled.img`
  width: 22px;
  height: 22px;
  object-fit: cover;
  border-radius: 50%;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Instagram</Logo>
        <Item>
          <HomeOutlinedIcon />
          Home
        </Item>
        <Item>
          <SearchOutlinedIcon />
          Search
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SmartDisplayOutlinedIcon />
          Reels
        </Item>
        <Item>
          <SendOutlinedIcon />
          Messages
        </Item>
        <Item>
          <FavoriteBorderOutlinedIcon />
          Notifications
        </Item>
        <Item>
          <AddCircleOutlineOutlinedIcon />
          Create
        </Item>
        <Item>
          <Image src={ProfileImage} alt="" />
          Profile
        </Item>
        <Item>
          <MenuOutlinedIcon />
          More
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
