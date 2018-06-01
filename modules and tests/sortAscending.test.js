var sortAscending = require('./sortAscending');

test ('ensures that element with greater content has greater id and position to the right of another one', ()=>{
    document.body.innerHTML = '<span id="0" style = "left: 10px">2</span><span id="1" style = "left: 20px">1</span>';
    var spans = document.getElementsByTagName('span');
    sortAscending(spans);
    expect(spans[0].id).toBe('1');
    expect(spans[1].id).toBe('0');
    expect(spans[0].style.left).toBe('20px');
    expect(spans[1].style.left).toBe('10px');
    expect(spans[0].innerHTML).toBe('2');
    expect(spans[1].innerHTML).toBe('1');
});

test ('ensures that element with greater content has greater id and position to the right of another one', ()=>{
    document.body.innerHTML = '<span id="0" style = "left: 10px">1</span><span id="1" style = "left: 20px">2</span>';
    var spans = document.getElementsByTagName('span');
    sortAscending(spans);
    expect(spans[0].id).toBe('0');
    expect(spans[1].id).toBe('1');
    expect(spans[0].style.left).toBe('10px');
    expect(spans[1].style.left).toBe('20px');
    expect(spans[0].innerHTML).toBe('1');
    expect(spans[1].innerHTML).toBe('2');
});