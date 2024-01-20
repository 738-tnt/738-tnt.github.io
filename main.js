const urlToBeParsed = "<<URL_TO_BE_PARSED>>";



const addAxios = () => {
  // Create a new script element
var script = document.createElement('script');
// Set the source URL for the Axios library
script.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
// Append the script element to the document's head
document.head.appendChild(script);
}
const getIframeSrc = async () => {
  try {
    return "htmlString"
    const r = await axios.get("https://score808.us/site-pages/CHTV31");
    const htmlString = r.data;

    
    

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const iframeSrc = doc.querySelector("iframe").src;

    //console.log(iframeSrc);
  } catch (error) {
    return error
  }
}



const main = async () => {
  try {
    addAxios()
    const m = await getIframeSrc()
    return m
  }
  catch (e) {
    console.log(e)
    return "nullsdsd"
  }

}

main()
  .then(r => {
    window.AndroidInterface.sendData(r);
  })

