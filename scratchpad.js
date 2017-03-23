function fibonacci(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");

    //base cases
    if (n < 2) {
        if (n === 0) value = 0;
        if (n === 1) value = 1;

        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
    } else {
        var left = fibonacci(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " left");

        var right = fibonacci(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " right");

        value = left.value + right.value;
        p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

function pellS(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "pell");

    if(n < 2){
        if (n === 0) value = 0;
        if (n === 1) value = 1;

        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p)
    }else{
        var left = pellS(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " left");

        var right = pellS(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " right");

        value = (2 * left.value) + right.value;

        p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

function tribonacci(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "trib");

    if(n < 3) {
        if (n === 0) value = 0;
        if (n === 1) value = 0;
        if (n === 2) value = 1;

        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p)

    } else {
        var left = tribonacci(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " left");

        var center = tribonacci(n - 2);
        clas = center.html.getAttribute("class");
        center.html.setAttribute("class", clas + " center");

        var right = tribonacci(n - 3);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " right");

        value = left.value + center.value + right.value;

        p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(center.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

var fib = function (n, node) {
    var tree = fibonacci(n);
    node.appendChild(tree.html);
};

var pell = function (n, node) {
    var tree = pellS(n);
    node.appendChild(tree.html);
};

var trib = function (n, node) {
    var tree = tribonacci(n);
    node.appendChild(tree.html);
};

var button = function(me, id) {
    var form = me.parentNode;
    var slider = form.querySelector('input');
    var value = parseInt(slider.value);
    var node = form.parentNode;

    var fibTree = node.querySelector('div.fib');
    var pellTree = node.querySelector('div.pell');
    var tribTree = node.querySelector('div.trib');

    if(fibTree) node.removeChild(fibTree);
    if(pellTree) node.removeChild(pellTree);
    if(tribTree) node.removeChild(tribTree);

    if(id === 'fib') fib(value, node);
    if(id === 'pell') pell(value, node);
    if(id === 'trib') trib(value, node);
};

var slider = function(me, id) {
    var form = me.parentNode;
    var button = form.querySelector('button');
    button.textContent = id + '(' + me.value + ')';
};


