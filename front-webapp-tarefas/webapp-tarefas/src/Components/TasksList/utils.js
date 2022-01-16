export function colorStatus (status) {
    if(status.toLowerCase() === "fazer") {
        return {color: '#FF576B'};
    }
    if(status.toLowerCase() === "fazendo") {
        return {color: '#3A9FF1'};
    }
    if(status.toLowerCase() === 'feito') {
        return {color: '#52f529'};
    }
}