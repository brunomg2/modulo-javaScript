function newElement(tagName, className) {
    const element = document.createElement(tagName)
    element.className = className
    return element
}


function Barrier(reverse = false) {
    this.element = newElement('div', 'barreira')

    const border = newElement('div', 'borda')
    const body = newElement('div', 'corpo')

    this.element.appendChild(reverse ? body : border)
    this.element.appendChild(reverse ? border : body)

    this.setHeight = bodyHeight => body.style.height = `${bodyHeight}px`
}

function CoupleOfBarriers(height, opening, x) {
    this.element = newElement('div', 'par-de-barreiras')
    
    this.top = new Barrier(true)
    this.bottom = new Barrier(false)

    this.element.appendChild(this.top.element)
    this.element.appendChild(this.bottom.element)

    this.raffleAOpening = () => {
        const topHeight = Math.random() * (height - opening)
        const bottomHeight = height - opening - topHeight
        
        this.top.setHeight(topHeight)
        this.bottom.setHeight(bottomHeight)
    }

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.raffleAOpening()
    this.setX(x)
}

const barrier = new CoupleOfBarriers(650, 280, 800)
document.querySelector('[wm-flappy]').appendChild(barrier.element) 