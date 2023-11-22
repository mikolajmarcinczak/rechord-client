<script lang="ts">
import {defineComponent} from 'vue'
import {Album} from "@/types/model";
import AlbumsDataService from "@/services/AlbumsDataService";
import ResponseData from "@/types/http/responseData";

export default defineComponent({
	name: "AlbumDetails",
	data(){
		return {
			currentAlbum: {} as Album,
			message: ""
		};
	},
	methods: {
		getAlbum(catalogNumber: string) {
			AlbumsDataService.get(catalogNumber)
					.then((response: ResponseData) => {
						this.currentAlbum = response.data;
						console.log(response.data);
					})
					.catch(error => {
						console.log(error);
					});
		},
		updateAlbum() {
			AlbumsDataService.update(this.currentAlbum.catalogNumber, this.currentAlbum)
					.then((response: ResponseData) => {
						console.log(response.data);
						this.message = "The album was updated successfully!";
					})
					.catch(error => {
						console.log("Updating album failed: " + error);
					});
		},
		deleteAlbum() {
			AlbumsDataService.delete(this.currentAlbum.catalogNumber)
					.then((response: ResponseData) => {
						console.log(response.data);
						this.$router.push({name: "AlbumsList"});
					})
					.catch(error => {
						console.log(error);
					});
		}
	},
	mounted() {
		this.message = "";
		this.getAlbum(this.$route.params.catalogNumber as string);
	}
});
</script>

<template>

	<div v-if="currentAlbum.catalogNumber" class="uk-container">
		<h3>Album: {{ currentAlbum.albumName }}</h3>
		<form class="uk-form-stacked edit-form">
			<div class="uk-margin">
				<label class="uk-form-label" for="catalogNumber">Catalog number</label>
				<div class="uk-form-controls">
					<input
							class="uk-input"
							id="catalogNumber"
							type="text"
							v-model="currentAlbum.catalogNumber"
							name="catalogNumber"
					>
				</div>
			</div>
			<div class="uk-margin">
				<label class="uk-form-label" for="albumName">Album name</label>
				<div class="uk-form-controls">
					<input
							class="uk-input"
							id="albumName"
							type="text"
							v-model="currentAlbum.albumName"
							name="albumName"
					>
				</div>
			</div>
			<div class="uk-margin">
				<label class="uk-form-label" for="description">Description</label>
				<div class="uk-form-controls">
					<input
							class="uk-input"
							id="description"
							type="text"
							v-model="currentAlbum.description"
							name="description"
					>
				</div>
			</div>
			<div class="uk-margin">
				<label class="uk-form-label" for="releaseYear">Release year</label>
				<div class="uk-form-controls">
					<input
							class="uk-input"
							id="releaseYear"
							type="number"
							v-model="currentAlbum.releaseYear"
							name="releaseYear"
					>
				</div>
			</div>
			<div class="uk-margin">
				<label class="uk-form-label" for="imageUrl">Image URL</label>
				<div class="uk-form-controls">
					<input
							class="uk-input"
							id="imageUrl"
							type="url"
							v-model="currentAlbum.imageUrl"
							name="imageUrl"
					>
				</div>
			</div>

			<div class="uk-margin">
				<button
						class="uk-button uk-button-primary"
						type="button"
						@click="updateAlbum"
				>	Update </button>
				<button
						class="uk-button uk-button-danger"
						type="button"
						@click="deleteAlbum"
				>	Delete </button>
			</div>
		</form>
	</div>

</template>

<style scoped>
.edit-form {
	max-width: 800px;
	margin: auto;
}
</style>