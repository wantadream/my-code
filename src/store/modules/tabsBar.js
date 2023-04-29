


const state =()=> ({
	visitedRoutes:[]
})

const getters = {
	visitedRoutes:(state)=>state.visitedRoutes
}

const mutations = {
	addVisitedRoute(state, route) {
		
		let target = state.visitedRoutes.find(item => item.path === route.path)
		// console.log(target);
		if (target) {
			if(route.fullPath!==target.fullPath)Object.assign(target,route)
			return
		}
		state.visitedRoutes.push(Object.assign({},route))
	},
	delVisitedRoute(state,route){
		state.visitedRoutes.forEach((item,index) => {
			if(item.path===route.path)state.visitedRoutes.splice(index,1)
		});
	}
}
const actions={
	addVisitedRoute({commit},route){
		commit('addVisitedRoute',route)
	},
	delVisitedRoute({commit,state},route){
		commit('delVisitedRoute',route)
		return [...state.visitedRoutes]
	},
	async delRoute({dispatch,state},route){
		await dispatch('delVisitedRoute',route)
		return {
			visitedRoutes:[...state.visitedRoutes]
		}
	}
}
export default {state,getters,mutations,actions}