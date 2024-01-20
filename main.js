var urlToBeParsed = "<<URL_TO_BE_PARSED>>";


const getIframeSrc = async (url) => {
  try {
    const response = await axios.get(url);
	const htmlString = response.data
		
	var parser = new DOMParser();
	var doc = parser.parseFromString(htmlString, "text/html");
	
    const iframeSrc = doc.querySelector("iframe");
    return iframeSrc.src
  } catch (error) {
	  console.log(error)
    return null;
  }
};

const main = async () => {
	const iframeUrl = await getIframeSrc(urlToBeParsed)
        return iframeUrl;
}

main()
        .then(r => {
                window.AndroidInterface.sendData(r);
        })

