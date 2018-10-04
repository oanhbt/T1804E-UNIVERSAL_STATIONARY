// http://embed.plnkr.co/wrT0ao/
(function(){

	var app = angular.module('store', ['ngCookies']);

	app.controller('StoreController', ['$scope','$cookies', function($scope,$cookies){
	
		$scope.products = productsData;
		$scope.cart = [];
	  $scope.total = 0;
	  /*
		if ($cookieStore.get('cart') !== null) {
		 		$scope.cart =  $cookieStore.get('cart');
		}
		*/
		
		if(!angular.isUndefined($cookies.get('total'))){
		  $scope.total = parseFloat($cookies.get('total'));
		}
		//Sepetimiz daha önceden tanımlıysa onu çekelim
		if (!angular.isUndefined($cookies.get('cart'))) {
		 		$scope.cart =  $cookies.getObject('cart');
		}
		
		$scope.addItemToCart = function(product){
		  
		 	if ($scope.cart.length === 0){
		 		product.count = 1;
		 		$scope.cart.push(product);
		 	} else {
		 		var repeat = false;
		 		for(var i = 0; i< $scope.cart.length; i++){
		 			if($scope.cart[i].id === product.id){
		 				repeat = true;
		 				$scope.cart[i].count +=1;
		 			}
		 		}
		 		if (!repeat) {
		 			product.count = 1;
		 		 	$scope.cart.push(product);	
		 		}
		 	}
		 	var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);
		 	$cookies.putObject('cart', $scope.cart,  {'expires': expireDate});
		 	$scope.cart = $cookies.getObject('cart');
		 
		  $scope.total += parseFloat(product.price);
      $cookies.put('total', $scope.total,  {'expires': expireDate});
		 };

		 $scope.removeItemCart = function(product){
		   
		   if(product.count > 1){
		     product.count -= 1;
		     var expireDate = new Date();
         expireDate.setDate(expireDate.getDate() + 1);
		     $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
 			   $scope.cart = $cookies.getObject('cart');
		   }
		   else if(product.count === 1){
		     var index = $scope.cart.indexOf(product);
 			 $scope.cart.splice(index, 1);
 			 expireDate = new Date();
       expireDate.setDate(expireDate.getDate() + 1);
 			 $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
 			 $scope.cart = $cookies.getObject('cart');
		     
		   }
		   
		   $scope.total -= parseFloat(product.price);
       $cookies.put('total', $scope.total,  {'expires': expireDate});
		   
		 };

	}]);

	var productsData = [{
		id: 1,
		type: 'paper',
		name: 'Redi-Tag',
		price: 3.71,
		image: '../imgs/product/PAPER/Notebooks & Writing Pads/Redi-Tag/Redi-Tag Cover.jpg',
		image1: '../imgs/product/PAPER/Notebooks & Writing Pads/Redi-Tag/Redi-Tag 1.jpg'
	},{
		id: 2,
		type: 'paper',
		name: 'Sticky Notes',
		price: 19.5,
		image: '../imgs/product/PAPER/Notebooks & Writing Pads/Sticky Notes/Sticky Notes cover.jpg',
		image1: '../imgs/product/PAPER/Notebooks & Writing Pads/Sticky Notes/Sticky Notes 1.jpg',
		image2: '../imgs/product/PAPER/Notebooks & Writing Pads/Sticky Notes/Sticky Notes 2.jpg',
		image3: '../imgs/product/PAPER/Notebooks & Writing Pads/Sticky Notes/Sticky Notes 3.jpg',
	},{
		id: 3,
		type: 'paper'
		name: 'Double A',
		price: 15.99,
		image: '../imgs/product/paper/Laser Printer Paper/Double A/Double A cover.jpg'
		image: '../imgs/product/paper/Laser Printer Paper/Double A/Double A 1.jpg'
	},{
		id: 4,
		type: 'paper'
		name: 'Hammermill Paper',
		price: 15.99,
		image: '../imgs/product/paper/Laser Printer Paper/Hammermill Paper/Hammermill Paper cover.jpg'
		image: '../imgs/product/paper/Laser Printer Paper/Hammermill Paper/Hammermill Paper 1.jpg'
		image: '../imgs/product/paper/Laser Printer Paper/Hammermill Paper/Hammermill Paper 2.jpg'
	},{
		id: 5,
		type: 'paper'
		name: 'Premium32',
		price: 13.99,
		image: '../imgs/product/paper/Laser Printer Paper/Premium32/Premium32 cover.jpg'
		image: '../imgs/product/paper/Laser Printer Paper/Premium32/Premium32 1.jpg'
		image: '../imgs/product/paper/Laser Printer Paper/Premium32/Premium32 2.jpg'
	},
{
		id: 6,
		type: 'paper'
		name: 'Filler Paper 1',
		price: 9.5,
		image: '../imgs/product/paper/Filler Paper/Filler Paper 1/Filler Paper cover.jpg'
		image: '../imgs/product/paper/Filler Paper/Filler Paper 1/Filler Paper 1.jpg'
		image: '../imgs/product/paper/Filler Paper/Filler Paper 1/Filler Paper 2.jpg'
		image: '../imgs/product/paper/Filler Paper/Filler Paper 1/Filler Paper 3.jpg'
	},


	];

})();