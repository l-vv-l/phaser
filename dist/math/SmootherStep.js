function SmootherStep(x, min, max) {
    x = Math.max(0, Math.min(1, (x - min) / (max - min)));
    return x * x * x * (x * (x * 6 - 15) + 10);
}

export { SmootherStep };
