import Swal from "sweetalert2";

type message = string;
type type = "success" | "error" | "warning" | "info";

export const CustomToast = (message: message, type: type) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-left",
    background: "#333333",
    color: "#f4f4f4",
    showConfirmButton: true,
    timer: 3000,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: type,
    title: message,
  });
};
