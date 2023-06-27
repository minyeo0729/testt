import React from 'react'
const { useState, useRef, useEffect } = React;
import styled, { keyframes } from "styled-components";
import PropTypes from 'prop-types';

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
`;

const MarqueeArea = styled.div`
  display: inline-block;
  white-space: nowrap;
  transform: translateX(-${(props) => props.move}px);
  animation: ${moveLeft} ${(props) => props.time}s linear infinite;
  animation-play-state: ${(props) => props.hovering};

`;

const getFillList = (list, copyTimes = 1) => {
  let newlist = [];
  for (let i = 0; i < copyTimes; i++) {
    newlist.push(...list);
  }
  return newlist;
};

const Marquee = ({ list, time, hovering, ...props }) => {
    const marqueeContainer = useRef(null);
  const marqueeArea = useRef(null);
  const [moveLeft, setMoveLeft] = useState(0);
  const [showList, setShowList] = useState(list);
  const [realTime, setRealTime] = useState(time);
  const [hoverState, setHoverState] = useState(false)
  useEffect(() => {
    const containerWidth = Math.floor(marqueeContainer.current.offsetWidth);
    const areaWidth = Math.floor(marqueeArea.current.scrollWidth);
    const copyTimes = Math.max(2, Math.ceil((containerWidth * 2) / areaWidth));
    const newMoveLeft = areaWidth * Math.floor(copyTimes / 2);
    const newRealTime =
      //마퀴가 전체 너비를 몇번 이동해야하는지 계산 
      //소수점 이하 두자리로 변환 
      //원래 제공된 time 값과 곱해서 이동할 거리에 기반하여 원래의 시간을 비례적으로 조정 
      time * parseFloat((newMoveLeft / containerWidth).toFixed(2));

    //렌더링 될때 사이즈에 맞춰 조정될 수 있도록 state변경   
    setShowList(getFillList(list, copyTimes));
    setMoveLeft(newMoveLeft);
    setRealTime(newRealTime);
   

    
      
  }, [list, time]);
  const handleMouseEnter = () => {
    setHoverState(true);
  };

  const handleMouseLeave = () => {
    setHoverState(false);
  };
  return (
    //props를 저렇게 넘겨줘서 app컴포넌트에서 사용이 가능함 
    <div className="container" ref={marqueeContainer}{...props}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <MarqueeArea
        ref={marqueeArea}
        move={moveLeft}
        time={realTime}
        hovering={hoverState ? "pause" : "inherit"}
      >
        {showList.map((item, index) => {
          return <div className='item' key={index}>{item}</div>;
        })}
      </MarqueeArea>
    </div>

  );
}

//default
Marquee.propTypes = {
    list: PropTypes.array,
    time: PropTypes.number,
    hovering: PropTypes.string

};
  
Marquee.defaultProps = {
    list: [],
    time: 4,
    hovering: 'inherit'
};

export default Marquee