const generateColorPart = () => {
    const part = Math.round(Math.random() * 255).toString(16);

    if (part.length === 2) {
        return part;
    }

    return `0${part}`;
};

const generateRandomColor = () => {
    const red = generateColorPart();
    const green = generateColorPart();
    const blue = generateColorPart();

    return `#${red}${green}${blue}`;
};

export default generateRandomColor;
