
function action1(data) {
    console.log(data);
    return 1;
}
function action2(data) {
    if (data != "2222") {
        throw "error in action2";
    }
    else {
        console.log(data);
        return 2;
    }
}
function action3(data) {
    if (data != "3333") {
        throw "error in action3";
    }
    else {
        console.log(data);
        return 3;
    }
}

function action4(data) {
    console.log(data);
}

function doSomething() {
    var x1 = action1("1111");
    var x2 = action2("2222");
    var x3 = action3("3333");
    return (x1 + x2 + x3);
}

function top() {
    try {
        return doSomething();
    }
    catch (e) {
        console.log(e);
    }
    finally {
        action4("4444");
    }
}

console.log(top());
