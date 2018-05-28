export const flatten = data => [].concat.apply([], data);

export const getSize = data => ({
    width: data[0].length,
    height: data.length,
});

export const isValid = (data) => {
    if (!Array.isArray(data)) return false;
    if (data.length === 0) return true;
    if (data.includes(row => !Array.isArray(row))) return false;
    if (data.includes(row => row.length !== data[0].length)) return false;
    return true;
}

export default {
    flatten,
    getSize,
    isValid,
}