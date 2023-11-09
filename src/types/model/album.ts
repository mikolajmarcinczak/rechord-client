import {Track} from "./track";
import {Genre} from "./genre";
import {Format} from "./format";
import {Artist} from "./artist";
import {Label} from "./label";

export interface Album {
	catalogNumber: string;
	albumName: string;
	description: string;
	imageUrl: string;
	releaseYear: number;
	genre: Genre;
	label: Label;

	artist: Artist[];
	format: Format[];
	trackList: Track[];
}