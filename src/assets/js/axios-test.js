
var axios = require("axios")
var cheerio = require("cheerio")

// let headers={
//     authority:"x",
//     method: "x",
//     path: "x",
//     scheme: "x",
//     accept: "x",
//     acceptEncoding: "x",
//     acceptLanguage: "x",
//     cacheControl:"x",
//     cookie:"x",
//     secFetchDest:"x",
//     secFetchMode:"x",
//     secFetchSite:"x",
//     secFetchUser:"x",
//     upgradeInsecureRequests:"x",
//     userAgent:"x",
// }

axios.get('http://127.0.0.1:80/public/index.html')
    .then(function (res) {
        // 获取网页数据
        console.log(res);
        // let $ = cheerio.load(res.data)
        // let data = $("div.ng2-app").prev().text()
        // // console.log(data);
        // eval(data)
        // // console.log(xplGlobal); 
        // // console.log(xplGlobal.document.metadata.abstract);
        // console.log(cheerio.load(`<div id="abstract">${xplGlobal.document.metadata.abstract}</div>`)("div#abstract").text());
    })
    .catch(function (err) {
        console.log('failed', err);
    });



/*

// let a = `Undirected graphs are frequently used to model phenomena that deal with interacting objects, such as social networks, brain activity and communication networks. The topology of an undirected graph
// $G$
//  can be captured by an adjacency matrix; this matrix in turn can be visualized directly to give insight into the graph structure. Which visual patterns appear in such a matrix visualization crucially depends on the
// ordering
//  of its rows and columns. Formally defining the quality of an ordering and then automatically computing a high-quality ordering are both challenging problems; however, effective heuristics exist and are used in practice.
// Often, graphs do not exist in isolation but as part of a collection of graphs on the same set of vertices, for example, brain scans over time or of different people. 
// To visualize such graph collections, we need a single ordering that works well for all matrices simultaneously. The current state-of-the-art solves this problem by taking a (weighted) union over all graphs and applying existing heuristics. However, this union leads to a loss of information, specifically in those parts of the graphs which are different. We propose a collection-aware approach to avoid this loss of information and apply it to two popular heuristic methods: leaf order and barycenter.

// The de-facto standard computational quality metrics for matrix ordering capture only block-diagonal patterns (cliques). Instead, we propose to use Moran's $I$, a spatial auto-correlation metric, which captures the full range of established patterns. Moran's $I$ refines previously proposed stress measures. Furthermore, the popular 
// leaf order method heuristically optimizes a similar measure which further supports the use of Moran's $I$ in this context. An ordering that maximizes Moran's $I$ can 
// be computed via solutions to the Traveling Salesperson Problem (TSP); orderings that approximate the optimal ordering can be computed more efficiently, using any of the approximation algorithms for metric TSP.

// We evaluated our methods for simultaneous orderings on real-world datasets using Moran's $I$ as the quality metric. Our results show that our collection-aware approach matches or improves performance compared to the union approach, depending on the similarity of the graphs in the collection. Specifically, our Moran's $I$-based collection-aware leaf order implementation consistently outperforms other implementations. Our collection-aware implementations carry no significant additional computational costs.`

// console.log(a.replace("/n/g", " "));

let aa = `var body_rightsLink ="", body_publisher = "";
var recordId = "";


var AUTHOR_PROFILE = 'ON';
if (AUTHOR_PROFILE.toUpperCase() == "OFF"){
	var AUTHOR_PROFILE_ENABLED = false;
}else{
	var AUTHOR_PROFILE_ENABLED = true;
}

var xplGlobal = {
	document: {
		disqus:{
			remote_auth_s3 : 'KHt9KQ== 00f9bd3202b584bdd9c430410071e8adc4b15388 1654153850',
			public_api_key:'1lxKgMbpNIbQvfk2tqLcWeSVloE8rgIY2CV1tCu3Vp641oL4eEITYBbkViJJGNYY',
			short_name:'ieeexplore',
			client_url:'https://ieeexplore.ieee.org',
			sso_enabled:'{$sessionProfile.provisioned}'
		},

		fullTextAccess: true,
		isAccessFromInstitution: true
		
	}
};
	
	xplGlobal.document.metadata={"userInfo":{"customerNameRaw":"Zhejiang Lab","institutionName":"Zhejiang Lab","institute":true,"member":false,"individual":false,"guest":false,"subscribedContent":false,"fileCabinetContent":false,"fileCabinetUser":false,"institutionalFileCabinetUser":false,"products":"IEL|MITP:2020:2020|EBOOKS:1974:2020|MITP|Draft|VDE|NOKIA BELL LABS|","instType":"Government","userIds":[7153812],"showPatentCitations":true,"showGet802Link":true,"openUrlImgLoc":"/assets/img/btn.find-in-library.png","openUrlLink":"NA","showOpenUrlLink":false,"marketingInfoCaptured":false,"tracked":false,"ringGoldId":"","delegatedAdmin":false,"desktop":false,"isInstitutionDashboardEnabled":false,"isInstitutionProfileEnabled":false,"isRoamingEnabled":false,"isDelegatedAdmin":false,"isMdl":false,"isCwg":false,"isIel":true},"authors":[{"name":"Nathan van Beusekom","affiliation":["TU Eindhoven, the Netherlands"],"firstName":"Nathan","lastName":"van Beusekom","id":"37089206339"},{"name":"Wouter Meulemans","affiliation":["TU Eindhoven, the Netherlands"],"firstName":"Wouter","lastName":"Meulemans","id":"37073861100"},{"name":"Bettina Speckmann","affiliation":["TU Eindhoven, the Netherlands"],"firstName":"Bettina","lastName":"Speckmann","id":"37591266000"}],"issn":[{"format":"Print ISSN","value":"1077-2626"},{"format":"Electronic ISSN","value":"1941-0506"},{"format":"CD","value":"2160-9306"}],"articleNumber":"9552242","dbTime":"3 ms","metrics":{"citationCountPaper":0,"citationCountPatent":0,"totalDownloads":327},"sponsors":[{"packageNumber":0,"name":"IEEE Computer Society","url":"http://www.computer.org/"}],"purchaseOptions":{"showOtherFormatPricingTab":false,"showPdfFormatPricingTab":true,"pdfPricingInfoAvailable":true,"otherPricingInfoAvailable":false,"mandatoryBundle":false,"optionalBundle":false,"pdfPricingInfo":[{"memberPrice":"$14.95","nonMemberPrice":"$33.00","partNumber":"9552242","type":"PDF/HTML"}]},"getProgramTermsAccepted":false,"sections":{"abstract":"true","authors":"true","figures":"true","multimedia":"true","references":"true","citedby":"false","keywords":"true","definitions":"false","algorithm":"false","dataset":"false","cadmore":"false","footnotes":"true","disclaimer":"false","relatedContent":"false","metrics":"true"},"pdfUrl":"/stamp/stamp.jsp?tp=&arnumber=9552242","keywords":[{"type":"IEEE Keywords","kwd":["Visualization","Measurement","Tools","Symmetric matrices","Current measurement","Standards","Social networking (online)"]},{"type":"INSPEC: Controlled Indexing","kwd":["approximation theory","data visualisation","directed graphs","mathematics computing","matrix algebra","metaheuristics","travelling salesman problems"]},{"type":"INSPEC: Non-Controlled Indexing","kwd":["simultaneous matrix orderings","graph collections","undirected graphs","matrix visualization","high-quality ordering","heuristic methods","barycenter method","de-facto standard computational quality metrics","leaf order method","Moran I-based collection-aware leaf order implementation","traveling salesperson problem","TSP","approximation algorithms"]},{"type":"Author Keywords ","kwd":["Matrix ordering","graph visualization","algorithms","quality measures"]}],"allowComments":false,"displayPublicationDate":"29 September 2021","articleCopyRight":"2021 IEEE","pubLink":"/xpl/RecentIssue.jsp?punumber=2945","abstract":"Undirected graphs are frequently used to model phenomena that deal with interacting objects, such as social networks, brain activity and communication networks. The topology of an undirected graph \n<inline-formula><tex-math notation=\"LaTeX\">$G$</tex-math></inline-formula>\n can be captured by an adjacency matrix; this matrix in turn can be visualized directly to give insight into the graph structure. Which visual patterns appear in such a matrix visualization crucially depends on the \n<i>ordering</i>\n of its rows and columns. Formally defining the quality of an ordering and then automatically computing a high-quality ordering are both challenging problems; however, effective heuristics exist and are used in practice. \n<p>Often, graphs do not exist in isolation but as part of a collection of graphs on the same set of vertices, for example, brain scans over time or of different people. To visualize such graph collections, we need a <i>single</i> ordering that works well for all matrices <i>simultaneously</i>. The current state-of-the-art solves this problem by taking a (weighted) union over all graphs and applying existing heuristics. However, this union leads to a loss of information, specifically in those parts of the graphs which are different. We propose a <i>collection-aware</i> approach to avoid this loss of information and apply it to two popular heuristic methods: leaf order and barycenter.</p>\n \n<p>The de-facto standard computational quality metrics for matrix ordering capture only block-diagonal patterns (cliques). Instead, we propose to use <i>Moran's</i> <inline-formula><tex-math notation=\"LaTeX\">$I$</tex-math><alternatives><graphic orientation=\"portrait\" position=\"float\" xlink:href=\"28tvcg01-beusekom-3114773-eqinline-2-small.tif\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"/></alternatives></inline-formula>, a spatial auto-correlation metric, which captures the full range of established patterns. Moran's <inline-formula><tex-math notation=\"LaTeX\">$I$</tex-math><alternatives><graphic orientation=\"portrait\" position=\"float\" xlink:href=\"28tvcg01-beusekom-3114773-eqinline-3-small.tif\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"/></alternatives></inline-formula> refines previously proposed stress measures. Furthermore, the popular leaf order method heuristically optimizes a similar measure which further supports the use of Moran's <inline-formula><tex-math notation=\"LaTeX\">$I$</tex-math><alternatives><graphic orientation=\"portrait\" position=\"float\" xlink:href=\"28tvcg01-beusekom-3114773-eqinline-4-small.tif\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"/></alternatives></inline-formula> in this context. An ordering that maximizes Moran's <inline-formula><tex-math notation=\"LaTeX\">$I$</tex-math><alternatives><graphic orientation=\"portrait\" position=\"float\" xlink:href=\"28tvcg01-beusekom-3114773-eqinline-5-small.tif\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"/></alternatives></inline-formula> can be computed via solutions to the Traveling Salesperson Problem (TSP); orderings that approximate the optimal ordering can be computed more efficiently, using any of the approximation algorithms for metric TSP.</p>\n \n<p>We evaluated our methods for simultaneous orderings on real-world datasets using Moran's <inline-formula><tex-math notation=\"LaTeX\">$I$</tex-math><alternatives><graphic orientation=\"portrait\" position=\"float\" xlink:href=\"28tvcg01-beusekom-3114773-eqinline-6-small.tif\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"/></alternatives></inline-formula> as the quality metric. Our results show that our collection-aware approach matches or improves performance compared to the union approach, depending on the similarity of the graphs in the collection. Specifically, our Moran's <inline-formula><tex-math notation=\"LaTeX\">$I$</tex-math><alternatives><graphic orientation=\"portrait\" position=\"float\" xlink:href=\"28tvcg01-beusekom-3114773-eqinline-7-small.tif\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"/></alternatives></inline-formula>-based collection-aware leaf order implementation consistently outperforms other implementations. Our collection-aware implementations carry no significant additional computational costs.</p>","formulaStrippedArticleTitle":"Simultaneous Matrix Orderings for Graph Collections","doi":"10.1109/TVCG.2021.3114773","startPage":"1","endPage":"10","publicationTitle":"IEEE Transactions on Visualization and Computer Graphics","displayPublicationTitle":"IEEE Transactions on Visualization and Computer Graphics","pdfPath":"/iel7/2945/9663056/09552242.pdf","rightsLink":"http://s100.copyright.com/AppDispatchServlet?publisherName=ieee&publication=2945&title=Simultaneous+Matrix+Orderings+for+Graph+Collections&isbn=&publicationDate=Jan.+2022&author=Nathan+van+Beusekom&ContentID=10.1109/TVCG.2021.3114773&orderBeanReset=true&startPage=1&endPage=10&volumeNum=28&issueNum=1","issueLink":"/xpl/tocresult.jsp?isnumber=9663056","doiLink":"https://doi.org/10.1109/TVCG.2021.3114773","isReadingRoomArticle":false,"isGetArticle":false,"isGetAddressInfoCaptured":false,"isMarketingOptIn":false,"pubTopics":[{"name":"Computing and Processing"},{"name":"Bioengineering"},{"name":"Signal Processing and Analysis"}],"publisher":"IEEE","isDynamicHtml":true,"isFreeDocument":false,"chronOrPublicationDate":"Jan.  2022","isSAE":false,"isOUP":false,"isCustomDenial":false,"isNow":false,"isSMPTE":false,"htmlAbstractLink":"/document/9552242/","isPromo":false,"isNotDynamicOrStatic":false,"isStandard":false,"displayDocTitle":"Simultaneous Matrix Orderings for Graph Collections","xploreDocumentType":"Journals & Magazine","isProduct":false,"isMorganClaypool":false,"isConference":false,"volume":"28","issue":"1","htmlLink":"/document/9552242/","isStaticHtml":false,"isChapter":false,"isOpenAccess":false,"isEphemera":false,"dateOfInsertion":"24 December 2021","isEarlyAccess":false,"isJournal":true,"isBook":false,"isBookWithoutChapters":false,"pubMedId":"34587024","accessionNumber":"21506077","persistentLink":"https://ieeexplore.ieee.org/servlet/opac?punumber=2945","startPage":"1","articleCopyRight":"2021 IEEE","openAccessFlag":"F","ephemeraFlag":"false","title":"Simultaneous Matrix Orderings for Graph Collections","accessionNumber":"21506077","html_flag":"false","ml_html_flag":"true","sourcePdf":"28tvcg01-beusekom-3114773-x.pdf","displayPublicationDate":"29 September 2021","content_type":"Journals & Magazines","mlTime":"PT0.112181S","chronDate":"Jan.  2022","xplore-pub-id":"2945","pdfPath":"/iel7/2945/9663056/09552242.pdf","isNumber":"9663056","rightsLinkFlag":"1","dateOfInsertion":"24 December 2021","contentType":"periodicals","publicationDate":"Jan. 2022","publicationNumber":"2945","xplore-issue":"9663056","issue":"1","articleId":"9552242","publicationTitle":"IEEE Transactions on Visualization and Computer Graphics","sections":{"abstract":"true","authors":"true","figures":"true","multimedia":"true","references":"true","citedby":"false","keywords":"true","definitions":"false","algorithm":"false","dataset":"false","cadmore":"false","footnotes":"true","disclaimer":"false","relatedContent":"false","metrics":"true"},"pubMedId":"34587024","volume":"28","onlineDate":"29 September 2021","contentTypeDisplay":"Journals","publicationYear":"2022","subType":"IEEE Transaction","_value":"IEEE","lastupdate":"2022-05-29","mediaPath":"/mediastore_new/IEEE/content/media/2945/9663056/9552242","endPage":"10","displayPublicationTitle":"IEEE Transactions on Visualization and Computer Graphics","doi":"10.1109/TVCG.2021.3114773"};


	xplGlobal.document.userLoggedIn=true;`

aa += ';return xplGlobal;'

let bb = eval(aa)
console.log(bb);

*/