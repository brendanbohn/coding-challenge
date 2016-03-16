$(function() {
  console.log('JS is Alive');

  var posts = {
  	posts: [],
  	currentPost: 0,
  	getPosts: function () {
  		// 'this' changes in the AJAX call so a variable called self is assigned to 'this'
  		var self = this;
  		// gets next posts from server.js and adds 1 to current Post
  		$.ajax({
  			// GET request
  			url: "/v1/articles",
  		}).done(function(data){
  			// loop through the data in the response and add it to the posts array
  			for(var i = 0; i < data.length; i++) {
  				self.posts.push(data[i]);
  			}
  			// once post array is full, render puts a post onto the page
  			self.render();
  		});
  	},
  	render: function () {
  		// append current post to DOM
  		this.$el.append('<div class="container article"><img src="'+ this.posts[this.currentPost].imageUrl + '" alt="article image">' +
  										'<h1>'+ this.posts[this.currentPost].title +'</h1>'+
  										'<h2>' + this.posts[this.currentPost].author + '</h2>' +
  										'<p class="tags">' + this.posts[this.currentPost].tags.join(' ') + '</p>' +
  										'<p>' + this.posts[this.currentPost].content + '</p></div>'
  										);
  		// increases currentPost count
  		this.currentPost++;
  	},
  	cacheDom: function() {
  		this.$el = $('#articles-container');
  	},
  	bindEvents: function() {
  		var self = this;
  		// add scroll event here that triggers getNextPost()
  		$(window).scroll(function (event) {
  			if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
  			    self.render();
  			}
  		});
  	},
  	init: function() {
  		this.cacheDom();
  		this.bindEvents();
  		this.getPosts();
  	}
  };

  posts.init();

});