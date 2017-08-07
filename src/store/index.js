import Vue from "vue"
import Vuex from "vuex"


import activities from "./modules/activities"

import user from "./modules/user"
import movie from "./modules/movie"
import book from "./modules/book"
import group from "./modules/group"
import subject from "./modules/subject"
import search from "./modules/search"



Vue.use(Vuex)


export default new Vuex.Store({
	modules:{
		activities,
		user,
		movie,
		book,
		group,
		subject,
		search
	}
})