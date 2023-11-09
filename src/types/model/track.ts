import {Album} from "./album";

export interface Track {
	trackNumber: number;
	title: string;
	duration: number;
	album: Album;
}