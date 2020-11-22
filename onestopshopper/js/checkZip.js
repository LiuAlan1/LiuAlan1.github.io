function prefillZip() {
	var x = getZipCode();
    document.getElementById('textBox').value = x;
}

if (document.URL.includes("index.html") || document.URL.includes("category.html")){
    window.onload = prefillZip;
}