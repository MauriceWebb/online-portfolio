// targets
var $gallery = $('#gallery');
var $prev = $('#prev');
var $next = $('#next');
var $catTitle = $('#category_title');

// portfolio contents
var category = {
    logos: {
        images: [
            'portfolio_images/logos/art-0.png',
            'portfolio_images/logos/art-1.png',
            'portfolio_images/logos/art-2.png',
            'portfolio_images/logos/art-3.png',
            'portfolio_images/logos/art-4.png',
            'portfolio_images/logos/art-5.png'
        ]
    },
    illustrations: {
        images: [
            'portfolio_images/illustrations/art-0.png',
            'portfolio_images/illustrations/art-1.png',
            'portfolio_images/illustrations/art-2.png',
            'portfolio_images/illustrations/art-3.png',
            'portfolio_images/illustrations/art-4.png',
            'portfolio_images/illustrations/art-5.png'
        ]
    },
    prints: {
        images: []
    },
    'ui/ux': {
        images: []
    }
};
var numOfCats = Object.keys(category).length;
var onCat = 0;


// click events
$prev.on('click', function (event) {
    event.preventDefault();
    onCat--;
    if ( onCat === -1) {
        return onCat = numOfCats;
    }
    render_gallery();
});
$next.on('click', function (event) {
    event.preventDefault();
    onCat++;
    if ( onCat > numOfCats) {
        return onCat = 0;
    }
    render_gallery();
});

// functions
function getCatName() {
    // change gallery title
    var catName = Object.keys(category)[onCat];
    $catTitle.text(catName);
}
function render_gallery() {
    // change gallery title
    getCatName();
// populate gallery
    // first empty current gallery
    $gallery.empty();
    if ($catTitle.text() === 'illustrations') {
        // console.log('these are the illustrations!');
        for (var i = 0; i < category.illustrations.images.length; i++) {
        $gallery.append(`
        <div class="col-sm-12 col-md-12 col-lg-4 portfolio_pic m-2">
		    <img class="" src=${category.illustrations.images[i]} alt="">
		</div>
        `);
        }
    }
    else if ($catTitle.text() === 'logos') {
        // console.log('these are the illustrations!');
        for (var i = 0; i < category.logos.images.length; i++) {
        $gallery.append(`
        <div class="col-sm-12 col-md-12 col-lg-4 portfolio_pic m-2">
            <img class="" src=${category.logos.images[i]} alt="">
		</div>
        `);
        }
    }
}

// Main
render_gallery();