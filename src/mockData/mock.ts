interface DesignerInfoProps {
  name: string;
  nameEnglish: string;
  email: string;
  intro: string;
  conceptTitle: string;
  conceptDescription: string;
}

export const DesignerInfoData: DesignerInfoProps = {
  name: "박세은",
  nameEnglish: "Park Se Eun",
  email: "03eungreen@naver.com",
  intro:
    "안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. ",
  conceptTitle: "가까이서 보면 비극 멀리서 보면 희극",
  conceptDescription:
    "안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다.",
};
interface PosterProps {
  title: string;
  description: string;
}
export const DesignerPosterData: PosterProps = {
  title: "우리의 괴물",
  description:
    "안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다.",
};
interface InterProps {
  title: string;
  description: string;
  levelDescription: string[];
}
export const TeamInterData: InterProps = {
  title: "같은 곳 다른 시각",
  description:
    "안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다.",
  levelDescription: [
    "1. 자신만의 캐릭터를 만든다.",
    "2. 자신의 캐릭터를 확인한다.",
    "3. 옆에 비춰진 빔을 본다.",
  ],
};

export const PersonInterData: InterProps = {
  title: "같은 곳 다른 시각",
  description:
    "안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다.",
  levelDescription: [
    "1. 자신만의 캐릭터를 만든다.",
    "2. 자신의 캐릭터를 확인한다.",
    "3. 옆에 비춰진 빔을 본다.",
  ],
};
interface ConceptProps {
  title: string;
  description: string;
}
export const TeamConceptData: ConceptProps = {
  title: "시각, 눈",
  description:
    "안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다.",
};
interface FilmProps {
  title: string;
  description: string;
}
export const TeamFilmData: FilmProps = {
  title: "같은 곳 다른 시각",
  description:
    "안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다. 안녕하십니까, 박세은입니다. 저는 디자인학과 학생이며 디자인을 사랑하는 사람입니다.",
};
interface TeamInfoProps {
  teamName: string;
  teammates: { [key: string]: string };
  description: string;
  concept: string;
}
export const TeamInfoData: TeamInfoProps = {
  teamName: "Web Team",
  teammates: {
    박세은: "박세은",
    정일후: "정일후",
    김도완: "김도완",
    김가빈: "김가빈",
  },
  description:
    "웹 팀은 전시회 작업물을 아카이빙하고 졸업논문을 대신하는 웹 사이트를 제작합니다. 인스타그램 등 SNS 채널을 관리하며 졸업 전시의 디지털 기록과 홍보를 담당합니다. ",
  concept: "시각, 눈",
};
export const ListData: string[] = ["정일후", "박세은", "김도완"];
export const ListData2: string[] = ["DP", "WEB", "VIDEO"];
