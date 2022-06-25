import React, { useEffect, useState } from "react";
import styled from "styled-components";
import blogBackground from "../assets/Images/blogBackground.jpg";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";
import AnchorComponent from "../subComponents/Anchor";
import BigTitle from "../subComponents/BigTitle";

const MainContainer = styled.div`
  /* background-image: url(${blogBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; */
  background: ${(props) => props.theme.pinkish};
  width: 100vw;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.body},0.7)`};
  width: 100vw;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Centre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <Centre>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid>
          <AnchorComponent numbers={numbers} />
          <BigTitle text="PROJECTS" top="3%" right="2%" />
        </Centre>
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
