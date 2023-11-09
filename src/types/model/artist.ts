import {Album} from "./album";

export interface Artist {
	artistName: string;
	realName: string;
	website: string;
	biography: string;
	contactDetails: string;
	social_handles: string;
	birthDate: number;

	albums: Album[];
}