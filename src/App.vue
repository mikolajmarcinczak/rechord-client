<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
		<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; end: + *; offset: 80">
			<nav class="uk-navbar-container uk-margin">
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
		</div>
  </header>

  <RouterView />
</template>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
