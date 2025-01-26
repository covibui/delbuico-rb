import Layout from "@components/Layout";
import BasicMeta from "@components/meta/BasicMeta";
import OpenGraphMeta from "@components/meta/OpenGraphMeta";
import TileGrid from "@components/TileGrid";
import { listGroups } from "@lib/groups";
import { GetStaticProps } from "next";
import { GroupMeta } from "src/types";

interface Props {
  groups: GroupMeta[];
}

export default function Index({ groups }: Props) {
  return (
    <Layout title="Recipe Book">
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TileGrid variant="group" items={groups} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const groups = listGroups();
  return {
    props: {
      groups,
    },
  };
};
