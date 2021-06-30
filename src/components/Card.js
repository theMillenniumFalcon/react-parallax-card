import styled from 'styled-components';
import IronImg from "../assets/images/iron.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Details from './Details';

const Card = (props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <Container>
            <Content>
              <CardWrapper>
                <Cardcontainer style={{ x, y, rotateX, rotateY, z: 100 }} drag dragElastic={0.16} dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} whileTap={{ cursor: "grabbing" }}>
                    <TopContainer>
                        <CircleWrapper>
                            <Circle />
                        </CircleWrapper>
                        <IronWrapper>
                            <Iron style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }} drag dragElastic={0.12} whileTap={{ cursor: "grabbing" }}>
                                <img src={IronImg} />
                            </Iron>
                        </IronWrapper>
                        <Text>Iron man</Text>
                    </TopContainer>
                    <BottomContainer>
                        <Details />
                    </BottomContainer>
                </Cardcontainer>
                </CardWrapper>
            </Content>
        </Container>
    )
}

const Container = styled.section`
background-color: rgb(13, 17, 19);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
color: white;
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cardcontainer = styled(motion.div)`
width: 285px;
height: 500px;
display: flex;
flex-direction: column;
border-radius: 25px;
box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
background-color: #1d1f21;
color: #fff;
position: relative;
cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 2;
  background-color: rgb(251, 202, 3);
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const Text = styled.h1`
color: #fff;
text-transform: uppercase;
margin: 0;
z-index: 6;
font-size: 66px;
font-weight: 700;
`;

const IronWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Iron = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 5;
  user-select: none;
  margin-right: 1em;
  margin-top: 1em;
  img {
    width: auto;
    height: 250px;
    user-select: none;
  }
`;

export default Card;