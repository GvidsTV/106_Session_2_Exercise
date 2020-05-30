let items=[
    //first item
    {
        code:"123",
        title:"Samsung TV",
        price:400,
        description:" 4k 55",
        category:"Electronics",
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbyqf7KeTQDyZ4wUm3wiwHMU5gLjCP3pn5aDzt45jqhJ2Z6yCc&usqp=CAU'

    },
    //second item
    {
    code:"124",
    title:"Phone",
    price:1000,
    description:"iPhone X",
    category:"Mobile devices",
    image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-max-4.jpg'
    },
    //third item
    {
    code:'125',
    title:'Speakers',
    price:100,
    description:'Bose',
    category:'Speakers',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDP5pueg85340IF8VCvoopR6lknCnlezomXSorGsEtXV4A2rNJ&usqp=CAU'
    }
];

function displayCatalog(){
    // travel the array (for)
    for(let i=0; i<items.length;i++){
        var item=items[i];
        drawItem(item); 
       
    }

}  

    function drawItem(product) {
         // create the template sting
        var layout = ` <div id="${product.code}" class="item">
                            <img src="${product.image}">
                            <h4> ${product.title}</h4>
                            <h5 class="itemPrice"> $${product.price}</h4>
                            <p> ${product.description}</p> 
                            <div>
                                <buttonn class="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
        `;
          // display the layout on the DOM append
         $('#catalog').append(layout);
    }

    function Search(){
            var searchText = $('#txt-search').val();
            $('#catalog').html("");

            // clear the previous results
           // $('#catalog').html("");

            //travel the array and display the items that contains searchText in the title,
            // OR the description contains the searchText
            //OR the code contains the searchText
            //OR the price
            for(var i=0;i<items.length;i++){
                var item = items[i];
                if(item.title.toLowerCase().includes(searchText) || item.description.toLowerCase().includes(searchText) || item.code.toLowerCase().includes(searchText) || item.price.toString().includes(searchText)){
                    drawItem(item);
                }
                
                
                /* {
                    $('#'+item.code).show();
                }
                else{
                    $('#'+item.code).hide();
                }
 */
                /* if(searchText.toUpperCase() !=items[i].title.toUpperCase()){
                    $('#'+items[i].code).hide();
                }
                else{
                    $('#'+items[i].code).show();
                }
                if(searchText==""){
                    $('#'+items[i].code).show();
                }
 */
         }
    


}
function init(){
    console.log("Catalog Page")
    displayCatalog();

    $('#btn-search').click(Search);


    $('#txt-search').change(function(){
        var searchText = $('#txt-search').val();
        for(var i=0;i<items.length;i++){
            if(searchText==''){
                $('#'+items[i].code).show();
            }
        }
    });



}

window.onload=init; 