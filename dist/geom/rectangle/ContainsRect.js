function ContainsRect(rectA, rectB) {
    if ((rectB.width * rectB.height) > (rectA.width * rectA.height)) {
        return false;
    }
    return ((rectB.x > rectA.x && rectB.x < rectA.right) &&
        (rectB.right > rectA.x && rectB.right < rectA.right) &&
        (rectB.y > rectA.y && rectB.y < rectA.bottom) &&
        (rectB.bottom > rectA.y && rectB.bottom < rectA.bottom));
}

export { ContainsRect };
