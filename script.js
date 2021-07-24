// Gallery Lightbox Start
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("click", e => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
})
// Gallery Lightbox End

// Menu Start

// const items = document.querySelectorAll('.list-group-item');
// const image = document.querySelector('#hover-img');

// items.forEach((el) => {
//   el.addEventListener('mouseover', (e) => {
//     let imageData = e.target.getAttribute('data-image');
//     console.log(imageData);
//     e.target.style.zIndex = 99;
//     image.setAttribute('src', imageData);
//   })
//   el.addEventListener('mousemove', (e) => {
//     image.style.top = e.clientY + 'px';
//     image.style.left = e.clientX + 'px';
//   })
//   el.addEventListener('mouseleave', (e) => {
//     e.target.style.zIndex = 1;
//     image.setAttribute('src', '');
//   })
// })

// Menu End