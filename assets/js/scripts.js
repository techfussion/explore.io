// document.addEventListener("DOMContentLoaded", () => {
//     const images = document.querySelectorAll('img[data-src]');

//     const loadImages = (image) => {
//         image.setAttribute('src', image.getAttribute('data-src'));
//         image.onload = () => {
//             image.removeAttribute('data-src');
//             image.style.opacity = '1';
//         };
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 loadImages(entry.target);
//                 observer.unobserve(entry.target);
//             }
//         });
//     });

//     images.forEach(image => {
//         observer.observe(image);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img[data-src]');

    const loadImage = (image) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.dataset.src;
            img.onload = () => {
                image.src = image.dataset.src;
                image.style.opacity = '1';
                image.removeAttribute('data-src');
                resolve(image);
            };
            img.onerror = reject;
        });
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target)
                    .then(() => {
                        observer.unobserve(entry.target);
                    })
                    .catch(error => {
                        console.error('Error loading image:', error);
                        entry.target.style.opacity = '1';
                        observer.unobserve(entry.target);
                    });
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    images.forEach(image => {
        image.style.opacity = '0';
        image.style.transition = 'opacity 0.3s ease-in-out';
        observer.observe(image);
    });
});