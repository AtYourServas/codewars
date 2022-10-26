function domainName(url) {
    url = url.replace("http://", "").replace("www.","").replace("https://","")
    return url.split('.')[0]
}