 
let btn = document.getElementById('btn');
  btn.addEventListener('click', fun);
  
  function fun() {
    let day = new Date();
    let entrance = day.getHours() + " AM:" + day.getMinutes() + ":" + day.getSeconds();
    let parkingTable = document.getElementById("myTable");
    let name = document.getElementById("name").value;
    let plate = document.getElementById("pl-num").value;
    let color = document.getElementById("carC").value;
    let phoneNum = document.getElementById("telNum").value;
    let checkInTime = document.getElementById("time").value;
    let row = parkingTable.insertRow();
    let numRow = document.getElementById('myTable').rows.length;
  
    row.innerHTML = `
      <td>${name}</td>
      <td>${plate}</td>
      <td>${color}</td>
      <td>${phoneNum}</td>
      <td>${checkInTime}</td>
      <td id="cost-${numRow}">---</td>
    `;
  
    row.id = numRow;
    let col = row.insertCell();
  
    let rem = document.createElement('input');
    rem.type = "button";
    rem.value = "ExitTime";
    rem.style = "background-color: white; color: black; border-radius: 40px; width: 80px; height: 30px";
    col.appendChild(rem);
  
    rem.onclick = function () {
      let exitTime = new Date();
      let exit = exitTime.getHours() + " AM:" + exitTime.getMinutes() + ":" + exitTime.getSeconds();
      let timeDiff = Math.abs(exitTime - day) / 36e5;
      let cost = timeDiff <= 4 ? timeDiff : 4 + Math.ceil((timeDiff - 4) / 24) * 6;
      document.getElementById(`cost-${numRow}`).textContent = `$${cost}`;
     
    };
  
    col = row.insertCell();
    rem = document.createElement('input');
    rem.type = "button";
    rem.value = "x";
    rem.style = "background-color: red; color: black; border-radius: 7px; width: 50px; height: 30px";
    col.appendChild(rem);
  
    rem.onclick = function del() {
      document.getElementById(numRow).remove();
    };
  };

  // Your JavaScript code here

document.getElementById('btn').addEventListener('click', function() {
  // Add your parking logic here
  alert('Car parked successfully!');
});

