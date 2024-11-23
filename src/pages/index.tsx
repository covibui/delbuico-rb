import GroupTile from "@components/GroupTile";
import Layout from "@components/Layout";
import BasicMeta from "@components/meta/BasicMeta";
import OpenGraphMeta from "@components/meta/OpenGraphMeta";
import {GroupContent, listGroups} from "@lib/groups";
import {Box} from "@mui/material";
import {GetStaticProps} from "next";

interface Props {
	groups: GroupContent[];
}

export default function Index({groups}: Props) {
	return (
		<Layout title='Recipe Book'>
			<BasicMeta url={"/"} />
			<OpenGraphMeta url={"/"} />
			<Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2.5}}>
				{groups.map((group, idx) => (
					<GroupTile key={idx} group={group} />
				))}
			</Box>
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
