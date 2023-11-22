<script lang="ts">
import {Album} from "@/types/model";
import {defineComponent} from 'vue'
import AlbumsDataService from "@/services/AlbumsDataService";
import ResponseData from "@/types/http/responseData";

export default defineComponent({
	name: "AlbumsList",
	data() {
		return {
			albums: [] as Album[],
			currentAlbum: {} as Album,
			currentIndex: -1,
			title: ""
		}
	},
	methods: {
		searchTitle() {
			AlbumsDataService.getManyByName(this.title)
					.then((response: ResponseData) => {
						this.albums = response.data.albums;
						this.setActiveAlbum({} as Album);
						console.log(response.data);
						console.log(this.albums);
					})
					.catch(error => {
						console.log(error);
					});
		},
		removeAllAlbums() {
			AlbumsDataService.deleteMany()
					.then((response: ResponseData) => {
						console.log(response.data);
						this.refreshData();
					})
					.catch(error => {
						console.log(error);
					});
		},
		retrieveAlbums() {
			AlbumsDataService.getMany()
					.then((response: ResponseData) => {
						this.albums = response.data.albums;
						console.log(response.data);
					})
					.catch(error => {
						console.log(error);
					});
		},
		refreshData() {
			this.retrieveAlbums();
			this.currentAlbum = {} as Album;
			this.currentIndex = -1;
		},
		setActiveAlbum(album: Album, index = -1) {
			this.currentAlbum = album;
			this.currentIndex = index;
		}
	},
	mounted() {
		this.retrieveAlbums();
	}
});
</script>

<template>

	<div class="uk-flex uk-flex-wrap list">
		<div class="uk-width-1-1 uk-width-1-2@m">
			<div class="uk-margin">
				<div class="uk-inline uk-width-1-1">
					<span class="uk-form-icon" uk-icon="icon: search"></span>
					<input
						type="text"
						class="uk-input"
						placeholder="Search..."
						v-model="title"
					/>
				</div>
			</div>
			<button
				class="uk-button uk-button-default"
				type="button"
				@click="searchTitle"
			>Search</button>
		</div>
		<div class="uk-width-1-1 uk-width-1-2@m">
			<h4>Albums List</h4>
			<ul class="uk-list uk-list-divider">
				<li
					class="uk-margin"
					:class="{ 'uk-active': -1 !== currentIndex }"
					v-for="album in albums"
					:key="album.catalogNumber"
					@click="setActiveAlbum(album)"
				> {{ album.albumName }}</li>
			</ul>

			<button class="uk-button uk-button-danger uk-margin-small-right" @click="removeAllAlbums">
				Remove All
			</button>
		</div>
		<div class="uk-width-1-1 uk-width-1-1@m">
			<div v-if="currentAlbum.catalogNumber">
				<h4>Album</h4>
				<div>
					<label><strong>Cat. Number:</strong></label> {{ currentAlbum.catalogNumber }}
				</div>
				<div>
					<label><strong>Title:</strong></label> {{ currentAlbum.albumName }}
				</div>
				<div>
					<label><strong>Description:</strong></label> {{ currentAlbum.description}}
				</div>
				<div>
					<label><strong>Image URL:</strong></label> {{ currentAlbum.imageUrl}}
				</div>
				<div>
					<label><strong>Release Year:</strong></label> {{ currentAlbum.releaseYear}}
				</div>

				<router-link :to="'/albums/ + currentAlbum.catalogNumber'"
										 class="uk-badge uk-badge-warning"
										 >Edit</router-link>

			</div>
			<div v-else>
				<br />
				<p>Please click on an Album...</p>
			</div>
		</div>
	</div>

</template>

<style scoped>
.list {
	text-align: left;
	max-width: 800px;
	margin: auto;
}
</style>