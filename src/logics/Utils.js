function randomArrayElement(n, a, b) {
    if (n <= 0) {
        console.log("Number of element can't be less than or equal to 0");
        return [];
    }

    const minElement = Math.min(a, b);
    const maxElement = Math.max(a, b);

    if (minElement <= 0) {
        console.log("Can't have element less than or equal to 0");
        return [];
    }

    const array = [];
    for (let _ = 0; _ < n; _++) {
        const randomNumber = Math.floor(Math.random() * (maxElement - minElement + 1)) + minElement;
        array.push(randomNumber);
    }

    return array;
}

export default randomArrayElement;