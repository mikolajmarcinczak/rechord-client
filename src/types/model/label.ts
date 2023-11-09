import {Region} from "./region";
import {Album} from "./album";

export interface Label {
	labelName: string;
	description: string;
	region: Region;

	albums: Album[];
}