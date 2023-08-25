let form = document.getElementById('sendEmail')
let copy = document.getElementById('copy')

form.addEventListener('submit', () => {
    Swal.fire({
        title: 'Email enviado com sucesso',
        showConfirmButton: false,
        timer: 1500,
        icon: 'success',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
})

copy.addEventListener('click', () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    })
    Toast.fire({
        icon: 'success',
        title: 'Email copiado com sucesso'
    })
})
