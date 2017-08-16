import add from './add';

const multiply = (n, p) => {
    let result = 0;
    for (let i = 0; i < p; i++) {
        result = add(result, n);
    }
    return result;
};

export default multiply;