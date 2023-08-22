
function copyText() {
    let copy = document.getElementById('copy')
    let mensage = document.getElementById('copy-confirmed')
    
    navigator.clipboard.writeText(copy.textContent)
    mensage.classList.remove('hidden')
    mensage.classList.add('flex')

    setTimeout(() => {
        mensage.classList.remove('flex')
        mensage.classList.add('hidden')
    }, 2000)
}