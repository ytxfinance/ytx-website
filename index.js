window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.ytx-mineral')

    elements.forEach((element, i) => {
        const random = Math.random() * 10 + 1
        let top = [element.offsetTop, element.offsetTop + random]
        if (i % 2 == 0) {
            top = [element.offsetTop, element.offsetTop - random]
        }
        anime({
            targets: element,
            loop: true,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            top,
        })
    })

    const cardOval = document.querySelector('.card-oval')

    anime({
        targets: cardOval,
        loop: true,
        rotate: '100turn',
        duration: 12000000,
    })
})