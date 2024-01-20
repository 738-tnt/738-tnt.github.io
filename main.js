const urlToBeParsed = "<<URL_TO_BE_PARSED>>";



const addAxios = () => {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}


const getIframeSrc = async () => {
  try {
    const r = await axios.get(urlToBeParsed);
    const htmlString = r.data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const iframeSrc = doc.querySelector("iframe").src;

    return iframeSrc

    //console.log(iframeSrc);
  } catch (error) {
    return error
  }
}



const main = async () => {
  try {
    await addAxios()

    if(player){

    }
    else{
      const m = await getIframeSrc()
      return m
    }    
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

