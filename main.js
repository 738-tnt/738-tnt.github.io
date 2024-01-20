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


const getIframeSrc = async (url) => {
  try {
    const r = await axios.get(url);
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

const getPlayer = () => {
  try{
    return player;
  }
  catch(error){
    return null
  }
}


const main = async () => {
  try {
    await addAxios()

    
    const player = getPlayer();
    if(player){
        return player._options.sources[0].source
    }
    else{
      const m = await getIframeSrc(window.location.href)

      if(!m){
        return "Unable to get url";
      }

      window.location.href = m;
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

