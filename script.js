let pictures = ['./img/autumn.jpg', './img/bench.jpg', './img/deer.jpg', './img/fall.jpg', './img/fall2.jpg',
    './img/forest-g.jpg', './img/forest-g1.jpg', 'img/forest-g2.jpg', 'img/forest-g5.jpg',
    './img/forest-g7f.jpg', './img/forest-g55.jpg', './img/forest-g77.jpg', './img/forest-ga.jpg',
    './img/forest-gd.jpg', './img/hd2.jpg', './img/mountains.jpg', './img/nature.jpg',
    './img/nature2.jpg', './img/road-g5.jpg', './img/road-gc.jpg', './img/trees-g0.jpg',
    './img/trees-g9.jpg', './img/trees-ga5.jpg', './img/trees-gc9.jpg', './img/wood.jpg'];

/*let i = 0;*/



function loadImages() {
    let content = document.getElementById('pictureList');   /*1. bind the content into a variable*/
    content.innerHTML = '';                                    /*provides empty content, so that no content is duplicated */

    for (let i = 0; i < pictures.length; i++) {
        content.innerHTML += `
<div class="imgbox" >
<span class="check"><img src="img/checkmark.png"></span>
<img src="${pictures[i]}" onclick="on(${i})">
</div>
`;
    }
}

function on(i) {
    let bigPicture = pictures[i];


    document.getElementById("overlay").style.display = "block";

    document.getElementById('bigImg').setAttribute('src', `${bigPicture}`);

    if (i == 0) {
        document.getElementById('left').setAttribute('onclick', `on(${pictures.length - 1})`);
    } else {
        document.getElementById('left').setAttribute('onclick', `on(${i - 1})`);
    }



    if (i >= pictures.length - 1) {
        document.getElementById('right').setAttribute('onclick', `on(0)`);
    } else {
        document.getElementById('right').setAttribute('onclick', `on(${i + 1})`);
    }
}

function off() {
    document.getElementById("overlay").style.display = "none";
}