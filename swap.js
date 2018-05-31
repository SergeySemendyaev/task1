module.exports = function swap(span1, span2) {
    var tempId = span1.id;
    var tempPosition = span1.style.left;
    span1.id = span2.id;
    span1.style.left = span2.style.left;
    span2.id = tempId;
    span2.style.left = tempPosition;
}