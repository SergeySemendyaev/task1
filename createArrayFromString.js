module.exports = function(string) {
    var result = [];
    for (var i = 0; i < string.length; i++) {
        if (!Number.isInteger(+string[i]) || string[i] == " ")
            continue;
        result.push(string[i]);
    }
    return result;
}