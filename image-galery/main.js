const button = document.querySelector('.button')
const inputValue = document.getElementById('sum')
const input = document.querySelector('.input')
const main = document.querySelector('.conteiner-main');
let urlAuto = 'https://api.unsplash.com/search/photos?query=life&per_page=30&orientation=landscape&client_id=_bG4GSRHvReIWGX9oTU9bjQUgfg8qezKyPPvQPOUpQQ';
let reg = false
search(urlAuto)
function search(url) {
    if (inputValue.value === '') {
        url = urlAuto;
    }
    fetch(url)
    .then((url2) => url2.json())
    .then((inform) => appendImg(inform))
}

function changeImg(image) {
    let img = document.createElement('img');
    img.classList = 'img';
    img.src = `${image}`;
    img.alt = `image`
    main.prepend(img)
}

function appendImg(data) {
    if (reg) {
        for (let i = 0; i < 30; i++) {
            document.querySelectorAll('.img')[i].src = `${data.results[i].urls.regular}`;
        }
    } else {
        for (let i = 0; i < 30; i++) {
            const img = data.results[i].urls.regular;
            console.log(img);
            changeImg(img);
        }
        reg = true;
    }
}

button.addEventListener('click', function() {
        search(`https://api.unsplash.com/search/photos?query=${inputValue.value}&per_page=30&orientation=landscape&client_id=_bG4GSRHvReIWGX9oTU9bjQUgfg8qezKyPPvQPOUpQQ`)
        urlAuto = `https://api.unsplash.com/search/photos?query=${inputValue.value}&per_page=30&orientation=landscape&client_id=_bG4GSRHvReIWGX9oTU9bjQUgfg8qezKyPPvQPOUpQQ`
        console.log(inputValue.value)
})
input.addEventListener('change', function() {
    search(`https://api.unsplash.com/search/photos?query=${inputValue.value}&per_page=30&orientation=landscape&client_id=_bG4GSRHvReIWGX9oTU9bjQUgfg8qezKyPPvQPOUpQQ`)
    urlAuto = `https://api.unsplash.com/search/photos?query=${inputValue.value}&per_page=30&orientation=landscape&client_id=_bG4GSRHvReIWGX9oTU9bjQUgfg8qezKyPPvQPOUpQQ`
    console.log(inputValue.value)
})

//search(urlAuto);

