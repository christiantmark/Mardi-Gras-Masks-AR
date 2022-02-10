let count = 0;
let curr = 0;
let Mask1 = "https://api.echo3D.co/facear?key=<YOUR_API_KEY>&entry=<ENTRY-ID>";
let Mask2 = "https://api.echo3D.co/facear?key=<YOUR_API_KEY>&entry=<ENTRY-ID>";
let Mask3 = "https://api.echo3D.co/facear?key=<YOUR_API_KEY>&entry=<ENTRY-ID>";
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

 

