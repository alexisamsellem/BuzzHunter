
var videos = [
'67992885?autoplay=1&title=0&byline=0&portrait=0',
'246758971?autoplay=1&title=0&byline=0&portrait=0',
'49231288?autoplay=1&color=bababa&title=0&byline=0&portrait=0',
'217625988?autoplay=1&color=bababa&title=0&byline=0&portrait=0'
];

var links = [
"https://www.google.fr/flights/#search;f=TLV;t=CGK,HLP;d=2018-01-24;r=2018-01-28",
"https://www.google.fr/flights/#search;f=TLV;t=r-P%25C3%25A9rou-0x9105c850c05914f5%253A0xf29e011279210648;d=2018-01-24;r=2018-01-28;mc=e",
"https://www.google.fr/flights/#search;f=TLV;t=r-Laponie,+Finlande-0x45d30036254ca145%253A0xcedc4eb30d91aca1;d=2018-01-24;r=2018-01-28;mc=e",
"https://www.google.fr/flights/#search;f=TLV;t=KEF,RKV;d=2018-01-24;r=2018-01-28",
];

var index=Math.floor(Math.random() * videos.length);

console.log(index);

var myFrame= '<iframe src="https://player.vimeo.com/video/' + videos[index] + ' width="640" height="360" " frameborder="0"></iframe>';

console.log(myFrame);

var modalBody = $(".modal-body");

modalBody.append(myFrame);

var thelink = $("#mylink");

thelink.attr("href",links[index]);

///<iframe src="https://player.vimeo.com/video/67992885?autoplay=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
