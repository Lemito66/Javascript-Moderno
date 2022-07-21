const dias = 2; // 0: Domingo

switch (dias) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
    case 2:
        console.log('Martes');
        break;
    default:// Esto es cuando no entra en ningun case
        break;
}