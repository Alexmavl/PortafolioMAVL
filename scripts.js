// Obtener el elemento del botón
const downloadCVButton = document.getElementById('downloadCV');

// Agregar un listener de eventos al botón
downloadCVButton.addEventListener('click', () => {
  // Código para descargar el CV va aquí
  const cvLink = document.createElement('a');
  cvLink.href = 'CV/CV MAVL.pdf';  // Usar barras diagonales
  cvLink.download = 'CV MAVL.pdf';
  document.body.appendChild(cvLink);  // Añadir el enlace al documento
  cvLink.click();
  document.body.removeChild(cvLink);  // Eliminar el enlace del documento
});

// Función para enviar el formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtiene los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Configura el correo
  const mailtoLink = `mailto:marvinv708@gmail.com?subject=Contacto de ${nombre}&body=${mensaje}%0D%0A%0D%0AEmail: ${email}`;

  // Abre el enlace mailto
  window.location.href = mailtoLink;
});
