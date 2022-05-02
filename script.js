const compraAlert = document.getElementById('compraAlert');

compraAlert.addEventListener('click', function() {
    Swal.fire({
        icon: 'success',
        title: 'Visitanos o Contactate con nosotros para comprar',
        text: '+54 03402 54-0578',
        footer: '<a href="https://www.instagram.com/francisca.bra/" target="_BLANK">Rosario, Laprida 1248 <br> Arroyo seco, Don Orione 828 <br> Villa Constitución, Sarmiento 718</a>'
})
return;})