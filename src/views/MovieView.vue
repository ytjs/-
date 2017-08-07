<template>
	<div class="movie-view has-header">
		<scroller title="影院热映" type="hasCover" :items="hotMovie"></scroller>
		<scroller title="免费在线观影" type="hasCover" :items="topMovie"></scroller>
		<scroller title="新片速递" type="hasCover" :items="newMovie"></scroller>
		<scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
		<types></types>
		<download-app></download-app>
	</div>
	
</template>

<script>
	import {mapState} from "vuex"

	import scroller from "../components/Scroller.vue"
	import types from "../components/Types.vue"
	import downloadApp from "../components/DownloadApp.vue"


	export default {
		name:"movie-view",
		components:{
			scroller,types,downloadApp
		},
		data(){
			return {}
		},
		computed:{
			...mapState({
				hotMovie: state=>state.movie.hotMovies,
				topMovie: state=>state.movie.topMovies,
				newMovie: state=>state.movie.newMovies,
				movieTags: state=>state.movie.movieTags,

			})
		},
		methods:{
			getMovie:function(){
				this.$store.dispatch("getMovie")
			}
		},
		created(){
			this.getMovie()
		}
	}


</script>

<style scoped>
	
</style>