function toastCommonProps(position, className, time) {
  return {
    position: position,
    autoClose: time || 3000,
    pauseOnHover: true,
    hideProgressBar: true,
    draggable: true,
    pauseOnFocusLoss: true,
    limit: 1,
    className: className,
  };
}

export default toastCommonProps;
