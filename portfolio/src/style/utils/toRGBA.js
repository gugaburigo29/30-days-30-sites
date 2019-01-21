/**
 * @description Converte cor de hexadecial para rgba
 * @example #FFFFFF -> rgba(255,255,255,1)
 * @param {String} hex
 * @param {Number} alpha
 */
export default (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    }

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
