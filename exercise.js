//bài 11
//11.1
//input math, physic,chemistry point
//ouput avarage point
var physic = 8;
var chemistry = 7;
var math = 7;
var avarage = (physic + chemistry + math) / 3;
console.log("avarage:", avarage);
//11.2
//input   degrees Celsius
//output Fahrenheit degrees
var degreeC = 16;
var degreeF = (9 * degreeC) / 5 + 32;
console.log("degreeF:", degreeF);
//11.3
//input:bán kính hình tròn:r
//output: Chu vi hình tròn:C
var r = 5;
var C = r * 2 * 3.14;
console.log("C: ", circumference);
//Modal xác nhận từ ng dùng
// var isLogout= window.confirm("bạn có muốn đăng xuất không?");
// if(isLogout===true){
//   console.log("đăng xuất thành công")
// }else{
//   console.log("bạn đã hủy đăng xuất");
// }
// window.alert("phiên của bạn đã hết.");
//yêu cầu user nhập vào tuổi. nếu tuổi >18 và là con trai thì hiển thị thông báo là đủ đk, ngược lại
//không đủ điều kiện
var age = +prompt(input - age);
var gender = prompt(input - gender);
if (age >= 18 && gender == nam) {
  alert("bạn đủ điều kiện");
} else {
  alert("bạn cút");
}
//những giá trị sẽ nhận là true trong js
//một chuỗi rỗng, false, null,0, NaN, undefined
var value = NaN;
if (value) {
  console.log("đk đúng");
} else {
  console.log("đk sai");
}
