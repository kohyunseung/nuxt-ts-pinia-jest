import { defineStore } from 'pinia'

// pinia state interface
interface State {
	count: number
}

// 주의사항
// Vuex의 state, getters, actions에서 변수명을 같게하여 사용하였으나
// 현재는 this.* 를 공통으로 사용하므로 같은 변수명 사용 시 해당 기능을
// 정상적으로 수행할 수 없음
export const useAppStore = defineStore('app', {
	// store state
	state: (): State => ({
		count: 0,
	}),
	// store getters
	getters: {
		doubleCount: state => state.count * 2,
	},
	// store actions ( pinia 에서는 mutations도 actions에서 사용 )
	actions: {
		increaseCount(): void {
			this.count = this.count + 1
			console.log(`increaseCount`)
		},
	},
})
