/* This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places. */

function distanceBetweenPoints(a, b) {
    const distX = (b.x - a.x) ** 2
    const distY = (b.y - a.y) ** 2
    const sum = distX + distY
    const dist = Math.sqrt(sum)
   return dist;
};