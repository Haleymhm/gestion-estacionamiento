export default function getCookie(name) {
  // Check if we're running on the client side
  if (typeof document === 'undefined') {
    return null;
  }

  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  
  return match ? match[2] : null;
}
