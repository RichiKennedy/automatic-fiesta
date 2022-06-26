import React, { useEffect, useRef } from "react";
import { Anchor, Link } from "../components/AllSvgs";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

// const Rotate = styled.div``;

const AnchorComponent = (props) => {
  const ref = useRef(null);
  // const yinyang = useRef(null);
  const hiddenRef = useRef(null);

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

  // useEffect(() => {
  //   const circulate = () => {
  //     yinyang.current.style.transform = `rotate(` + window.pageYOffset + "deg)";
  //   };
  //   window.addEventListener("scroll", circulate);
  //   return () => window.removeEventListener("scroll", circulate);
  // }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        {/* <YinYang hight={80} width={80} fill="currentColor" /> */}
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, id) => {
          return (
            <Link
              key={id}
              hight={25}
              width={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
        {/* <Rotate ref={yinyang}>
          <YinYang hight={85} width={85} fill="currentColor" />
        </Rotate> */}
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
