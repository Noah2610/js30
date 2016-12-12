
const div = document.querySelector("div");
const randArr = ["./imgs/img0.jpeg","./imgs/img1.jpeg","./imgs/img2.jpeg","./imgs/img3.jpeg","./imgs/img4.jpeg","./imgs/img5.jpeg"];

var rand = Math.floor(Math.random() * randArr.length);

div.insertAdjacentHTML("afterend", `<img src="${randArr[rand]}">`);
