const imagesDatabase =["https://scontent.fsac1-1.fna.fbcdn.net/v/t31.18172-8/201057_333964660066980_1640133608_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=pDnDSTWrqnIAX_-0Cs2&tn=37d8XOMoWduiG1-0&_nc_ht=scontent.fsac1-1.fna&oh=00_AT-AMu6kjVC2RooWnfcMMiR3xdyT-vOHiaiBTC5ahzJitg&oe=61E52286", "https://scontent.fsac1-2.fna.fbcdn.net/v/t31.18172-8/1015539_333965910066855_1772965587_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=wl76_34Z6k8AX9mjKUk&_nc_ht=scontent.fsac1-2.fna&oh=00_AT-gz7QybHii0RdqAcn4XgAiUnHWx3dD7iY9DFMSpe6-gA&oe=61E5E96A", "https://scontent.fsac1-1.fna.fbcdn.net/v/t31.18172-8/856297_274370362693077_1347206638_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=l7ZrhIUDCYkAX-ij07m&tn=37d8XOMoWduiG1-0&_nc_ht=scontent.fsac1-1.fna&oh=00_AT9aOyHWHGWmybfjbdb3a1qGFaNF_ulayxPuT5aujzUPkQ&oe=61E39C01" ];

var randomImage; //randomly chosen image


function getRandom(imagesDatabase) { //Select random image.
    randomImage = imagesDatabase[Math.floor(Math.random() * imagesDatabase.length)];
};

getRandom(imagesDatabase);
render();

function render() {
    document.getElementById("cornerImage").innerHTML = '<img src="'+randomImage+'" height=50 width=auto />';
};