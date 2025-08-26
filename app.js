    // Año dinámico en footer
    document.getElementById('y').textContent = new Date().getFullYear();

    // Enviar formulario a WhatsApp con mensaje prellenado
    const form = document.getElementById('wForm');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const msg = `Hola PowerClean, soy ${data.nombre}. Dirección: ${data.direccion}. Servicio: ${data.servicio}. ¿Tienen disponibilidad?`;
      const url = `https://wa.me/573004957727?text=${encodeURIComponent(msg)}`;
      window.open(url,'_blank');
    });