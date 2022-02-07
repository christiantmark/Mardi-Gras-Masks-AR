let count = 0;
let curr = 0;
let Mask1 = "https://api.echo3D.co/facear?key=empty-hill-1407&entry=8671967b-0a88-4d8d-ae71-ab7250323497";
let Mask2 = "https://api.echo3D.co/facear?key=empty-hill-1407&entry=3ab309a8-74fa-4e38-9b55-0c68379b7ee4";
let Mask3 = "https://api.echo3D.co/facear?key=empty-hill-1407&entry=f54dbc27-ee17-4d38-87e9-05db87509dbb";
let masks = [Mask1, Mask2, Mask3];

function randomMask() {
    let mask = curr;
    while (curr == mask) {
        mask = Math.floor(Math.random() * 3);
    }
    if (count == 0) {
        mask = 1;
    }
    if (count == 1) {
        mask = 2;
    }
    curr = mask;
    console.log(curr);
    mask = masks[mask];
    document.getElementById('api').src = mask;
    count++;
}

function reset(){
    document.getElementById('api').src = masks[0];
    count = 0;
    curr = 0;
    console.log("0 reset");
}

 

