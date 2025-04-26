export const redirectToLogin = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user'); // limpa o cache local
      window.location.href = '/login'; // força redirecionamento e reload
    }
  };