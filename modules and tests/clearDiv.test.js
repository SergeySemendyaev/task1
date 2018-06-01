var clearDiv = require('./clearDiv');

test('clearDiv removes all spans from div', () => {
    document.body.innerHTML = '<div class="list"><span></span><span></span></div>';
    clearDiv();
    expect(document.getElementsByTagName("span").length).toBe(0);
});