function mouseOver() {
  document.getElementById("para").style.color = "red";
}

function mouseOut() {
  document.getElementById("para").style.color = "black";
}

var tbl = document.getElementById("tblMain");

if (tbl != null) {

  if (tbl.rows[0] != null) {

    tbl.rows[0].style.backgroundColor = "#365890";

    tbl.rows[0].style.color = "#FFFFFF";

  }

  for (var i = 1; i < tbl.rows.length; i++) {

    tbl.rows[i].style.cursor = "pointer";

    tbl.rows[i].onmousemove = function () { this.style.backgroundColor = "#FF2080"; this.style.color = "#FFFFFF"; };

    tbl.rows[i].onmouseout = function () { this.style.backgroundColor = ""; this.style.color = ""; };

  }

}