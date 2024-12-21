import Layout from "@components/Layout";
import { getGroup, listGroups } from "@lib/groups";
import { listRecipeCacheMeta } from "@lib/recipes";
import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Stack, Typography } from "@mui/material";
import RecipeTile from "@components/RecipeTile";
import { GroupMeta, RecipeMeta } from "src/types";
import { getTags } from "@lib/tags";
import BasicMeta from "@components/meta/BasicMeta";

interface Props {
  group: GroupMeta;
  recipes: RecipeMeta[];
}

export default function Group({ group, recipes }: Props) {
  return (
    <Layout title={group.name} itemCount={group.count} backLink="/">
      <BasicMeta title={group.name} url={`/groups/${group.slug}`} />
      {recipes.length > 0 ? (
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2.5 }}>
          {recipes.map((recipe, idx) => (
            <RecipeTile key={idx} recipe={recipe} />
          ))}
        </Box>
      ) : (
        <Stack alignItems="center">
          <Typography>No recipes found</Typography>
        </Stack>
      )}
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

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const groupSlug = params?.groupSlug as string;
  const group = getGroup(groupSlug);
  const recipes: RecipeMeta[] = listRecipeCacheMeta("group", groupSlug).map(
    (cacheContent) => ({
      ...cacheContent,
      group: getGroup(cacheContent.group),
      tags: getTags(cacheContent.tags || []),
    }),
  );

  return {
    props: { group, recipes },
  };
};
