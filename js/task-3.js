function getElementWidth(content, padding, border) {
    const totalWidth = parseInt(content) + (parseInt(padding) * 2 ) + (parseInt(border) * 2);
    return totalWidth; 
}