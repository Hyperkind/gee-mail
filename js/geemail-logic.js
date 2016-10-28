window.onload = function(){

  var table = document.getElementById("tablebody");

  function inbox(geemail, index) {
    var content = document.getElementById("tablebody");

    var row = document.createElement("tr");
    row.className = ("row");
    row.ondblclick = function(){
      var bodyRow = document.getElementById("rowBody" + index);
      if (bodyRow.style.display == "none"){
        bodyRow.style.display = "table-row";
      } else {
        bodyRow.style.display = "none";
      }
    };
    content.appendChild(row);

    var date = document.createElement("td");
    date.className = ("date");
    date.innerHTML = geemail.date;
    row.appendChild(date);

    var sender = document.createElement("td");
    sender.className = ("sender");
    sender.innerHTML = geemail.sender;
    row.appendChild(sender);

    var subject = document.createElement("td");
    subject.className = ("subject");
    subject.innerHTML = geemail.subject;
    row.appendChild(subject);

    var row2 = document.createElement("tr");
    row2.id = "rowBody" + index;
    row2.style.display = "none";
    content.appendChild(row2);

    var body = document.createElement("td");
    body.colSpan = 3;
    body.className = ("body");
    body.innerHTML = geemail.body;
    row2.appendChild(body);

    var inboxCount = document.getElementById("inboxNumber");
    inboxCount.innerHTML = "Inbox Count: " + window.geemails.length;
  }

  function newMail(){
    var newGeemail = getNewMessage();
    window.geemails.push(newGeemail);
    inbox(newGeemail, window.geemails.length);
  }

  for(var i = 0; i < window.geemails.length; i++) {
    inbox(window.geemails[i], i + 1);
  };

  setInterval(newMail, 5000);
};
