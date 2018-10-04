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
		type: 'paper',
		name: 'Double A',
		price: 15.99,
		image: '../imgs/product/paper/Laser Printer Paper/Double A/Double A cover.jpg',
		image1: '../imgs/product/paper/Laser Printer Paper/Double A/Double A 1.jpg'
	},{
		id: 4,
		type: 'paper',
		name: 'Hammermill Paper',
		price: 15.99,
		image: '../imgs/product/paper/Laser Printer Paper/Hammermill Paper/Hammermill Paper cover.jpg',
		image1: '../imgs/product/paper/Laser Printer Paper/Hammermill Paper/Hammermill Paper 1.jpg',
		image2: '../imgs/product/paper/Laser Printer Paper/Hammermill Paper/Hammermill Paper 2.jpg'
	},{
		id: 5,
		type: 'paper',
		name: 'Premium32',
		price: 13.99,
		image: '../imgs/product/paper/Laser Printer Paper/Premium32/Premium32 cover.jpg',
		image1: '../imgs/product/paper/Laser Printer Paper/Premium32/Premium32 1.jpg',
		image2: '../imgs/product/paper/Laser Printer Paper/Premium32/Premium32 2.jpg'
	},
		{
		id: 6,
		type: 'paper',
		name: 'Filler Paper 1',
		price: 9.5,
		image: '../imgs/product/paper/Filler Paper/Filler Paper 1/Filler Paper cover.jpg',
		image1: '../imgs/product/paper/Filler Paper/Filler Paper 1/Filler Paper 1.jpg',
		image2: '../imgs/product/paper/Filler Paper/Filler Paper 1/Filler Paper 2.jpg',
		image3: '../imgs/product/paper/Filler Paper/Filler Paper 1/Filler Paper 3.jpg'
	},{
		id: 7,
		type: 'WRITING',
		name: 'Correction Tape',
		price: 12.36,
		image: '../imgs/product/WRITING/Erasers & Correction Products/Correction Tape/Correction Tape cover.jpg',
		image1: '../imgs/product/WRITING/Erasers & Correction Products/Correction Tape/Correction Tape 1.jpg',
		image2: '../imgs/product/WRITING/Erasers & Correction Products/Correction Tape/Correction Tape 2.jpg',
		image3: '../imgs/product/WRITING/Erasers & Correction Products/Correction Tape/Correction Tape 3.jpg'
	},{
		id: 8,
		type: 'WRITING',
		name: 'Dry Erase Markers',
		price: 6.39,
		image: '../imgs/product/WRITING/Markers & Highlighters/Dry Erase Markers/Dry Erase Markers cover.jpg',
		image1: '../imgs/product/WRITING/Markers & Highlighters/Dry Erase Markers/Dry Erase Markers 1.jpg',
		image2: '../imgs/product/WRITING/Markers & Highlighters/Dry Erase Markers/Dry Erase Markers 2.jpg'
	},{
		id: 9,
		type: 'WRITING',
		name: 'Pre-sharpened Wood Cased',
		price: 12.49,
		image: '../imgs/product/WRITING/Pencils/Pre-sharpened Wood Cased/Pre-sharpened Wood Cased cover.jpg',
		image1: '../imgs/product/WRITING/Pencils/Pre-sharpened Wood Cased/Pre-sharpened Wood Cased 1.jpg'
	},{
		id: 10,
		type: 'WRITING',
		name: 'BIC 4-Color Ballpoint Pen',
		price: 4.41,
		image: '../imgs/product/WRITING/Pens & Refills/BIC 4-Color Ballpoint Pen/BIC 4-Color Ballpoint Pen cover.jpg',
		image1: '../imgs/product/WRITING/Pens & Refills/BIC 4-Color Ballpoint Pen/BIC 4-Color Ballpoint Pen 1.jpg',
		image2: '../imgs/product/WRITING/Pens & Refills/BIC 4-Color Ballpoint Pen/BIC 4-Color Ballpoint Pen 2.jpg',
		image3: '../imgs/product/WRITING/Pens & Refills/BIC 4-Color Ballpoint Pen/BIC 4-Color Ballpoint Pen 3.jpg'
	},{
		id: 11,
		type: 'WRITING',
		name: 'Bullet Journal Planner Pens',
		price: 6.29,
		image: '../imgs/product/WRITING/Pens & Refills/Bullet Journal Planner Pens/Bullet Journal Planner Pens  cover.jpg',
		image1: '../imgs/product/WRITING/Pens & Refills/Bullet Journal Planner Pens/Bullet Journal Planner Pens  1.jpg',
		image2: '../imgs/product/WRITING/Pens & Refills/Bullet Journal Planner Pens/Bullet Journal Planner Pens  2.jpg',
		image3: '../imgs/product/WRITING/Pens & Refills/Bullet Journal Planner Pens/Bullet Journal Planner Pens  3.jpg',
		image4: '../imgs/product/WRITING/Pens & Refills/Bullet Journal Planner Pens/Bullet Journal Planner Pens  4.jpg'
	},{
		id: 12,
		type: 'DESK ORGANIZATION',
		name: 'Stori Clear Plastic',
		price: 14.99,
		image: '../imgs/product/DESK ORGANIZATION/Drawer Organizers/Stori Clear Plastic/Stori Clear Plastic cover.jpg',
		image1: '../imgs/product/DESK ORGANIZATION/Drawer Organizers/Stori Clear Plastic/Stori Clear Plastic 1.jpg',
		image2: '../imgs/product/DESK ORGANIZATION/Drawer Organizers/Stori Clear Plastic/Stori Clear Plastic 2.jpg',
		image3: '../imgs/product/DESK ORGANIZATION/Drawer Organizers/Stori Clear Plastic/Stori Clear Plastic 3.jpg'
	},{
		id: 13,
		type: 'DESK ORGANIZATION',
		name: 'Safco Products Onyx Mesh',
		price: 29.29,
		image: '../imgs/product/DESK ORGANIZATION/File Folder Racks & Holders/Safco Products Onyx Mesh/Safco Products Onyx Mesh cover.jpg',
		image1: '../imgs/product/DESK ORGANIZATION/File Folder Racks & Holders/Safco Products Onyx Mesh/Safco Products Onyx Mesh 1.jpg'
	},{
		id: 14,
		type: 'DESK ORGANIZATION',
		name: 'SimpleHouseware 6 Tier Wall Mount',
		price: 19.97,
		image: '../imgs/product/DESK ORGANIZATION/Hanging Wall Files/SimpleHouseware 6 Tier Wall Mount/SimpleHouseware 6 cover.jpg',
		image1: '../imgs/product/DESK ORGANIZATION/Hanging Wall Files/SimpleHouseware 6 Tier Wall Mount/SimpleHouseware 6 1.jpg',
		image2: '../imgs/product/DESK ORGANIZATION/Hanging Wall Files/SimpleHouseware 6 Tier Wall Mount/SimpleHouseware 6 2.jpg'
	},{
		id: 15,
		type: 'DESK ORGANIZATION',
		name: 'SimpleHouseware Mesh',
		price: 26.87,
		image: '../imgs/product/DESK ORGANIZATION/Letter Trays & Stacking Supports/SimpleHouseware Mesh/SimpleHouseware Mesh cover.jpg',
		image1: '../imgs/product/DESK ORGANIZATION/Letter Trays & Stacking Supports/SimpleHouseware Mesh/SimpleHouseware Mesh 1.jpg',
		image2: '../imgs/product/DESK ORGANIZATION/Letter Trays & Stacking Supports/SimpleHouseware Mesh/SimpleHouseware Mesh 2.jpg'
	},{
		id: 16,
		type: 'DESK ORGANIZATION',
		name: 'iTouchless SoftStep',
		price: 79.99,
		image: '../imgs/product/DESK ORGANIZATION/Office Waste Bins/iTouchless SoftStep/iTouchless SoftStep cover.jpg',
		image1: '../imgs/product/DESK ORGANIZATION/Office Waste Bins/iTouchless SoftStep/iTouchless SoftStep 1.jpg',
		image2: '../imgs/product/DESK ORGANIZATION/Office Waste Bins/iTouchless SoftStep/iTouchless SoftStep 2.jpg'
	},


	];

})();