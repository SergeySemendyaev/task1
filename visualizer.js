function Visualizer() {
    var div = document.getElementsByClassName('list')[0];
    var positionsList = [];
    var index = 0;
    var children = document.getElementsByClassName('array');
    this.createNodes = function(array) {
        if (array.length == 0 || array.length == 1 && array.length + 1 < children.length) {
            while (div.hasChildNodes()) {
                div.removeChild(children[0]);
            }
            index = 0;
            positionsList = [];
        } else if (array.length > children.length) {
            positionsList.push(index * 17 + 10);
            var span = document.createElement('span');
            span.className = 'array';
            span.style.backgroundColor = 'rgb(255, 0, 0, 0.9)';
            span.style.left = positionsList[index] + 'px';
            span.style.height = (array[index] + 1) * 2 + 23 + 'px';
            span.innerHTML = array[index];
            div.appendChild(span);
            setTimeout(function() {
                span.style.backgroundColor = 'rgb(0, 0, 255, 0.2)'
            }, 10);
            index++;
        } else if (array.length < children.length) {
            div.removeChild(children[--index]);
            positionsList.pop();
        }
    }
    this.swap = function(array) {
        for (let i = 0; i < children.length; i++) {
            if (array[i] != children[i].innerHTML) {
                var span1 = children[i];
                var span2 = children[i + 1];
                span1.style.backgroundColor = span2.style.backgroundColor = 'rgb(255, 0, 0, 0.9)';
                setTimeout(function() {
                    span1.style.backgroundColor = span2.style.backgroundColor = 'rgb(0, 0, 255, 0.2)'
                }, 700);
                list.insertBefore(span2, span1);
                setTimeout(function() {
                    span1.style.left = positionsList[i + 1];
                    span2.style.left = positionsList[i];
                }, 100);
            }
        }
    }
}

module.exports = Visualizer;