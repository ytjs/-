import axios from "axios"


const state={
	queryRes_movie:[],
	queryRes_book:[],
	queryRes_music:[]
}

const mutations = {
	query(state,load){
		// console.log(load.res)
		switch (load.tag){
			case "movie":
			state.queryRes_movie=load.res
			break
			case "book":
			state.queryRes_book=load.res
			break
			case "music":
			state.queryRes_music=load.res
			break
			default:
			console.log("[Error]:API is error")
		}
	}

}


const actions={
	query ({commit},load){
		axios
		.get('api/movie/search?q=' +load.queryStr + '&count=3')
		.then((res)=>{
			// console.log("movie")
			// console.log(res)
			commit({
				type:"query",
				tag:"movie",
				res:res.data.subjects
			})
		})
		axios
		.get('api/music/search?q=' +load.queryStr + '&count=3')
		.then((res)=>{
			// console.log("music")
			// console.log(res)
			commit({
				type:"query",
				tag:"music",
				res:res.data.musics
			})
		})
		axios
		.get('api/book/search?q=' +load.queryStr + '&count=3')
		.then((res)=>{
			// console.log("book")
			// console.log(res)
			commit({
				type:"query",
				tag:"book",
				res:res.data.books
			})
		})
	}
}




export default{
	state,
	mutations,
	actions
}