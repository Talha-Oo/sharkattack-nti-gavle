const tooltips = document.querySelectorAll('.all-tooltips .tooltip');
const fullDiv = document.querySelector('.krets');
const container = document.querySelector('.container1');
let timeoutId;

window.addEventListener('DOMContentLoaded', contentPosition);
window.addEventListener('resize', contentPosition);

function contentPosition() {
    tooltips.forEach(tooltip => {
        const pin = tooltip.querySelector('.pin');
        const content = tooltip.querySelector('.tooltip-content');
        const arrow = tooltip.querySelector('.arrow');
        if (pin.offsetLeft + content.offsetWidth / 2 > fullDiv.offsetWidth) {
            const extraLeft = fullDiv.offsetWidth - (pin.offsetLeft + content.offsetWidth / 2);
            content.style.left = pin.offsetLeft - content.offsetWidth / 2 + extraLeft -30 + 'px';

        }
        else if (pin.offsetLeft + container.offsetWidth < fullDiv.offsetWidth / 2) {
            content.style.left = -container.offsetLeft + 'px';
        } else {
            content.style.left = pin.offsetLeft - content.offsetWidth / 2 + 'px';
        }
        content.style.top = pin.offsetTop + 40 + 'px';
        arrow.style.left = pin.offsetLeft - content.offsetLeft + pin.offsetWidth / 2 + 'px';
    })
}

tooltips.forEach(tooltip => {
    const pin = tooltip.querySelector('.pin');
    const content = tooltip.querySelector('.tooltip-content');
    pin.addEventListener('mouseover', () => {
        tooltip.classList.add('active');
    })
    pin.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            tooltip.classList.remove('active');
        }, 1000)
    })

    content.addEventListener('mouseover', () => {
        clearTimeout(timeoutId);
        tooltip.classList.add('active');
    })
    content.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            tooltip.classList.remove('active');
        }, 1000)
    })
})