console.log("Hello");
//a*x**2+b*x+c=0
//d=b**2-4*a*c;
//if d<0 then no roots
// if d==0 then one root
//if d>0 then
let a = prompt("input a");
let b = prompt("input b");
let c = prompt("input c");
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("not a number");
} else {
  //   let x;
  //   if (a == 0) {
  //     alert("ERORR");
  //   } else {
  //     x = -b / a;
  //     alert(x);
  //   }
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    alert("No Roots");
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    alert(x1);
  }
}
