import { DesignerInfo } from "./DesignerInfo";
import { Poster } from "./Poster";
import { Inter } from "./Inter";
import { ListSelectBox } from "@/components/ListSelectBox";
import { useDesignerNames } from "@/queries/designers";
import { Suspense } from "react";
import { useDesignerDetail } from "@/queries/designers";
import SuspenseFallback from "@/components/common/SuspenseFallback";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { useSearchParams } from "react-router-dom";

const DesignerDetailContent = ({ name }: { name: string }) => {
  const { data } = useDesignerDetail(name);
  console.log(data);
  return (
    <>
      {!data ? null : (
        <>
          <DesignerInfo
            team={data.info.team}
            name={data.info.name}
            nameEnglish={data.info.nameEnglish}
            email={data.info.email}
            intro={data.info.intro}
            conceptTitle={data.info.conceptTitle}
            conceptDescription={data.info.conceptDescription}
            image={data.info.image}
          />
          <Poster
            title={data.poster.title}
            description={data.poster.description}
          />
          <Inter
            title={data.inter.title}
            description={data.inter.description}
            levelDescription={data.inter.levelDescription}
          />
        </>
      )}
    </>
  );
};

export const DesignerDetailPage = () => {
  const [searchParams] = useSearchParams();
  const targetName = searchParams.get("name") ?? "박세은";
  const { data: names } = useDesignerNames();
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<SuspenseFallback />}>
          <DesignerDetailContent name={targetName} />
          <ListSelectBox list={names ?? []} currentName={targetName} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
