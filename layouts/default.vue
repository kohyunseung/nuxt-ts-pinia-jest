<template>
	<v-app dark>
		<LayoutAppbar :menu-length="5" />
		<v-main>
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>
		<LayoutFooter />
	</v-app>
</template>

<script>
export default {
	name: 'DefaultLayout',
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Welcome',
					to: '/',
				},
				{
					icon: 'mdi-chart-bubble',
					title: 'Inspire',
					to: '/inspire',
				},
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Vuetify.js',
		}
	},
}
</script>
