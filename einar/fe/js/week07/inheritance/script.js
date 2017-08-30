/*
todo

1.
2.


*/

//created plugin that recives a function as a parameter
$.fn.shopCart = function(cartSelector){

//initialize loader
var products = [];
var toProduct = 15;
var fromData = 0;

/************************************************************************************************
                              scrolling functions & ajax calls for server
*************************************************************************************************/
function scrollToReveal () {
//listen to window scroll and make ajax call
    $(window).scroll(function (e) {
      if($(window).scrollTop() >= $(document).height() - $(window).height()){
        loadMoreItems();
      }
    });
}

	$.ajax({
	    url: 'http://wpwith.us/experis/cart-products-ajax.php',
	    type: 'POST',
	    dataType: 'json',
	    crossDomain: true,
	    cache: false,
	    data: {from: 1, to: toProduct},
	    success: function (data)
	    {
	        var product = {};
	        product.selector = "#recent";
	        product.items = data;
	        products.push(product);
          //main func invokation
	        shop(products, '.cartTable');
          scrollToReveal();
	    },
	});


function loadMoreItems(){
    toProduct+=12;
    $.ajax({
    url: 'http://wpwith.us/experis/cart-products-ajax.php',
    type: 'POST',
    dataType: 'json',
    crossDomain: true,
    cache: false,
    data: {from: fromData, to: toProduct},
    success: function (data)
    {
        if(toProduct-fromData<data.length)
        {
            //most importent object
						var product = {};
						product.selector = "#recent";
						product.items = data;
						products.push(product);
            //main func invokation
						shop(products, '.cartTable');
        }
    }
		});
		fromData+=12;
	};

  /************************************************************************************************
                                          stick cart to top
  *************************************************************************************************/
  $(window).scroll(function (e) {
        var header = $('.header').height();
		    var myCart = $('.cartTable');
		    var fixedCart = (myCart.css('position') == 'fixed');

		    if ($(this).scrollTop() > header && !fixedCart) {
            $('#cart').css({ 'position': 'fixed', 'top': '0px', right: '0px' });

		    }
		    if ($(this).scrollTop() < header && fixedCart) {
            $('#cart').css({ 'position': 'static', 'top': '0px' });
		    }
		})

/***********************************************************************************************
                                        main function
******************************************************************************************** **/

function shop(products, cartSelector) {

  //iife function
  var cart = (function (cartSelector) {

  function addToCart(sku) {
			if (typeof sku === 'object' && arguments.length === 1) {
				title = sku.title;
        console.log(title);
				price = sku.price;
				sku = sku.sku;
	}

  var currentCartItem = $(this).parent();

  for (var i = 1; i < currentCartItem.length; ++i) {
  		  	if (currentCartItem[i].innerText === title) {
					var newQty = incrementQty($(currentCartItem[i]).parent());
					updateSubTotal($(currentCartItem[i]).parent(), newQty);
					return;
				}
			}
			// else product not found in cart
			addItemToCart(title, price, cartSelector);
			updateTotal();
			return;
		}
		return {
			addToCart: addToCart
		};
	})($(cartSelector));

/***************************************************************
                              total calc
***************************************************************/
  //update subTotal
  function updateSubTotal(currentTr, newQty) {
        		var productPrice = parseFloat(currentTr.children('.cart-price').data('num-price'));
        		var subTotal = (newQty * productPrice).toFixed(2);
            currentTr.children('.cartTable .sub-total').text("₪" + subTotal).data('current-total', subTotal);
        		updateTotal();
    	}
  //update total
  function updateTotal() {
          var subTotals = $('.cartTable .sub-total');
          var total = 0;
          for (var i = 0; i < subTotals.length; ++i) {
            total += parseFloat($(subTotals[i]).data('current-total'));
          }
          //append
          $('#bill').text("₪" + total.toFixed(2));
         }

function addItemToCart(name, price, selector) {

  //create table first
    var table = $('<table></table>', {class:'.cartTable'});
		var tr = $('<tr>');
    var th = $('<th>');

    //theaders
    $('<th>', {
      html: ' '
    }).appendTo(tr);

    $('<th>', {
      html: 'product'
    }).appendTo(tr);

    $('<th>', {
      html: 'QTY'
    }).appendTo(tr)

    $('<th>', {
      html: 'price'
    }).appendTo(tr)

    $('<th>', {
      html: 'total'
    }).appendTo(th)

		$('<td>', {class: '.removeQuantity',html: '<a href="#" class="removeQuantity">&times;</a>'}).appendTo(tr);
		$('<td>', {class: 'table-title'}).text(name).appendTo(tr);
		var inputQtySpinner = $('<td>', {class: 'qty'});
		var inputQty = $('<input>', {type: 'number',value: '1',min:'0'}).text('1');

		inputQty.on("change", function () {
			var currentTr = $(this).closest('tr');
			var newQty = parseInt(this.value);
			updateSubTotal(currentTr, newQty);
		});

		inputQty.appendTo(inputQtySpinner);
		inputQtySpinner.appendTo(tr);
		//product price
		$('<td>', {class:'cart-price'}).text("₪" + price).data('num-price', price).appendTo(tr);
		//sub-total
		$('<td>', {class:'sub-total'}).text("₪" + price).data('current-total', 0).appendTo(tr);

    tr.appendTo(table);
    table.appendTo('#newCart');
		updateSubTotal($(tr), 1);
}
  //end func

var displayContainer = [];

	for (var i = 0; i < products.length; ++i) {
		var prod = products[i];
    //cart is ref to addToCart function
		displayContainer[i] = new ProductCreator(prod.items, prod.selector, cart);
	}

  /***************************************************************************
                    append and create items for shop
*****************************************************************************/
  function ProductCreator(products, selector, cart) {

  	var container = $(selector);

  	products.forEach(function (newItem, i) {
  		// product
  		var newProduct = $('<li>', {
        'id': newItem.sku,
        'data-index': i,
        class: 'product'
      });

      // var dataForPayPal = $('<form>', {
      //   html:'<input type="hidden" name="item_name"' + "value=" + newItem.name + ">" + '<input type="hidden" name="amount"' + 'value="' + newItem.price + '"' + ">" +
      //  '<input type="hidden" name="currency_code" value="USD">' + " "
      //   +'<input type="hidden" name="business" value="ronny@hoojima.com">'
      // }).appendTo('.myPaypalForm');

      $('<img>', {src: newItem.image,alt: newItem.name,class: 'prod-img'}).appendTo(newProduct);
  		$('<h3>', {text: newItem.name,class: 'title'}).appendTo(newProduct);

  		var price = $('<span>', {text:"₪" + newItem.price,class: 'price'}).appendTo(newProduct);
      var sku = $('<span>', {text: newItem.sku,class: 'sku'}).appendTo(newProduct);
  		var btn = $('<button>').text('cart').appendTo(newProduct);

  		btn.data('prod', {
  			sku: newItem.sku,
  			title: newItem.name,
  			price: newItem.price
  		});

  		btn.click(function () {
  			cart.addToCart($(this).data('prod'));
        $('#cart').css('display','block');
  		});
  		// add product div to container
  		newProduct.appendTo(container);
  	});
  }
}

/***************************************************************************
                                  other functions
*****************************************************************************/

    //display cart
        $("body").on('click', ".openCart", function () {
           $('#cart').toggle();
        });

    //remove quantity
    	$("body").on('click', ".removeQuantity", function () {
    	  //the tr that holds the X btn(td)
    	   var selectToDelete = $(this).parent().parent();
    	   selectToDelete.remove();
    		 updateTotal();
    	 });
//end of plugin
};

//invoke the plugin
$(document).ready(function () {
  $("#shop").shopCart("#cart")
});
