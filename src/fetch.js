

function getRequestOptions(payload = null, method = "GET", options = []) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
  
    myHeaders.append("mode", "no-cors");
  
    
    
  
    options.forEach(option => {
      myHeaders.set(option.type, option.value);
    });
  
    // var raw = JSON.stringify(payload);
  
    var requestOptions = {
      method: method,
      headers: myHeaders
      // body: raw,
    };
    if (payload) {
      requestOptions["body"] = JSON.stringify(payload);
    }
  
    console.log("inside getRequestOption", myHeaders);
  
    return requestOptions;
}



async function fetchData(url, options) {
    options = options || {};
    const response = await fetch(url, options);
  try{
    const json = response ? await response.json() : "";
  
    return json;
  }
     catch(ex)
     {
  console.log(ex);
  return '';
     }
  }
  
  export {  fetchData ,getRequestOptions};