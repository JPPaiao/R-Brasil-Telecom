let form = document.getElementById('sendEmail')

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