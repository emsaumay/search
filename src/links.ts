const SITES: Record<string, string | ((query: string) => string) | undefined> = {
	// Default
	help: 'https://github.com/alii/search/issues',

	// Package Managers
	yarn: 'https://yarnpkg.com/?q={q}&p=1',
	npm: 'https://npmjs.org/package/{q}',
	packagist: 'https://packagist.org/?query={q}',
	pypi: 'https://pypi.org/project/{q}/',
	brew: 'https://formulae.brew.sh/formula/{q}#default',

	// Domains
	namelix: 'https://namelix.com/app/?keywords={q}',
	namecheap: 'https://www.namecheap.com/domains/registration/results/?domain={q}',
	googledomains: 'https://domains.google.com/registrar/search?searchTerm={q}',

	// Programming
	git: 'https://github.com/search?q={q}',
	gh: 'https://github.com/{q}',
	so: 'https://stackoverflow.com/search?q={q}',
	codepen: 'https://codepen.io/search/pens?q={q}',
	discordpy: 'https://discordpy.readthedocs.io/en/latest/search.html?q={q}',
	dpy: 'https://discordpy.readthedocs.io/en/latest/search.html?q={q}',
	discordjs: 'https://discord.js.org/#/docs/main/stable/search?query={q}',
	djs: 'https://discord.js.org/#/docs/main/stable/search?query={q}',
	gitlab: 'https://gitlab.com/search?search={q}',
	crates: 'https://crates.io/search?q={q}',
	javadoc: args => `https://docs.oracle.com/javase/8/docs/api/${args.replace(/\./g, '/')}.html`,
	lh: 'http://localhost:3000',
	lhp: 'http://localhost:{q}',
	rust: 'https://doc.rust-lang.org/book/?search={q}',
	gitea: 'https://gitea.com/explore/repos?tab=&sort=recentupdate&q={q}',
	gopkg: 'https://pkg.go.dev/search?q={q}',
	lighthouse: 'https://developers.google.com/speed/pagespeed/insights/?url={q}',
	dns: 'https://www.nslookup.io/dns-records/{q}',

	// Search Engines
	google: 'https://google.com/search?q={q}',
	duck: 'https://duckduckgo.com/?q={q}',
	brave: 'https://search.brave.com/search?q={q}',
	startpage: 'https://www.startpage.com/sp/search?q={q}',
	ecosia: 'https://www.ecosia.org/search?q={q}',
	bing: 'https://www.bing.com/search?q={q}',

	// Music
	genius: 'https://genius.com/search?q={q}',
	spotify: 'https://open.spotify.com/search/{q}',
	musicstax: 'https://musicstax.com/search?q={q}',
	soundcloud: 'https://soundcloud.com/search?q={q}',
	bandcamp: 'https://bandcamp.com/search?q={q}',
	applemusic: 'https://music.apple.com/search?term={q}',
	ytmusic: 'https://music.youtube.com/search?q={q}',
	musixmatch: 'https://www.musixmatch.com/search/{q}',
	kanye: 'https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x', //till donda drops (if it ever does)

	// Movies
	imdb : 'https://www.imdb.com/find?q={q}',
	rotten : 'https://www.rottentomatoes.com/search?search={q}',
	fandango: 'https://www.fandango.com/search?q={q}',

	// Social
	tt: 'https://twitter.com/search?q={q}&src=typed_query',
	fb: 'https://www.facebook.com/search/top/?q={q}',
	giggl: 'https://canary.giggl.app/portal/{q}',
	subso: 'https://sub.so/{q}',
	red: 'https://www.reddit.com/search/?q={q}',
	'r/': 'https://www.reddit.com/r/{q}',
	'u/': 'https://www.reddit.com/u/{q}',
	pinterest: 'https://www.pinterest.com/search/pins/?q={q}&rs=direct_navigation',
	ig: 'https://instagram.com/{q}',
	instagram: 'https://instagram.com/{q}',
	tiktok: 'https://www.tiktok.com/search?q={q}',
	discord: 'https://discord.gg/{q}',
	sub: 'https://reddit.com/r/{q}',

	// Video
	youtube: 'https://www.youtube.com/results?search_query={q}&page={startPage?}&utm_source=opensearch',
	odysee: 'https://odysee.com/search?q={q}',
	yt: 'https://www.youtube.com/results?search_query={q}&page={startPage?}&utm_source=opensearch',
	gyazo: 'https://gyazo.com/search/{q}',
	tw: 'https://www.twitch.tv/{q}',
	netflix: 'https://www.netflix.com/search?q={q}',
	pornhub: 'https://www.pornhub.com/video/search?search={q}',
	
	// Shopping
	amazon: 'https://www.amazon.com/s?k={q}',
	geizhals: 'https://geizhals.de/?fs={q}',
	ebay: 'https://www.ebay.com/sch/i.html?_nkw={q}',
	newegg: 'https://www.newegg.com/p/pl?d={q}',
	amazonde: 'https://www.amazon.de/s?k={q}',
	amazonnl: 'https://www.amazon.nl/s?k={q}',
	amazonfr: 'https://www.amazon.fr/s?k={q}',
	amazonit: 'https://www.amazon.it/s?k={q}',
	amazones: 'https://www.amazon.es/s?k={q}',
	amazonuk: 'https://www.amazon.co.uk/s?k={q}',
	amazonca: 'https://www.amazon.ca/s?k={q}',
	amazonmx: 'https://www.amazon.mx/s?k={q}',
	amazonbr: 'https://www.amazon.com.br/s?k={q}',
	amazonau: 'https://www.amazon.com.au/s?k={q}',
	amazonjp: 'https://www.amazon.co.jp/s?k={q}',
	am: 'https://www.amazon.co.in/s?k={q}',

	// Anime
	anilist: 'https://anilist.co/search/anime?search={q}',
	myanimelist: 'https://myanimelist.net/search/all?q={q}',
	anidb: 'https://anidb.net/search/anime/?adb.search={q}',
	crunchyroll: 'https://www.crunchyroll.com/search?&q={q}',
	animixplay: 'https://animixplay.to/?q={q}&sengine=gogo',

	// .new
	figma: 'https://figma.new',
	meet: 'https://meet.new',
	repo: 'https://repo.new',
	gist: 'https://gist.new',
	docs: 'https://docs.new',
	slides: 'https://slides.new',

	// Misc
	imp: 'https://impb.in/p/{q}',
	imperial: 'https://imperialb.in/p/{p}',
	urban: 'https://www.urbandictionary.com/define.php?term={q}',
	gd: 'https://drive.google.com/drive/search?q={q}',
	producthunt: 'https://www.producthunt.com/search?q={q}',
	linkedin: 'https://www.linkedin.com/search/results/all/?keywords={q}&origin=GLOBAL_SEARCH_HEADER&sid=*Xz',
	lnkdn: 'https://www.linkedin.com/search/results/all/?keywords={q}&origin=GLOBAL_SEARCH_HEADER&sid=*Xz',
	premid: 'https://premid.app/store?q={q}',
	googleimages: 'https://www.google.com/search?q={q}&tbm=isch',
	maps: 'https://www.google.com/maps/search/{q}',
	presencedb: 'https://www.presencedb.com/search?q={q}',
	polywork: 'https://www.polywork.com/{q}',
	imgur: 'https://imgur.com/search?q={q}',
	imgflip: 'https://imgflip.com/memesearch?q={q}',
	techboard: 'https://boards.4channel.org/search#/{q}/g',
	udemy: 'https://www.udemy.com/courses/search/?src=ukw&q={q}',
	libgen: 'http://libgen.li/index.php?req={q}&res=25',
	ark: 'https://ark.intel.com/content/www/us/en/ark/search.html?_charset_=UTF-8&q={q}',
	intelark: 'https://ark.intel.com/content/www/us/en/ark/search.html?_charset_=UTF-8&q={q}',
	
	// Discord Bot Lists
	topgg: 'https://top.gg/search?q={q}',
	dbleu: 'https://discord-botlist.eu/search?q={q}',
	discordbotlisteu: 'https://discord-botlist.eu/search?q={q}',
	del: 'https://discordextremelist.xyz/en-US/search/?q={q}',
	discordextremelist: 'https://discordextremelist.xyz/en-US/search/?q={q}',
	dbotsgg: 'https://discord.bots.gg/search?q={q}',
	
	// Commands (something that has an action rather than a search)
	tweet: 'https://twitter.com/intent/tweet?text={q}',
	newportal: args => {
		const formatted = args.startsWith('http') ? args : `https://${args}`;
		return `https://giggl.to/${formatted}`;
	},
};

export default SITES;
