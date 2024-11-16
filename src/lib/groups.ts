import groups from "@meta/groups.yml";

export type GroupContent = {
	readonly slug: string;
	readonly name: string;
	readonly image?: string;
};

function generateGroupMap(): {[key: string]: GroupContent} {
	let result: {[key: string]: GroupContent} = {};
	for (const group of groups.groups) {
		result[group.slug] = group;
	}
	return result;
}

const groupMap: {[key: string]: GroupContent} = generateGroupMap();

export function getGroup(slug: string) {
	return groupMap[slug];
}

export function listGroups(): GroupContent[] {
	return groups.groups;
}
