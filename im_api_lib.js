/*
 * Insight Maker API Test
 * written by Bill Braun
 * version 0.8.2
 * this code can be freely copied
 */

// =========================
// Connect to the IM Model
// =========================


function modelConnect() {
  // edit var modelID to point to desired model; click the Embed button on tool bar to see model number
  var modelID="im9572";
  var getModelElement = document.getElementById(modelID).contentWindow;
  return(getModelElement);
}


// =========================
// Manage Parameters
// =========================

// the setParameterX function can be duplicated for each separate model parameter that will appear in the GUI
// examples below

function setParameter1(){
  var modelID="im9572";
  var p1 = document.getElementById("parameter1").value;
  var model = document.getElementById(modelID).contentWindow;
  model.postMessage("setValue(findName('parameter1'), '"+p1+"')", "*"); // "+(p1/1)*1+"')"
}
    
function setParameter2(){
  var modelID="im9572";
  var p2 = document.getElementById("parameter2").value;
  var model = document.getElementById(modelID).contentWindow;
  model.postMessage("setValue(findName('parameter2'), '"+p2+"')", "*"); // "+(p2/1)*1+"')"
}
    
/*
function setParameter1(){
  var targetPrimitiveName = "parameter1";
  var p1 = document.getElementById(targetPrimitiveName).value;
  var model = modelConnect();
  var setParameter1API = "setValue(targetPrimitiveName, 20)"; // was setParameter1API
  model.postMessage(setParameter1API, "*");
}
    
function setParameter2(){
  var targetPrimitiveName = "parameter2";
  var p2 = document.getElementById(targetPrimitiveName).value;
  var model = modelConnect();
  var setParameter2API = "setValue(targetPrimitiveName, 5)"; // was setParameter2API
  model.postMessage(setParameter1API, "*");
}
*/

// or, use the setParameter function below making the argument targetPrimitiveName the name of the desired IM parameter

function setParameter(targetPrimitiveName){
  var p = document.getElementById(targetPrimitiveName).value;
  var model = modelConnect();
  var setParameterAPI = "setValue(findName(targetPrimitiveName), '"+p+"')"; // was setParameter1API
  model.postMessage(setParameterAPI, "*");
}

// =========================
// Run Simulation
// =========================

function runSim() {
  var model = modelConnect();
  var runSimAPI = "runModel({silent: false})";
  model.postMessage(runSimAPI,"*");
}

// =========================
// sample static graph function; has to be revised to be dynamic
// =========================

function drawGraph () {
  var model = modelConnect();
  var drawGraphAPI = "showData(\"Sample Data\",[{name:\"A Chart\",type: \"chart\",xLabel: \"Chart x-axis\",yLable: \"Chart y-axis\",Legend: \"top\",horizontalGrid: true, verticalGrid: true,xType:\"Numeric\",xData: [1,2,3,4,5], data:[{data: [1,4,9,16,25],type:\"line\",name:\"Energy\",},{data: [1,2,3,4,5],type:\"line\", name:\"Cost\"}] }])";
  model.postMessage(drawGraphAPI,"*");
}

// =========================
// Manage IM Interface
// =========================

function topBarToggle () {
  var model = modelConnect();
  var topBarToggleAPI = "toggleTopBar()";
  model.postMessage(topBarToggleAPI,"*");
}

function sideBarToggle () {
  var model = modelConnect();
  var sideBarToggleAPI = "toggleSideBar()";
  model.postMessage(sideBarToggleAPI,"*");
}

function topBarShow () {
  var model = modelConnect();
  var topBarShowAPI = "topBarShown()";
  model.postMessage(topBarShowAPI,"*");
}

function sideBarShow () {
  var model = modelConnect();
  var sideBarShowAPI = "sideBarShown()";
  model.postMessage(sideBarShowAPI,"*");
}
