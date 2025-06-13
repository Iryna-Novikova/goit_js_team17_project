// імпортуємо бібліотеку izitoast
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

export function showAlert(message, pos = 'topRight') {
    iziToast.show({
        title: '',
        message: message,
        backgroundColor: 'rgb(118, 65, 145)',
        messageColor: 'rgb(255, 255, 255)',
        position: pos,
    });
 }