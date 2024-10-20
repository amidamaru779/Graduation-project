const sertificate = () => {
    const documents = document.querySelectorAll('.sertificate-document')
    const modal = document.getElementById('modal')
    const modalImg = document.getElementById('modalImg')
    const closeBtn = document.getElementById('closeBtn')
    const overlay = document.querySelector('.document-overlay')

    const openSertificate = () => {
        documents.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault()
                const imgSrc = element.getAttribute('href')
                modalImg.src = imgSrc
                modal.style.display = 'flex'
                overlay.style.display = 'flex'
            })
        })

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none'
            }
        })
    }
    openSertificate()
}

export default sertificate;