import React, { useEffect, useRef } from "react";
import { Link, YinYang } from "../components/AllSvgs";
import styled from "styled-components";
import { mediaQueries } from "../components/Themes";

const Container = styled.div`
  position: relative;

  ${mediaQueries(65)`
    
    display:none;



  `};
`;
const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  .chain {
    transform: rotate(135deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const Rotate = styled.div``;

const AnchorComponent = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      //diff*100/scrollposition
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const rotate = () => {
      yinyang.current.style.transform = `rotate(` + window.pageYOffset + "deg)";
    };
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <YinYang hight={85} width={85} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.number)].map((x, id) => {
          return (
            <Link
              key={id}
              style={{ padding: "0.1rem 0" }}
              hight={25}
              width={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Rotate ref={yinyang}>
          <YinYang hight={85} width={85} fill="currentColor" />
        </Rotate>
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
