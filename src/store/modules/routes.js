import { routes } from '@/router';

const state=()=>({routes})

const getters = {
	routes:(state)=>state.routes
}

export default {state,getters}