/**
 * @property {HTMLElement} element
 * @property {string[]} images Pictures of lightbox
 * @property {string} url Picture currently displayed
 *
 *
 *
 */
class LightBox {
  static init() {
    setTimeout(() => {
      // Recupère les liens qui contiennent soit des vidéos ou des images
      const links = Array.from(
        document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'),
      )
      const gallery = links.map((link) => link.getAttribute('href'))

      links.forEach((link) =>
        link.addEventListener('click', (e) => {
          e.preventDefault()
          new this(e.currentTarget.getAttribute('href'), gallery)
        }),
      )
    }, 500)
  }

  /**
   *
   * @param {string} url Pictures URLs
   * @param {string[]} images Pictures of lightbox
   */

  constructor(url, images) {
    const element = this.buildDOM(url)
    this.images = images
    document.body.appendChild(element)
    this.onKeyUp = this.onKeyUp.bind(this)
    document.addEventListener('keyup', this.onKeyUp)
    this.url = url
  }

  /**
   *
   * @param {string} url Pictures URLs
   */
  loadImage(url) {
    let type = url.includes('.mp4')
    if (type == null) {
      type = false
    }
    const container = document.querySelector('.lightbox-container')
    if (type) {
      this.url = url
      container.innerHTML = `
        <video controls autoplay>
            <source src="${url}" type=video/mp4>
        </video>`
    } else {
      this.url = url
      container.innerHTML = `
                <img src="${url}" alt="" />
            `
    }
  }

  /**
   * Close lightbox with echap
   * @param {KeyBoardEvent} e
   */
  onKeyUp(e) {
    if (e.key === 'Escape') {
      this.close(e)
    } else if (e.key === 'ArrowLeft') {
      this.prev(e)
    } else if (e.key === 'ArrowRight') {
      this.next(e)
    }
  }

  onClickHomeLink = () => {}

  /**
   * Close lightbox
   * @param {MouseEvent | KeyboardEvent} e
   */
  close(e) {
    e.preventDefault()
    const lightboxContent = document.querySelector('.lightbox')

    lightboxContent.classList.add('fadeOut')
    window.setTimeout(() => {
      lightboxContent.parentElement.removeChild(lightboxContent)
    }, 500)
    document.removeEventListener('keyup', this.onKeyUp)
  }

  /**
   * Next lightbox picture
   * @param {MouseEvent | KeyboardEvent} e
   */
  next(e) {
    e.preventDefault()
    let i = this.images.findIndex((image) => image === this.url)

    if (i === this.images.length - 1) {
      i = -1
    }

    this.loadImage(this.images[i + 1])
  }

  /**
   * Previous lightbox picture
   * @param {MouseEvent | KeyboardEvent} e
   */
  prev(e) {
    e.preventDefault()
    let i = this.images.findIndex((image) => image === this.url)
    if (i === 0) {
      i = this.images.length
    }
    this.loadImage(this.images[i - 1])
  }

  /**
   *
   * @param {string} url Pictures URLs
   * @return {HTMLElement}
   */
  buildDOM(url) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    const type = url.includes('.mp4')
    if (type) {
      dom.innerHTML = `
            <button class="lightbox-close" alt="close media modal"><i class="fa-sharp fa-solid fa-xmark"></i></button>
            <button class="lightbox-next" alt="next media modal"><i class="fa-solid fa-chevron-right"></i></button>
            <button class="lightbox-prev" alt="previous media modal"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="lightbox-container" aria-label="lightbox displaying media">
                <video controls autoplay>
                    <source src="${url}" type=video/mp4 alt="displayed video media">
                </video>
            </div>`
    } else {
      dom.innerHTML = `
            <button class="lightbox-close" alt="close media modal"><i class="fa-sharp fa-solid fa-xmark"></i></button>
            <button class="lightbox-next" alt="next media modal"><i class="fa-solid fa-chevron-right"></i></button>
            <button class="lightbox-prev" alt="previous media modal"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="lightbox-container">
                <img src="${url}" alt="displayed image media">
            </div>`
    }

    // Close lightbox
    dom
      .querySelector('.lightbox-close')
      .addEventListener('click', this.close.bind(this))

    // Next lightbox picture
    dom
      .querySelector('.lightbox-next')
      .addEventListener('click', this.next.bind(this))

    // Previous lightbox picture
    dom
      .querySelector('.lightbox-prev')
      .addEventListener('click', this.prev.bind(this))

    return dom
  }
}

LightBox.init()
