/**
 * 2023.11.23
 * 소멘텀 메인에 뜨는 배경화면
 * 랜덤으로 나오게 한다.
 */
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const selectedImage = images[Math.floor(Math.random()*images.length)];
// console.log(selectedImage);

const bgImage = document.createElement("img");
// console.log(bgImage);
bgImage.src = `img/${selectedImage}`;
// console.log(bgImage);
document.body.appendChild(bgImage);
