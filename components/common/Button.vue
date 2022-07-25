<template>
	<v-btn
		elevation="0"
		block
		:rounded="rounded"
		:outlined="outlined"
		:color="color"
		:class="className"
		:height="height"
		:to="to"
		:text="text"
		:dark="dark"
		:disabled="disabled"
		:tile="tile"
		:href="href"
		:loading="loading"
		@click="$emit('click')"
	>
		<v-icon v-if="prependIcon" left>
			{{ prependIcon }}
		</v-icon>
		<span
			:class="outlined != undefined ? '' : 'font_white'"
			:style="outlined != undefined ? `color:${colorValue}` : ''"
		>
			{{ name }}
		</span>
		<v-icon v-if="appendIcon" left>
			{{ appendIcon }}
		</v-icon>
	</v-btn>
</template>

<script>
export default {
	name: 'CommonButtonsButton01',
	components: {},
	props: [
		'name',
		'color',
		'className',
		'height',
		'outlined',
		'rounded',
		'to',
		'text',
		'dark',
		'disabled',
		'href',
		'src',
		'tile',
		'prependIcon',
		'appendIcon',
		'loading',
	],
	data: () => ({}),
	computed: {
		colorValue() {
			let color = this.color
			if (this.color.substring(1, 0) != '#') {
				color = this.$vuetify.theme.themes.light[this.color]
			}
			return color
		},
	},
	watch: {},
	created() {},
	mounted() {},
	methods: {},
}
</script>

<style scoped lang="scss">
// 리셋 스타일
:deep(.v-btn__content) {
	color: #fff !important;
	font-size: 0.875rem;
	font-weight: 400;
}

// 커스텀 스타일
.font_white {
	:deep(.v-btn__content) span {
		color: #fff !important;
	}
}
.font_black {
	:deep(.v-btn__content) span {
		color: #262626 !important;
	}
}
.square {
	border-radius: 0 !important;
}
.v-btn--outlined {
	background-color: #fff !important;
}
.v-btn__loader .v-progress-circular--indeterminate {
	color: #3c5a9a;
}
</style>
