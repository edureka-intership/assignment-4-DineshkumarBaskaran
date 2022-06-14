
    
    class Restaurants{
        ratingData = [
            {restaurant: 'KFC', rating:5},
            {restaurant: 'Burger King', rating:4},
            {restaurant: 'Pizza Hut', rating:5},
            {restaurant: 'KFC', rating:3},
            {restaurant: 'Domino', rating:2},
            {restaurant: 'Subway', rating:3},
            {restaurant: 'Domino', rating:1},
            {restaurant: 'Subway', rating:4},
            ]

            averageRating(arr){
                var restaurants = arr.map(rest => rest.restaurant).filter((value, index, self)=>self.indexOf(value) === index)
                var data=[]
                for (let j = 0; j< restaurants.length; j++) {
                  var element = restaurants[j];
                  var resCount = 0;
                  var ratings = 0;
                  for (let i = 0; i < arr.length; i++) {
                    if(element == arr[i].restaurant){
                        resCount++;
                        ratings += arr[i].rating;
                    }
                  }
                  data.push({ restaurant : element, averageRating: ratings/resCount})   
                }
                return data;
            }

            ratingAbove(arr){
                var data=[]
                for (let j = 0; j< arr.length; j++) {
                if(arr[j].averageRating>= 4){
                    data.push({ restaurant : arr[j].restaurant, averageRating: arr[j].averageRating})   
                }
                 
                }
                return data;
            }

    }


    var obj = new Restaurants();

    var averageRating = obj.averageRating(obj.ratingData);
    console.log(averageRating)
    var averageRatingAbove = obj.ratingAbove(averageRating)
    console.log(averageRatingAbove)