const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// document.querySelectorAll('.elem')
// .forEach(function(elem){
//     elem.addEventListener("mousemove", function(dets){
//         print('hello')
//     })
// });


const elemImages = document.querySelectorAll('.elem img');

elemImages.forEach(img => {
  const parentElem = img.parentElement;
  let isImageVisible = false;

  parentElem.addEventListener('mousemove', (e) => {
    if (!isImageVisible) return;

    const rect = parentElem.getBoundingClientRect();
    const x = e.clientX - rect.left - img.width / 2;
    const y = e.clientY - rect.top - img.height / 2;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  });

  parentElem.addEventListener('mouseenter', () => {
    isImageVisible = true;
    img.style.display = 'block';
  });

  parentElem.addEventListener('mouseleave', () => {
    isImageVisible = false;
    img.style.display = 'none';
  });
});