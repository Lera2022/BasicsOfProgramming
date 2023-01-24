function krestiki(size,kletka,left,top)
{
size--;
for (let y = 0; y < size; y++)
{
for (let x = 0; x < size; x++)
{
drawLine(left+(x+1) * kletka, top, left+(x+1)*kletka, top+(y+2)*kletka, 'black');
drawLine(left, top+(y+1) * kletka, left+(x+2)*kletka, top+(y+1)*kletka, 'black');
}
}
}

let size=3
let kletka=100;
let left=50;
let top=50;
for (let i=1;i<=size;i++)
{
let newKletka=kletka*i/size;
let smes=size*(kletka-newKletka)/2;
krestiki(size, newKletka, smes+left, smes+top);
}