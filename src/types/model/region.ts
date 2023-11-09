import {Album} from "./album";
import {Label} from "./label";

export interface Region {
	continent: string;
	country: string;

	albums: Album[];
	labels: Label[];
}