function getUrlStr(){
	var urlParameters = location.search;//获取url？后字符串
	var requestParameters = new Object();
	if (urlParameters.indexOf('?') != -1){
		var parameters = decodeURI(urlParameters.substr(1));
		parameterArray = parameters.split('&');
		for (var i = 0; i < parameterArray.length; i++) {
			requestParameters[parameterArray[i].split('=')[0]] = (parameterArray[i].split('=')[1]);
		}
	}
	return requestParameters;
}