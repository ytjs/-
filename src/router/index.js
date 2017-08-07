import Vue from "vue";
import VueRouter from "vue-router"


import PageView from "../views/PageView.vue"
import HomeView from "../views/HomeView.vue"
import MovieView from "../views/MovieView.vue"
import BookView from "../views/BookView.vue"
import StatusView from "../views/StatusView.vue"
import GroupView from '../views/GroupView.vue'
import SubjectView from '../views/SubjectView.vue'
import LoginView from "../views/LoginView.vue"
import RegisterView from '../views/RegisterView.vue'
import DetailView from "../views/DetailView.vue"
import SearchView from "../views/SearchView.vue"

Vue.use(VueRouter)


export default new VueRouter({
	routes:[
	{
		path:"/",
		redirect:"/pages/"
	},
	{
		path:"/pages",
		component:PageView,
		children: [
		{
			path: '',
			redirect: '/pages/home'
		},
		{
			path: 'home',
			name: 'HomeView',
			component: HomeView
		},
		{
			path:'movie',
			name:"MovieView",
			component:MovieView
		},
		{
			path:"book",
			name:"BookView",
			component:BookView
		},
		{
			path:"status",
			name:"StatusView",
			component:StatusView
		},
		{
			path:"group",
			name:"GroupView",
			component:GroupView
		},
		{
			path:"detail/:id",
			name:"DetailView",
			component:DetailView
		}

		]
	},
	{
		path: '/pages/:classify/subject/:id',
		name: 'SubjectView',
		components: {
			default: PageView,
			subject: SubjectView
		}
	},
	{
		path:"/search",
		name:"SearchView",
		// component:SearchView
		components:{
			default:PageView,
			search:SearchView
		}
	},
	{
		path:"/login",
		name:"LoginView",
		component:LoginView
	},
	{
		path:"/register",
		name:"RegisterView",
		component:RegisterView
	},
	{
		path: '*',
		redirect: '/pages/'
	}

	
	]
})