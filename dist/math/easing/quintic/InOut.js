function InOut(v) {
    if ((v *= 2) < 1) {
        return 0.5 * v * v * v * v * v;
    }
    else {
        return 0.5 * ((v -= 2) * v * v * v * v + 2);
    }
}

export { InOut };
