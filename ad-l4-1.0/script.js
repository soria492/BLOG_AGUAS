
document.getElementById("btnEnviar").addEventListener("click", function() {
    document.getElementById("alertaContainer").innerHTML = `
      <div class="alert alert-success alert-dismissible fade show">
        ¡GRACIAS POR TU COMPRA! 🎉
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>`
});