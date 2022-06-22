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

const AnchorComponent = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffPosition = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffPosition}%)`;

      if (scrollPosition > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor hight={70} width={70} fill="currentColor" />
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
        <Anchor hight={70} width={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
