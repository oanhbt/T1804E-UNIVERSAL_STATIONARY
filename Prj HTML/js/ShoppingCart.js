var app = angular.module("myModule", [])
                .controller("myController", function($scope){
                $scope.carts=[];
                $scope.products = 
                [{
                    id: 1,
                    type: 'paper',
                    name: 'Redi-Tag',
                    price: 3.71,
                    qty: 1,
                    image: 'Redi-Tag Cover.jpg',
                    image1: 'Redi-Tag 1.jpg'
                },{
                    id: 2,
                    type: 'paper',
                    name: 'Sticky Notes',
                    price: 19.5,
                    qty: 1,
                    image: 'Sticky Notes cover.jpg',
                    image1: 'Sticky Notes 1.jpg',
                    image2: 'Sticky Notes 2.jpg',
                    image3: 'Sticky Notes 3.jpg'
                },{
                    id: 3,
                    type: 'paper',
                    name: 'Double A',
                    price: 15.99,
                    qty: 1,
                    image: 'Double A cover.jpg',
                    image1: 'Double A 1.jpg'
                },{
                    id: 4,
                    type: 'paper',
                    name: 'Hammermill Paper',
                    price: 15.99,
                    qty: 1,
                    image: 'Hammermill Paper cover.jpg',
                    image1: 'Hammermill Paper 1.jpg',
                    image2: 'Hammermill Paper 2.jpg'
                },{
                    id: 5,
                    type: 'paper',
                    name: 'Premium32',
                    price: 13.99,
                    qty: 1,
                    image: 'Premium32 cover.jpg',
                    image1: 'Premium32 1.jpg',
                    image2: 'Premium32 2.jpg'
                },{
                    id: 6,
                    type: 'paper',
                    name: 'Filler Paper 1',
                    price: 9.5,
                    qty: 1,
                    image: 'Filler Paper cover.jpg',
                    image1: 'Filler Paper 1.jpg',
                    image2: 'Filler Paper 2.jpg',
                    image3: 'Filler Paper 3.jpg'
                },{
                    id: 7,
                    type: 'WRITING',
                    name: 'Correction Tape',
                    price: 12.36,
                    qty: 1,
                    image: 'Correction Tape cover.jpg',
                    image1: 'Correction Tape 1.jpg',
                    image2: 'Correction Tape 2.jpg',
                    image3: 'Correction Tape 3.jpg'
                },{
                    id: 8,
                    type: 'WRITING',
                    name: 'Dry Erase Markers',
                    price: 6.39,
                    qty: 1,
                    image: 'Dry Erase Markers cover.jpg',
                    image1: 'Dry Erase Markers 1.jpg',
                    image2: 'Dry Erase Markers 2.jpg'
                },{
                    id: 9,
                    type: 'WRITING',
                    name: 'Pre-sharpened Wood Cased',
                    price: 12.49,
                    qty: 1,
                    image: 'Pre-sharpened Wood Cased cover.jpg',
                    image1: 'Pre-sharpened Wood Cased 1.jpg'
                },{
                    id: 10,
                    type: 'WRITING',
                    name: 'BIC 4-Color Ballpoint Pen',
                    price: 4.41,
                    qty: 1,
                    image: 'BIC 4-Color Ballpoint Pen cover.jpg',
                    image1: 'BIC 4-Color Ballpoint Pen 1.jpg',
                    image2: 'BIC 4-Color Ballpoint Pen 2.jpg',
                    image3: 'BIC 4-Color Ballpoint Pen 3.jpg'
                },{
                    id: 11,
                    type: 'WRITING',
                    name: 'Bullet Journal Planner Pens',
                    price: 6.29,
                    qty: 1,
                    image: 'Bullet Journal Planner Pens  cover.jpg',
                    image1: 'Bullet Journal Planner Pens  1.jpg',
                    image2: 'Bullet Journal Planner Pens  2.jpg',
                    image3: 'Bullet Journal Planner Pens  3.jpg',
                    image4: 'Bullet Journal Planner Pens  4.jpg'
                },{
                    id: 12,
                    type: 'DESK ORGANIZATION',
                    name: 'Stori Clear Plastic',
                    price: 14.99,
                    qty: 1,
                    image: 'Stori Clear Plastic cover.jpg',
                    image1: 'Stori Clear Plastic 1.jpg',
                    image2: 'Stori Clear Plastic 2.jpg',
                    image3: 'Stori Clear Plastic 3.jpg'
                },{
                    id: 13,
                    type: 'DESK ORGANIZATION',
                    name: 'Safco Products Onyx Mesh',
                    price: 29.29,
                    qty: 1,
                    image: 'Safco Products Onyx Mesh cover.jpg',
                    image1: 'Safco Products Onyx Mesh 1.jpg'
                },{
                    id: 14,
                    type: 'DESK ORGANIZATION',
                    name: 'SimpleHouseware 6 Tier Wall',
                    price: 19.97,
                    qty: 1,
                    image: 'SimpleHouseware 6 cover.jpg',
                    image1: 'SimpleHouseware 6 1.jpg',
                    image2: 'SimpleHouseware 6 2.jpg'
                },{
                    id: 15,
                    type: 'DESK ORGANIZATION',
                    name: 'SimpleHouseware Mesh',
                    price: 26.87,
                    qty: 1,
                    image: 'SimpleHouseware Mesh cover.jpg',
                    image1: 'SimpleHouseware Mesh 1.jpg',
                    image2: 'SimpleHouseware Mesh 2.jpg'
                },{
                    id: 16,
                    type: 'DESK ORGANIZATION',
                    name: 'iTouchless SoftStep',
                    price: 79.99,
                    qty: 1,
                    image: 'iTouchless SoftStep cover.jpg',
                    image1: 'iTouchless SoftStep 1.jpg',
                    image2: 'iTouchless SoftStep 2.jpg'
                }];
                
                $scope.addItem = function(product){
                    var existingItem = getExistingCartItem(product.id);
                    if(existingItem == null){
                        $scope.carts.push({ name : product.name, qty: 1, id : product.id, price : product.price, image: product.image })
                    }else{
                        existingItem.qty++;
                    }
                }
                function getExistingCartItem(id){
                    for(var i=0; i< $scope.carts.length; i++){
                        if($scope.carts[i].id === id){
                            return $scope.carts[i];
                        }
                    }
                    return null;
                }
                    
                $scope.removeItem = function(cart){
                   $scope.carts.splice(cart, 1);
                }
                $scope.total = function() {
                    var total = 0;
                    angular.forEach($scope.carts, function(item) {
                        total += item.qty * item.price;
                    })
                    return total;
                };
                $scope.totalQty = function() {
                    var total = 0;
                    angular.forEach($scope.carts, function(item) {
                        total += item.qty;
                    })
                    return total;
                };

                  
    });