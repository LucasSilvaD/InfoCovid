var app = new Vue({
	el: "#container",
	data: {
		itens: []
	},
	mounted() {
		var url = "http://covid19-brazil-api.now.sh/api/report/v1"
		this.$http.get(url).then(function(r){
			var r = r.body
			this.itens = r.data
		})
	}
})