
  // Verificar si el usuario está autenticado
  function checkAuthentication() {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      // Si no hay token, redirigir al usuario a la página de inicio de sesión
      window.location.href = 'auth-login-cover.html';  // Ajusta la ruta según tu configuración
    } else {
      // Opcional: Puedes agregar lógica para verificar si el token es válido
      // o si ha expirado, dependiendo de cómo manejes la autenticación en tu API.
    }
  }

  // Ejecutar la verificación al cargar la página
  window.onload = checkAuthentication;

