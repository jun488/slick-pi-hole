var url = "";

// If Chrome, can't get the target URL by regular means
if (location.host == "chromewebdata") {
	var failedUrlStart = document.body.innerHTML.indexOf('{"failedUrl":"') + 14;
	var failedUrlEnd = document.body.innerHTML.indexOf('"',failedUrlStart);
	url = document.body.innerHTML.substring(failedUrlStart,failedUrlEnd);
}
else url = location.href;

// Just decode a bunch of times. Probably an overkill and not the best option, but it works
url = decodeURIComponent(decodeURIComponent(decodeURIComponent(decodeURIComponent(url))));

window.location.href = url.substring(url.lastIndexOf("http"));
