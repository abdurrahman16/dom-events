var authorModel = document.getElementsByClassName('author');

for ( var i=0; i<authorModel.length; i++){
    var element =authorModel[i];
    element.style.backgroundColor ='teal';
    element.innerHTML = 'Writer- '+ i;
    console.log(element);
}