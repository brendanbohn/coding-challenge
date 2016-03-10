var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var allArticles = [
  {
    title: 'Welcome To The VB Coding Challenge',
    author: 'Ian Civgin & Alexei Ilinykh',
    tags: ['venturebeat', 'featured', 'top-story'],
    imageUrl: 'http://orig03.deviantart.net/fe33/f/2007/034/4/3/tech_karma_by_eternalbliss.jpg',
    content: "<p>Slow-carb sriracha brunch deep v vegan. Gluten-free kinfolk gochujang meh authentic, direct trade wayfarers. Meditation distillery small batch man bun. Church-key meditation taxidermy pour-over. Direct trade keytar fingerstache, williamsburg listicle ugh blog YOLO chillwave photo booth. Deep v cold-pressed swag austin neutra. Tousled asymmetrical humblebrag kombucha meggings street art.</p><p>Cornhole iPhone disrupt, four dollar toast post-ironic tilde echo park stumptown heirloom swag tote bag art party 3 wolf moon actually brooklyn. Photo booth VHS drinking vinegar, asymmetrical flannel celiac freegan echo park gentrify typewriter pour-over. Cliche bitters hoodie neutra single-origin coffee, flexitarian kale chips tumblr pickled YOLO whatever direct trade organic. Seitan tousled scenester, pickled viral quinoa biodiesel. Shabby chic fap hashtag, dreamcatcher food truck franzen chambray. Blue bottle drinking vinegar blog, forage mumblecore lumbersexual offal vegan. Truffaut put a bird on it man bun, lomo drinking vinegar seitan skateboard trust fund flexitarian vice pour-over narwhal polaroid chillwave.</p><p>Biodiesel mixtape paleo, flexitarian poutine schlitz irony chartreuse umami tacos raw denim listicle bushwick letterpress forage. Williamsburg food truck try-hard freegan, ugh narwhal meggings dreamcatcher ramps selvage neutra ethical YOLO sriracha. Schlitz yuccie hoodie plaid pork belly pop-up, lumbersexual whatever retro XOXO migas twee 90's health goth. Locavore lumbersexual yuccie kombucha bespoke, fanny pack celiac vegan microdosing freegan gastropub raw denim austin. Truffaut kale chips polaroid, small batch slow-carb YOLO mixtape austin. You probably haven't heard of them normcore schlitz shabby chic crucifix kickstarter, marfa tumblr cardigan salvia ethical drinking vinegar williamsburg. Meh lomo brooklyn meditation.</p><p>Ugh pour-over whatever chillwave tousled. Small batch cred flannel shabby chic intelligentsia portland roof party, everyday carry ethical cold-pressed tumblr. Scenester roof party try-hard, polaroid lumbersexual quinoa next level. Keytar fixie irony, squid direct trade brunch heirloom authentic typewriter pitchfork. Freegan distillery gentrify, offal sustainable deep v poutine mlkshk brooklyn 3 wolf moon hella quinoa man braid. +1 man bun biodiesel, artisan salvia before they sold out tote bag single-origin coffee yuccie authentic thundercats. Irony 8-bit fingerstache direct trade 3 wolf moon."
  },
  {
    title: 'We Hope You Are Finding This Enjoyable',
    author: 'Steve Tidwell',
    tags: ['venturebeat', 'featured', 'top-story'],
    imageUrl: 'http://orig03.deviantart.net/fe33/f/2007/034/4/3/tech_karma_by_eternalbliss.jpg',
    content: "<p>Slow-carb sriracha brunch deep v vegan. Gluten-free kinfolk gochujang meh authentic, direct trade wayfarers. Meditation distillery small batch man bun. Church-key meditation taxidermy pour-over. Direct trade keytar fingerstache, williamsburg listicle ugh blog YOLO chillwave photo booth. Deep v cold-pressed swag austin neutra. Tousled asymmetrical humblebrag kombucha meggings street art.</p><p>Cornhole iPhone disrupt, four dollar toast post-ironic tilde echo park stumptown heirloom swag tote bag art party 3 wolf moon actually brooklyn. Photo booth VHS drinking vinegar, asymmetrical flannel celiac freegan echo park gentrify typewriter pour-over. Cliche bitters hoodie neutra single-origin coffee, flexitarian kale chips tumblr pickled YOLO whatever direct trade organic. Seitan tousled scenester, pickled viral quinoa biodiesel. Shabby chic fap hashtag, dreamcatcher food truck franzen chambray. Blue bottle drinking vinegar blog, forage mumblecore lumbersexual offal vegan. Truffaut put a bird on it man bun, lomo drinking vinegar seitan skateboard trust fund flexitarian vice pour-over narwhal polaroid chillwave.</p><p>Biodiesel mixtape paleo, flexitarian poutine schlitz irony chartreuse umami tacos raw denim listicle bushwick letterpress forage. Williamsburg food truck try-hard freegan, ugh narwhal meggings dreamcatcher ramps selvage neutra ethical YOLO sriracha. Schlitz yuccie hoodie plaid pork belly pop-up, lumbersexual whatever retro XOXO migas twee 90's health goth. Locavore lumbersexual yuccie kombucha bespoke, fanny pack celiac vegan microdosing freegan gastropub raw denim austin. Truffaut kale chips polaroid, small batch slow-carb YOLO mixtape austin. You probably haven't heard of them normcore schlitz shabby chic crucifix kickstarter, marfa tumblr cardigan salvia ethical drinking vinegar williamsburg. Meh lomo brooklyn meditation.</p><p>Ugh pour-over whatever chillwave tousled. Small batch cred flannel shabby chic intelligentsia portland roof party, everyday carry ethical cold-pressed tumblr. Scenester roof party try-hard, polaroid lumbersexual quinoa next level. Keytar fixie irony, squid direct trade brunch heirloom authentic typewriter pitchfork. Freegan distillery gentrify, offal sustainable deep v poutine mlkshk brooklyn 3 wolf moon hella quinoa man braid. +1 man bun biodiesel, artisan salvia before they sold out tote bag single-origin coffee yuccie authentic thundercats. Irony 8-bit fingerstache direct trade 3 wolf moon."
  },
  {
    title: 'We Have a Killer Sales Team',
    author: 'Heather Owasiacki',
    tags: ['venturebeat', 'featured', 'top-story'],
    imageUrl: 'http://orig03.deviantart.net/fe33/f/2007/034/4/3/tech_karma_by_eternalbliss.jpg',
    content: "<p>Slow-carb sriracha brunch deep v vegan. Gluten-free kinfolk gochujang meh authentic, direct trade wayfarers. Meditation distillery small batch man bun. Church-key meditation taxidermy pour-over. Direct trade keytar fingerstache, williamsburg listicle ugh blog YOLO chillwave photo booth. Deep v cold-pressed swag austin neutra. Tousled asymmetrical humblebrag kombucha meggings street art.</p><p>Cornhole iPhone disrupt, four dollar toast post-ironic tilde echo park stumptown heirloom swag tote bag art party 3 wolf moon actually brooklyn. Photo booth VHS drinking vinegar, asymmetrical flannel celiac freegan echo park gentrify typewriter pour-over. Cliche bitters hoodie neutra single-origin coffee, flexitarian kale chips tumblr pickled YOLO whatever direct trade organic. Seitan tousled scenester, pickled viral quinoa biodiesel. Shabby chic fap hashtag, dreamcatcher food truck franzen chambray. Blue bottle drinking vinegar blog, forage mumblecore lumbersexual offal vegan. Truffaut put a bird on it man bun, lomo drinking vinegar seitan skateboard trust fund flexitarian vice pour-over narwhal polaroid chillwave.</p><p>Biodiesel mixtape paleo, flexitarian poutine schlitz irony chartreuse umami tacos raw denim listicle bushwick letterpress forage. Williamsburg food truck try-hard freegan, ugh narwhal meggings dreamcatcher ramps selvage neutra ethical YOLO sriracha. Schlitz yuccie hoodie plaid pork belly pop-up, lumbersexual whatever retro XOXO migas twee 90's health goth. Locavore lumbersexual yuccie kombucha bespoke, fanny pack celiac vegan microdosing freegan gastropub raw denim austin. Truffaut kale chips polaroid, small batch slow-carb YOLO mixtape austin. You probably haven't heard of them normcore schlitz shabby chic crucifix kickstarter, marfa tumblr cardigan salvia ethical drinking vinegar williamsburg. Meh lomo brooklyn meditation.</p><p>Ugh pour-over whatever chillwave tousled. Small batch cred flannel shabby chic intelligentsia portland roof party, everyday carry ethical cold-pressed tumblr. Scenester roof party try-hard, polaroid lumbersexual quinoa next level. Keytar fixie irony, squid direct trade brunch heirloom authentic typewriter pitchfork. Freegan distillery gentrify, offal sustainable deep v poutine mlkshk brooklyn 3 wolf moon hella quinoa man braid. +1 man bun biodiesel, artisan salvia before they sold out tote bag single-origin coffee yuccie authentic thundercats. Irony 8-bit fingerstache direct trade 3 wolf moon."
  },
  {
    title: 'Infinite Articles is an Incredible Feature',
    author: 'Aaron Golden',
    tags: ['venturebeat', 'featured', 'top-story'],
    imageUrl: 'http://orig03.deviantart.net/fe33/f/2007/034/4/3/tech_karma_by_eternalbliss.jpg',
    content: "<p>Slow-carb sriracha brunch deep v vegan. Gluten-free kinfolk gochujang meh authentic, direct trade wayfarers. Meditation distillery small batch man bun. Church-key meditation taxidermy pour-over. Direct trade keytar fingerstache, williamsburg listicle ugh blog YOLO chillwave photo booth. Deep v cold-pressed swag austin neutra. Tousled asymmetrical humblebrag kombucha meggings street art.</p><p>Cornhole iPhone disrupt, four dollar toast post-ironic tilde echo park stumptown heirloom swag tote bag art party 3 wolf moon actually brooklyn. Photo booth VHS drinking vinegar, asymmetrical flannel celiac freegan echo park gentrify typewriter pour-over. Cliche bitters hoodie neutra single-origin coffee, flexitarian kale chips tumblr pickled YOLO whatever direct trade organic. Seitan tousled scenester, pickled viral quinoa biodiesel. Shabby chic fap hashtag, dreamcatcher food truck franzen chambray. Blue bottle drinking vinegar blog, forage mumblecore lumbersexual offal vegan. Truffaut put a bird on it man bun, lomo drinking vinegar seitan skateboard trust fund flexitarian vice pour-over narwhal polaroid chillwave.</p><p>Biodiesel mixtape paleo, flexitarian poutine schlitz irony chartreuse umami tacos raw denim listicle bushwick letterpress forage. Williamsburg food truck try-hard freegan, ugh narwhal meggings dreamcatcher ramps selvage neutra ethical YOLO sriracha. Schlitz yuccie hoodie plaid pork belly pop-up, lumbersexual whatever retro XOXO migas twee 90's health goth. Locavore lumbersexual yuccie kombucha bespoke, fanny pack celiac vegan microdosing freegan gastropub raw denim austin. Truffaut kale chips polaroid, small batch slow-carb YOLO mixtape austin. You probably haven't heard of them normcore schlitz shabby chic crucifix kickstarter, marfa tumblr cardigan salvia ethical drinking vinegar williamsburg. Meh lomo brooklyn meditation.</p><p>Ugh pour-over whatever chillwave tousled. Small batch cred flannel shabby chic intelligentsia portland roof party, everyday carry ethical cold-pressed tumblr. Scenester roof party try-hard, polaroid lumbersexual quinoa next level. Keytar fixie irony, squid direct trade brunch heirloom authentic typewriter pitchfork. Freegan distillery gentrify, offal sustainable deep v poutine mlkshk brooklyn 3 wolf moon hella quinoa man braid. +1 man bun biodiesel, artisan salvia before they sold out tote bag single-origin coffee yuccie authentic thundercats. Irony 8-bit fingerstache direct trade 3 wolf moon."
  },
  {
    title: "We Love Programming: Here's Why.",
    author: 'VB Engineering Team',
    tags: ['venturebeat', 'featured', 'top-story'],
    imageUrl: 'http://orig03.deviantart.net/fe33/f/2007/034/4/3/tech_karma_by_eternalbliss.jpg',
    content: "<p>Slow-carb sriracha brunch deep v vegan. Gluten-free kinfolk gochujang meh authentic, direct trade wayfarers. Meditation distillery small batch man bun. Church-key meditation taxidermy pour-over. Direct trade keytar fingerstache, williamsburg listicle ugh blog YOLO chillwave photo booth. Deep v cold-pressed swag austin neutra. Tousled asymmetrical humblebrag kombucha meggings street art.</p><p>Cornhole iPhone disrupt, four dollar toast post-ironic tilde echo park stumptown heirloom swag tote bag art party 3 wolf moon actually brooklyn. Photo booth VHS drinking vinegar, asymmetrical flannel celiac freegan echo park gentrify typewriter pour-over. Cliche bitters hoodie neutra single-origin coffee, flexitarian kale chips tumblr pickled YOLO whatever direct trade organic. Seitan tousled scenester, pickled viral quinoa biodiesel. Shabby chic fap hashtag, dreamcatcher food truck franzen chambray. Blue bottle drinking vinegar blog, forage mumblecore lumbersexual offal vegan. Truffaut put a bird on it man bun, lomo drinking vinegar seitan skateboard trust fund flexitarian vice pour-over narwhal polaroid chillwave.</p><p>Biodiesel mixtape paleo, flexitarian poutine schlitz irony chartreuse umami tacos raw denim listicle bushwick letterpress forage. Williamsburg food truck try-hard freegan, ugh narwhal meggings dreamcatcher ramps selvage neutra ethical YOLO sriracha. Schlitz yuccie hoodie plaid pork belly pop-up, lumbersexual whatever retro XOXO migas twee 90's health goth. Locavore lumbersexual yuccie kombucha bespoke, fanny pack celiac vegan microdosing freegan gastropub raw denim austin. Truffaut kale chips polaroid, small batch slow-carb YOLO mixtape austin. You probably haven't heard of them normcore schlitz shabby chic crucifix kickstarter, marfa tumblr cardigan salvia ethical drinking vinegar williamsburg. Meh lomo brooklyn meditation.</p><p>Ugh pour-over whatever chillwave tousled. Small batch cred flannel shabby chic intelligentsia portland roof party, everyday carry ethical cold-pressed tumblr. Scenester roof party try-hard, polaroid lumbersexual quinoa next level. Keytar fixie irony, squid direct trade brunch heirloom authentic typewriter pitchfork. Freegan distillery gentrify, offal sustainable deep v poutine mlkshk brooklyn 3 wolf moon hella quinoa man braid. +1 man bun biodiesel, artisan salvia before they sold out tote bag single-origin coffee yuccie authentic thundercats. Irony 8-bit fingerstache direct trade 3 wolf moon."
  }
]

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/v1/articles', function(req, res) {
  res.send(allArticles);
});

app.listen(3000);