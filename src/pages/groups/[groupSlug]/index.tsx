import Layout from "@components/Layout";
import {getGroup, GroupContent, listGroups} from "@lib/groups";
import {listRecipeContent, RecipeContent} from "@lib/recipes";
import {GetStaticPaths, GetStaticProps} from "next";
import {Box} from "@mui/material";
import Tile from "@components/Tile";
import RecipeTile from "@components/RecipeTile";

interface Props {
	group: GroupContent;
	recipes: RecipeContent[];
}

export default function Group({group, recipes}: Props) {
	return (
		<Layout>
			<Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2.5}}>
				{recipes.map((recipe, idx) => (
					<RecipeTile key={idx} recipe={recipe} />
				))}
			</Box>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = listGroups().map((group) => "/groups/" + group.slug);
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
	const groupSlug = params?.groupSlug as string;
	const group = getGroup(groupSlug);
	const recipes = listRecipeContent("group", groupSlug);
	return {
		props: {group, recipes},
	};
};
