function Sorter(array) {
    this.array = array;
    var stack = [];
    stack.i = [];
    stack.j = [];
    var i = 0;
    var j = 1;
    var length = array.length;
    this.next = function() {
        if (length > 1) {
            while (array[j] >= array[j - 1] && i < length) {
                j++;
                if (j == length && i < length - 1) {
                    j = 1;
                    i++;
                }
            }
            if (array[j] < array[j - 1]) {
                stack.push(array.slice());
                stack.i.push(i);
                stack.j.push(j);
                var temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
        return array;
    }
    this.prev = function() {
        if (stack.length != 0) {
            this.array = array = stack.pop();
            i = stack.i.pop();
            j = stack.j.pop();
        }
        return array;
    }
}

module.exports = Sorter;