// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.drawing.style.wordSpacing.measure.relative
// Description:Testing if word spacing is working properly with font-relative length
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Testing if word spacing is working properly with font-relative length");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

_assertSame(ctx.letterSpacing, '0px', "ctx.letterSpacing", "'0px'");
_assertSame(ctx.wordSpacing, '0px', "ctx.wordSpacing", "'0px'");
ctx.font = "10px monospace";
var width_normal = ctx.measureText('Hello World, again').width;
var ch_width = width_normal / 18;

function test_word_spacing(value, difference_spacing, epsilon) {
  ctx.wordSpacing = value;
  _assertSame(ctx.letterSpacing, '0px', "ctx.letterSpacing", "'0px'");
  _assertSame(ctx.wordSpacing, value, "ctx.wordSpacing", "value");
  width_with_word_spacing = ctx.measureText('Hello World, again').width;
  assert_approx_equals(width_with_word_spacing, width_normal + difference_spacing, epsilon, "word spacing doesn't work.");
}

// The first value is the word Spacing to be set, the second value the
// change in length of string 'Hello World', note that there are 2 words
// in 'Hello World, again', so the length difference is always wordSpacing * 2.
// and the third value is the acceptable differencee for the length change.
test_cases = [['1em', 20, 0.1],
              ['-0.5em', -10, 0.1],
              ['1ch', 2 * ch_width, 0.1]]

for (const test_case of test_cases) {
  test_word_spacing(test_case[0], test_case[1], test_case[2]);
}
t.done();

});
done();
