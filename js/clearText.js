function limpiarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')        // elimina acentos
        .replace(/[¿?.(),;:¡!"']/g, '')       // elimina símbolos
        .replace(/\s+/g, '');                   // elimina espacios
}