/**
 * Created by jmcdermott on 30/06/2016.
 */
(function(){
    //Angular module, scope should be entire html when declared
    app = angular.module('store', []);

    //controller, scope is only where it is declared in html
    app.controller('StoreController',function(){

        this.products = gems;

    });
	
	
	
	app.controller('ReviewController',function(){
		
		this.review={};
		
		this.addReview= function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review={};
		};
		
		});
	
    app.controller('PanelController',function(){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
        var gems =[
            {

                name:'Dodecahedron',
                price:2.95,
                description:'...',
                canPurchase:true,  //this is used for a directive only display 'Add to Cart' if true
                soldOut: false,
                images:[
                    {
                        full: "assets/images/gem-01.gif",
                        thumb: "assets/images/gem-01.gif"
                    }
                ],
				reviews:[
				{
					stars: 3,
					body: "average product",
					author:"joe@bloggs.com"
					
				}
				
				]
            },

            {

               name: "Pentagonal Gem",
                price:5.95,
                description:"....",
                canPurchase:true,
                soldOut: false,
                images:[
                    { full:"assets/images/gem-01.gif",
                        thumb:"assets/images/gem-01.gif"
                    }
                ],
				reviews:[
				{
					stars: 5,
					body: "My favourite product",
					author:"joe@bloggs.com"
					
				}
				
				]
            }

        ]

})();