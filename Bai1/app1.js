function findCpNumbers() {
  var a = document.getElementById("numberA").value;
  var b = document.getElementById("numberB").value;
  var result = "";

  if (isNaN(a) || isNaN(b)) {
    result = "Vui lòng nhập số hợp lệ!";
  } else {
    for (var i = a; i <= b; i++) {
      if (Math.sqrt(i) % 1 === 0) {
        result += i + " ";
      }
    }

    if (result === "") {
      result = `Không có số chính phương nào trong khoảng từ" ${a} đến ${b}`;
    } else {
      result = `<strong>Các số chính phương trong khoảng từ ${a} đến ${b}:</strong> ${result}`;
    }
  }

  document.getElementById("result").innerHTML = result;
}
