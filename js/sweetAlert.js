const boton = document.getElementById("sweetAlert");

boton.onclick = () => {
    const valorFinal = parseInt(localStorage.getItem("cuota"));
    Swal.fire({
        title: "¿Confirmar Compra?",
        text: "el valor de la cuota es " + valorFinal,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed){
            Swal.fire({
                title: "La compra fue realizada con éxito",
                icon: "success",
            })
        }
    })
}