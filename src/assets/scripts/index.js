import 'bootstrap';
import '../styles/index.scss';
window.$ = require('jquery');

const items = [{
  imageSrc: '//cdn.shopify.com/s/files/1/0028/8253/5533/products/thats_a_wrap_370x.jpg?v=1570084331 370w, //cdn.shopify.com/s/files/1/0028/8253/5533/products/thats_a_wrap_270x.jpg?v=1570084331 270w, //cdn.shopify.com/s/files/1/0028/8253/5533/products/thats_a_wrap_160x.jpg?v=1570084331 160w',
  title: `That's A Wrap Bundle`,
  oldPrice: '$132.50',
  newPrice: '$99.30'
}, {
  imageSrc: '//cdn.shopify.com/s/files/1/0028/8253/5533/products/bundlenoshadow_370x.jpg?v=1609816824 370w, //cdn.shopify.com/s/files/1/0028/8253/5533/products/bundlenoshadow_270x.jpg?v=1609816824 270w, //cdn.shopify.com/s/files/1/0028/8253/5533/products/bundlenoshadow_160x.jpg?v=1609816824 160w',
  title: `Bali Bod Bundle`,
  oldPrice: '$132.50',
  newPrice: '$99.30'
}, {
  imageSrc: '//cdn.shopify.com/s/files/1/0028/8253/5533/products/masque_212ml_370x.jpg?v=1570084323 370w, //cdn.shopify.com/s/files/1/0028/8253/5533/products/masque_212ml_270x.jpg?v=1570084323 270w, //cdn.shopify.com/s/files/1/0028/8253/5533/products/masque_212ml_160x.jpg?v=1570084323 160w',
  title: `Like A Virgin Hair Masque`,
  oldPrice: '$132.50',
  newPrice: '$99.30'
}, {
  imageSrc: '//cdn.shopify.com/s/files/1/0028/8253/5533/products/Main-pdp_370x.jpg?v=1600504445 370w, //cdn.shopify.com/s/files/1/0028/8253/5533/products/Main-pdp_270x.jpg?v=1600504445 270w, //cdn.shopify.com/s/files/1/0028/8253/5533/products/Main-pdp_160x.jpg?v=1600504445 160w',
  title: `Healthy Hair Bundle`,
  oldPrice: '$132.50',
  newPrice: '$99.30'
}, {
  imageSrc: '//cdn.shopify.com/s/files/1/0028/8253/5533/files/4-layers_1_380x.jpg?v=1598583797 380w',
  title: `That's A Wrap Bundle`,
  oldPrice: '$132.50',
  newPrice: '$99.30'
}, {
  imageSrc: '//cdn.shopify.com/s/files/1/0028/8253/5533/products/bundlenoshadow_370x.jpg?v=1609816824 370w, //cdn.shopify.com/s/files/1/0028/8253/5533/products/bundlenoshadow_270x.jpg?v=1609816824 270w, //cdn.shopify.com/s/files/1/0028/8253/5533/products/bundlenoshadow_160x.jpg?v=1609816824 160w',
  title: `Bali Bod Bundle`,
  oldPrice: '$132.50',
  newPrice: '$99.30'
}]

const itemAsCard = (item, active = false) => {
  return (
    `
    <div class="carousel-item col-12 col-md-4 col-xl-3 ${active ? 'active' : ''}">
      <div class="card">
        <img class="card-img-top" src="${item.imageSrc}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <div class="shop-price">
            <span class="old-price h4">${item.oldPrice}</span>
            <span class="new-price h4">${item.newPrice}</span>
          </div>
          <button href="#" class="btn add_to_cart_btn_cls btn-primary mt-4">Add To Cart</button>
        </div>
      </div>
    </div>
    `
  )
}

const renderListItem = (items) => {
  if (!Array.isArray(items)) {
    return;
  };
  let ItemsHtml = items.map((item, idx) => itemAsCard(item, idx == 0 ? true : false));
  $(`.carousel-inner`).html(ItemsHtml);
}

$(function() {
  renderListItem(items);

  // Instantiate the Bootstrap carousel
  $('#carouselExample').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
        // append slides to end
        if (e.direction=="left") {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
        }
        else {
            $('.carousel-item').eq(0).appendTo('.carousel-inner');
        }
      }
    }
  });

  $('#carouselExample').carousel({ 
    interval: 20000
  });
});
