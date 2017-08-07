<template>
	<div class="pages-view">
		<header-bar @showTalion="open"></header-bar>
		<router-view></router-view>
		<talion-view v-show="talion" @closeTalion="close"></talion-view>
	</div>
</template>

<script>
	import headerBar from "../components/headerBar.vue"
	import talionView from "../views/talionView.vue"
	export default{
		name:"pages-view",
		components:{
			headerBar,talionView
		},
		data(){
			return {
				talion:""
			}
		},
		methods:{
			open:function(){
				this.talion="open"
			},
			close:function(){
				this.talion=""
			}
		}
	}
</script>

<style scoped>
	
</style>