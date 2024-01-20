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

const getPlayerSrc = () => {
  try {
    let src = player._options.source
    if (!src) {
      src = player._options.sources[0].source
    }
    if (!src) {
      src = player._options.sources[0]
    }
    return src;
  }
  catch (error) {
    return null
  }
}

const isValidURL = (url) => {
  const pattern = /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/.*)*$/;
  return pattern.test(url);
}

function getBaseURL() {
  return window.location.protocol + "//" + window.location.host;
}


const main = async () => {
  try {
    await addAxios()


    const src = getPlayerSrc();
    const referer = getBaseURL();

    if (src) {
      const data = {
        referer,
        src
      }
      return JSON.stringify(data)
    }
    else {
      const m = await getIframeSrc(window.location.href)

      if (!m || !isValidURL(m)) {
        return -1;
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
  }).catch(e => {
    window.AndroidInterface.sendData(e.message);
  })

