var swap = require('./swap');

test('swaps span1 and span2 id and style.left',()=>{ 
    var span1 = document.createElement('span');
    span1.id = 1;
    span1.style.left = '10px';
    var span2 = document.createElement('span');
    span2.id = 2;
    span2.style.left = '20px';
    swap(span1, span2);
    expect(span1.id).toBe('2');
    expect(span2.id).toBe('1');
    expect(span1.style.left).toBe('20px');
    expect(span2.style.left).toBe('10px');
});