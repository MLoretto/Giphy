const inputText = document.querySelector("input")
const containerImage = document.getElementById("imageContainer")

inputText.addEventListener("keypress", (event) => {
    let key = event.which || event.keyCode;
    if (key === 13){
        let gifs = inputText.value;
        console.log(gifs)
        inputText.value = "";

        fetch(`https://api.giphy.com/v1/gifs/search?q=${gifs}&api_key=29Chm7LzQDppg2KgFP96iZfc42XnYR0M`)
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            renderInfo(data);
        })
    }
})
const renderInfo = data => {
    data.data.forEach(Element =>{
        containerImage.innerHTML += `<img src='${Element.images.fixed_height.url}'>`;
    });
}
