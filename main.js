const urlToBeParsed = "<<URL_TO_BE_PARSED>>";


const getIframeSrc = async () => {
  try {
    const r = await axios.get("https://score808.us/site-pages/CHTV31");
    const htmlString = r.data;

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const iframeSrc = doc.querySelector("iframe").src;

    //console.log(iframeSrc);
    return iframeSrc
  } catch (error) {
    return null
  }
}



const main = async () => {
  try {
    const m = await fetchData()
    return m
  }
  catch (e) {
    console.log(e)
    return null
  }

}

main()
  .then(r => {
    window.AndroidInterface.sendData(r);
  })

