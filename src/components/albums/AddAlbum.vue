<script lang="ts">
import {Album} from '@/types/model'
import {defineComponent} from 'vue'
import AlbumsDataService from "@/services/AlbumsDataService";
import ResponseData from "@/types/http/responseData";

export default defineComponent({
	name: "AddAlbum",
	data() {
		return {
			Album: {
				catalogNumber: "",
				albumName: "",
				description: "",
				imageUrl: "",
				releaseYear: 0,
				genre: {},
				label: {},
				artist: {},
				format: {},
				trackList: {}
			} as Album,
			submitted: false
		};
	},
	methods: {
		saveAlbum() {
			let data = {
				catalogNumber: this.Album.catalogNumber,
				albumName: this.Album.albumName,
				description: this.Album.description,
				imageUrl: this.Album.imageUrl,
				releaseYear: this.Album.releaseYear,
				genre: this.Album.genre,
				label: this.Album.label,
				artist: this.Album.artist,
				format: this.Album.format,
				trackList: this.Album.trackList
			};

			AlbumsDataService.create(data)
				.then((response: ResponseData) => {
					this.Album = response.data;
					console.log(response.data);
					this.submitted = true;
				})
				.catch(e => {
					console.log(e);
				});
		},
		newAlbum() {
			this.submitted = false;
			this.Album = {} as Album;
		}
	}
})
</script>

<template>
	<div class="submit-form">
		<div v-if="!submitted">
			<div class="uk-margin">
				<label class="uk-form-label" for="albumName">Album Name</label>
				<input
						type="text"
						class="uk-input"
						id="albumName"
						required
						v-model="Album.albumName"
						name="albumName"
				/>
			</div>

			<div class="uk-margin">
				<label class="uk-form-label" for="catalogNumber">Catalog Number</label>
				<input
						type="text"
						class="uk-input"
						id="catalogNumber"
						required
						v-model="Album.catalogNumber"
						name="catalogNumber"
				/>
			</div>

			<div class="uk-margin">
				<label class="uk-form-label" for="description">Description</label>
				<input
						class="uk-input"
						id="description"
						required
						v-model="Album.description"
						name="description"
				/>
			</div>

			<div class="uk-margin">
				<label class="uk-form-label" for="imageUrl">Image URL</label>
				<input
						type="url"
						class="uk-input"
						id="imageUrl"
						required
						v-model="Album.imageUrl"
						name="imageUrl"
				/>
			</div>

			<div class="uk-margin">
				<label class="uk-form-label" for="releaseYear">Release Year</label>
				<input
						type="date"
						class="uk-input"
						id="releaseYear"
						required
						v-model="Album.releaseYear"
						name="releaseYear"
				/>
			</div>

			<button @click="saveAlbum" class="uk-button uk-button-primary">
				Submit
			</button>
		</div>

		<div v-else>
			<h4>You submitted successfully!</h4>
			<button class="uk-button uk-button-primary" @click="newAlbum">
				Add
			</button>
		</div>
	</div>
</template>

<style scoped>
.submit-form {
	max-width: 300px;
	margin: auto;
}
</style>