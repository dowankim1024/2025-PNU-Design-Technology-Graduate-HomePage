import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListSelectBox } from "@/components/ListSelectBox";
import { MainContainer } from "@/components/MainContainer";
import { Title } from "@/components/Title";
import { TeamInfo } from "./TeamInfo";
import { Concept } from "@/components/Concept";
import { Film } from "./Film";

export const TeamProject = () => {
  return (
    <>
      <Header />

      <Title>TEAM PROJECT</Title>
      <MainContainer>
        <TeamInfo />
        <Concept
          title="시각, 눈"
          description="안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다."
        />
        <Film
          title="같은 곳 다른 시각"
          description="안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다."
        />
      </MainContainer>
      <ListSelectBox />
      <Footer />
    </>
  );
};
