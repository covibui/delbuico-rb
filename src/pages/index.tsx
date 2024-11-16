import Layout from "@components/Layout";
import BasicMeta from "@components/meta/BasicMeta";
import OpenGraphMeta from "@components/meta/OpenGraphMeta";
import {GroupContent, listGroups} from "@lib/groups";
import {GetStaticProps} from "next";

interface Props {
	groups: GroupContent[];
}

export default function Index({groups}: Props) {
	return (
		<Layout>
			<BasicMeta url={"/"} />
			<OpenGraphMeta url={"/"} />
			<div className="container">
				{groups.map((group, idx) => (
					<div key={idx}>
						<a href={`/groups/${group.slug}`}>{group.name}</a>
					</div>
				))}
			</div>
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
