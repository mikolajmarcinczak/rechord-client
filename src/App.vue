<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { defineComponent } from 'vue';
import UIkit from "uikit";

defineComponent({
	name: 'App'
});

</script>

<template>

  <header>

			<nav class="uk-navbar-container nav-width">
				<div class="uk-container">
					<div uk-navbar>

						<div class="uk-navbar-left" uk-navbar="align: left">
							<a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon href="#"></a>
						</div>

						<div class="uk-navbar-center" uk-navbar="align: center">

							<div class="uk-navbar-center-left">
								<ul class="uk-navbar-nav">
									<li class="uk-active"><a href="#">Active</a></li>
									<li>
										<a href="#">Database</a>
										<div class="uk-navbar-dropdown">
											<ul class="uk-nav uk-navbar-dropdown-nav">
												<li><a href="#"><RouterLink to="/albums">Albums</RouterLink></a></li>
												<li><a href="#">Item</a></li>
												<li><a href="#">Item</a></li>
											</ul>
										</div>
									</li>
								</ul>
							</div>

							<a class="uk-navbar-item" href="#"><RouterLink to="/">Home</RouterLink></a>

							<div class="uk-navbar-center-right">
								<ul class="uk-nav uk-navbar-nav">
									<li class="uk-navbar-item"><RouterLink to="/about"><a href="#">About</a></RouterLink></li>
									<li class="uk-navbar-item"><RouterLink to="/playlists"><a href="#">Playlists</a></RouterLink></li>
								</ul>
							</div>

						</div>

					</div>
				</div>
			</nav>

  </header>

	<main>
		<div class="uk-section">
			<RouterView />
		</div>
	</main>

</template>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
body {
	background-color: #EEE;
}
.nav-width {
	width: 100%;
}
</style>
