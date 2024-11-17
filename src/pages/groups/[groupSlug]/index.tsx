import {getGroup, GroupContent, listGroups} from "@lib/groups";
import {listRecipeContent, RecipeContent} from "@lib/recipes";
import {GetStaticPaths, GetStaticProps} from "next";

interface Props {
	group: GroupContent;
	recipes: RecipeContent[];
}

export default function Group({group, recipes}: Props) {
	return (
		<div>
			<a href="/">Home</a>
			<p>{group.name}</p>
			{recipes.map((recipe, idx) => (
				<p key={idx}>
					<a href={`/groups/${group.slug}/recipes/${recipe.slug}`}>
						{recipe.title}
					</a>
				</p>
			))}
		</div>
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
