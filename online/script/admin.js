let items=[];


class Item{
    constructor(code,title,price,description,category,image){
        this.code=code;
        this.title=title;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
    }
}

function clearForm(){
    $('#code').val("");
    $('#title').val("");
    $('#price').val("");
    $('#description').val("");
    $('#category').val("");
    $('#image').val("");

}

function register(){
    //save the input values in var
    var code = $('#code').value();
    var title =$('#title').value();
    var price =$('#price').value();
    var description =$('#description').value();
    var category =$('#category').value();
    var image =$('#image').value();

    if(code!="" && title!="" && price !=""){
    //create the objects (using the constructor)
    var newItem=new Item(code,title,price,description,category,image);
    //push the item
    items.push(newItem);
    //display on the console
    console.log(newItem);
    console.log(items);

    }

   
    clearForm();
}

function init(){
    console.log("Admin page")
    $("#btn-register").on('click',function(){
        regeister();
    })
}

window.onload=init; 