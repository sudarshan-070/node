function areaOfSquare(a) {
    return a * a;
};

function areaOfRectangular(l, b) {
    return l * b;
};

function areaOfCircle(r) {
    return 3.14 * (r ** r);
};

module.exports = {
    areaOfCircle: areaOfCircle,
    areaOfRectangular: areaOfRectangular,
    areaOfSquare: areaOfSquare
};
