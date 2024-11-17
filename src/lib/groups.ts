import groups from "@meta/groups.yml";
import {countRecipes} from "./recipes";

export type GroupContent = {
	readonly slug: string;
	readonly name: string;
	readonly image?: string;
	readonly count: number;
};

function generateGroupMap(): {[key: string]: GroupContent} {
	let result: {[key: string]: GroupContent} = {};
	for (const group of groups.groups) {
		result[group.slug] = {...group, count: countRecipes("group", group.slug)};
	}
	return result;
}

const groupMap: {[key: string]: GroupContent} = generateGroupMap();

export function getGroup(slug: string) {
	return groupMap[slug];
}

export function listGroups(): GroupContent[] {
	return Object.values(groupMap);
}
