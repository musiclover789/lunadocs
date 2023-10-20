"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[833],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),c=o,k=m["".concat(s,".").concat(c)]||m[c]||g[c]||a;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[m]="string"==typeof t?t:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4940:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},l=void 0,i={unversionedId:"tutorial-basics/devtools.page",id:"tutorial-basics/devtools.page",title:"devtools.page",description:"\u5305   devtools.page",source:"@site/docs/tutorial-basics/devtools.page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/devtools.page",permalink:"/lunadocs/docs/tutorial-basics/devtools.page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/devtools.page.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"devtools.browser",permalink:"/lunadocs/docs/tutorial-basics/devtools.browser"},next:{title:"luna_utils",permalink:"/lunadocs/docs/tutorial-basics/luna_utils"}},s={},p=[],u={toc:p},m="wrapper";function g(t){let{components:e,...n}=t;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5305   devtools.page"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"GetHtml   \u83b7\u53d6\u5f53\u524dpage\u5bf9\u8c61\u7684\u9875\u9762\u6e90\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u200b\t\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u53d1\u73b0\u9875\u9762\u6e90\u4ee3\u7801\u5e76\u4e0d\u5b8c\u6574\u3001\u53ef\u80fd\u662f\u9875\u9762\u8fd8\u672a\u52a0\u8f7d\u5b8c\u6210\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  //\u5e72\u6389\u5176\u4ed6\u65e0\u5173\u7684chromium\u8fdb\u7a0b\n  luna_utils.KillProcess()\n    /********************************/\n    chromiumPath := "/Users/xxxx/Documents/workspace/Chromium.app/Contents/MacOS/Chromium"\n    //\u521d\u59cb\u5316\u6d4f\u89c8\u5668\u5bf9\u8c61\n    browserObj := devtools.NewBrowser(chromiumPath, &devtools.BrowserOptions{\n        CachePath: luna_utils.CreateCacheDirInSubDir("/Users/xxxx/Documents/workspace/golang/cache"),\n        Headless:  false,\n    })\n\n    var wg sync.WaitGroup // \u540c\u6b65\u7b49\u5f85\n    wg.Add(1)             // \u589e\u52a0\u7b49\u5f85\u7684\u6570\u91cf\n    err, p1 := browserObj.OpenPageAndListen("https://www.baidu.com/", func(devToolsConn *protocol.DevToolsConn) {\n        //\u7b2c\u4e00\u4e2a\u5904\u7406\n        devToolsConn.ShowLogJson(true)\n        page.PageEnable(devToolsConn)\n        devToolsConn.SubscribeOneTimeEvent("Page.loadEventFired", func(param interface{}) {\n            wg.Done() // \u6807\u8bb0\u56de\u8c03\u51fd\u6570\u6267\u884c\u5b8c\u6210\n            page.PageDisable(devToolsConn)\n        })\n    })\n    wg.Wait() // \u7b49\u5f85\u56de\u8c03\u51fd\u6570\u6267\u884c\u5b8c\u6210\n    //\u8fd4\u56de\u9875\u9762\u6e90\u4ee3\u7801\u3001json\u683c\u5f0f\n    fmt.Println(p1.GetHtml())\n    //\u5b9e\u9645\u4e0a\u6211\u4eec\u8fd9\u6837\u7528\u53ef\u80fd\u662f\u66f4\u52a0\u7b26\u5408\u6211\u4eec\u7684\u4e60\u60ef\u7684\u3001\u800c\u4e14\u4ed6\u5df2\u7ecf\u8d34\u5fc3\u7684\u5e2e\u4f60\u5904\u7406\u597d\u4e86\u7f16\u7801\u95ee\u9898\u3002\n    fmt.Println(page.DecodeHTMLString(p1.GetHtml().Get("result.outerHTML").String()))\n    \n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",null,"\u200b\tgjson.Result \u9875\u9762\u8fd4\u56de\u7684\u6e90\u4ee3\u7801\u3001\u5982\u679c\u4f60\u4e0d\u6e05\u695a\u8fd9\u4e2agjson\u5e94\u8be5\u5982\u4f55\u4f7f\u7528\u3001\u5efa\u8bae\u5148\u5173\u6ce8github.com/tidwall/gjson\u7b80\u5355\u770b\u4e00\u4e0b\u3002"),(0,o.kt)("p",null,"\u4ed6\u6bd4\u4f60\u60f3\u8c61\u7684\u8981\u7b80\u5355\u7684\u591a\u3002"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"RunJS  \u5728\u5f53\u524d\u9875\u9762\u8fd0\u884cjs"),(0,o.kt)("p",null,"\u200b\t\t\u6ce8\u610f\u8fd9\u662f\u5728\u4f60\u5bf9\u5e94\u7684\u9875\u9762\u8fd0\u884cjs\u3001\u5176\u4ed6\u9875\u9762\u4e92\u4e0d\u5f71\u54cd\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"\u200b\tjs \u3001string \u5c31\u662f\u4f60\u9700\u8981\u8fd0\u884c\u7684js "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//\u793a\u4f8b1\n//\u663e\u793a\u9f20\u6807\u79fb\u52a8\u8f68\u8ff9\n\np1.RunJS(script.ShowMousePosition())\n\n\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"RunJSSync \u5728\u5f53\u524d\u9875\u9762\u8fd0\u884cjs\uff0c\u548cRunJS\u552f\u4e00\u7684\u533a\u522b\u662f\uff0c\u4ed6\u4f1a\u7b49\u5f85\u5e76\u4e14\u8fd4\u56de\u7ed3\u679c\u3001\u5728\u4f60\u7ed9\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u5185\u3002\u8d85\u8fc7\u65f6\u95f4\u3001\u8fd4\u56de\u8d85\u65f6\u9519\u8bef\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"\u200b\t1\u3001js \u3001string \u5c31\u662f\u4f60\u9700\u8981\u8fd0\u884c\u7684js "),(0,o.kt)("p",null,"   2\u3001timeout time.Duration\u3001\u8d85\u65f6\u65f6\u95f4\u3001\u4e3e\u4f8btime.Minute\u3001time.Second*10 \u90fd\u53ef\u4ee5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \u5728\u5f53\u524d\u9875\u9762\u6267\u884cjs\u3001\u5e76\u4e14\u83b7\u53d6\u8fd4\u56de\u7ed3\u679c\uff0c\nerr,result:=p1.RunJSSync(script.ScreenInfo(),time.Second*10)\nfmt.Println(result)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",null,"\u200b\tgjson.Result  js\u6267\u884c\u7684\u7ed3\u679c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"SetViewportSize \u8bbe\u7f6e\u5f53\u524d\u9875\u9762\u7684\u89c6\u53e3\u5927\u5c0f\u3001\u5efa\u8bae\u4e0d\u8981\u8bbe\u7f6e\u3001\u4ed6\u4ec5\u5bf9\u5f53\u524d\u9875\u9762\u751f\u6548\u3001\u800c\u4e14\u53ea\u5f71\u54cd\u53ef\u89c6\u8303\u56f4\u3001 \u5e76\u4e0d\u5f71\u54cd\u7a97\u53e3\u8303\u56f4"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"\u200b\twidth, height int64 \u5206\u522b\u662f\u5bbd\u3001\u9ad8 , \u5355\u4f4d\u50cf\u7d20\u3002"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"WaitForMatchOnPageSync \u7b49\u5f85\u627e\u5230\u5339\u914d\u7684\u76ee\u6807\u56fe\u7247\u3001\u627e\u5230\u540e\u8fd4\u56detrue\u3001\u6216\u8005\u8d85\u65f6\u672a\u627e\u5230"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"smallImgPath string \u4f60\u9700\u8981\u5339\u914d\u7684\u76ee\u6807\u622a\u56fe\u8def\u5f84"),(0,o.kt)("p",null," matchScore float64 \u4f60\u8bbe\u7f6e\u7684\u5339\u914d\u9608\u503c0.0-1.0\u4e4b\u95f4\uff1b"),(0,o.kt)("p",null,"timeout time.Duration \u8d85\u65f6\u9608\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u793a\u4f8b:\nluna_utils.KillProcess()\n/********************************/\nchromiumPath := "/Users/xxxx/Documents/workspace/Chromium.app/Contents/MacOS/Chromium"\nbrowserObj := devtools.NewBrowser(chromiumPath, &devtools.BrowserOptions{\n   CachePath: luna_utils.CreateCacheDirInSubDir("/Users/xxxx/Documents/workspace/cache"),\n   ImgPath:   "/Users/xxxx/Documents/workspace/test_img/baidu_img",\n   Headless:  false,\n   ProxyStr:  "https://API1M5TV:9BFF49220D11@42.179.160.60:39349",\n   Fingerprint: []string{"fingerprint1", "fingerprint2"},\n   WindowSize: &devtools.WindowSize{\n      Width:  1496,\n      Height: 967,\n   },\n})\n//&{2 1496 967 1496 858}\nfmt.Println()\nbrowserObj.DevToolsConn.ShowLog(true)\n\nerr, itemPage := browserObj.OpenPageAndListen("https://www.baidu.com", func(devToolsConn *protocol.DevToolsConn) {\n   //\u7b2c\u4e00\u4e2a\u5904\u7406\n   devToolsConn.ShowLog(true)\n   page.PageEnable(devToolsConn)\n   devToolsConn.SubscribeOneTimeEvent("Page.loadEventFired", func(param interface{}) {\n      runtime.Evaluate(devToolsConn, script.ShowMousePosition())\n   })\n   devToolsConn.SubscribeOneTimeEvent("Page.windowOpen", func(param interface{}) {\n      runtime.Evaluate(devToolsConn, script.ShowMousePosition())\n   })\n})\nif err == nil {\n   //itemPage.SetViewportSize(1496, 967)\n   //fmt.Println(devtools.GetBrowserScreen(itemPage.DevToolsConn))\n   itemPage.RunJS(script.ShowMousePosition())\n   itemPage.DevToolsConn.ReduceSpeed(10)\n   //\u91cd\u70b9\u770b\u8fd9\u4e2a\u51fd\u6570\u3001\u8fd9\u4e2ahome.png \u7684\u5b9e\u9645\u8def\u5f84\u5e94\u8be5\u662f\u5728ImgPath\u8fd9\u4e2a\u5730\u65b9\u7684\u8bbe\u7f6e\n   //\u4e5f\u5c31\u662f/Users/xxxx/Documents/workspace/test_img/baidu_img/home.png\n   //\u5f53\u4ed6\u68c0\u6d4b\u5230\u6709\u8fd9\u4e2a\u76ee\u6807\u51fa\u73b0\u5e76\u4e14\u5339\u914d\u5230\u65f6\u5019\uff0c\u5c31\u4f1a\u8fd4\u56de\u3002\n   err, ok := itemPage.WaitForMatchOnPageSync("home.png", 0.5, time.Hour)\n   if err == nil && ok {\n      fmt.Println("\u8bf4\u660e\u3001\u9875\u9762\u5df2\u7ecf\u6210\u529f\u6253\u5f00")\n   }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Returns"))),(0,o.kt)("p",null,"error, \u8d85\u65f6\u9519\u8bef"),(0,o.kt)("p",null,"bool,true\u662f\u627e\u5230\u56fe\u7247\u3001false\u662f\u672a\u627e\u5230\u76ee\u6807\u56fe\u7247"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"SimulateMouseClickOnPage  \u6a21\u62df\u4eba\u7c7b\u70b9\u51fb\u3001\u5185\u7f6e\u4e86\u7b26\u5408\u4eba\u7c7b\u7684\u70b9\u51fb\u4e60\u60ef\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"\u200b\tx, y float64 \u5206\u522b\u4e3a\u76ee\u6807\u5750\u6807\u7684x\u5750\u6807\u3001y\u5750\u6807"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"SimulateMouseMoveOnPage \u6a21\u62df\u4eba\u7c7b\u9f20\u6807\u79fb\u52a8\u3001\u5185\u7f6e\u4e86\u7b26\u5408\u4eba\u7c7b\u9f20\u6807\u79fb\u52a8\u8f68\u8ff9\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"startX, startY, endX, endY float64 \u5206\u522b\u4e3a\uff1a\u8d77\u70b9\u5750\u6807\u3001\u91cd\u70b9\u5750\u6807\u3002"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"SimulateMouseScrollOnPage \u6a21\u62df\u9f20\u6807\u6eda\u8f6e\u3001\u5185\u7f6e\u7b26\u5408\u4eba\u7c7b\u7684\u6eda\u52a8\u7279\u70b9"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"x, y float64, \u542f\u59cb\u4f4d\u7f6e\u7684x\u3001y\u5750\u6807"),(0,o.kt)("p",null,"totalDistance int, \u9700\u8981\u79fb\u52a8\u7684\u603b\u8ddd\u79bb"),(0,o.kt)("p",null,"direction input.Direction \u6eda\u52a8\u65b9\u5411 \u3001input.DOWN\u3001input.UP\u3001input.LEFT\u3001input.RIGHT"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"ScrollToTargetImagePosition \u6a21\u62df\u9f20\u6807\u6eda\u8f6e\u3001\u5185\u7f6e\u7b26\u5408\u4eba\u7c7b\u6eda\u52a8\u7279\u70b9\uff0c\u4ed6\u548cSimulateMouseScrollOnPage\u7684\u533a\u522b\u662f"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u81ea\u5df1\u4f1a\u6839\u636e\u4f60\u7ed9\u5b9a\u7684\u6eda\u52a8\u65b9\u5411\u3001\u4e00\u76f4\u6eda\u52a8\u76f4\u5230\u8d85\u65f6\u3001\u6216\u8005\u627e\u5230\u76ee\u6807\u56fe\u7247\u4e3a\u6b62\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"x, y float64, \u542f\u59cb\u70b9\u5750\u6807"),(0,o.kt)("p",null," direction input.Direction,\u6eda\u52a8\u65b9\u5411input.DOWN\u3001input.UP\u3001input.LEFT\u3001input.RIGHT"),(0,o.kt)("p",null," smallImgPath string,  \u76ee\u6807\u5c0f\u56fe\u7684\u8def\u5f84"),(0,o.kt)("p",null,"matchScore float64, \u5339\u914d\u7684\u9608\u503c 0.0-1.0"),(0,o.kt)("p",null," timeout time.Duration \u8d85\u65f6\u9608\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u793a\u4f8b:\n//bottom.png \u8fd9\u4e2a\u7684\u5b9e\u9645\u8def\u5f84\u662f devtools.NewBrowser \u8bbe\u7f6e\u7684 ImgPath+bottom.png \u8def\u5f84\n\n//\u5982\uff1aImgPath:   "/Users/xxxx/Documents/workspace/baidu_img"\n\n//\u8fd9\u4e2a\u7684\u5b8c\u6574\u8def\u5f84\u662f/Users/xxxx/Documents/workspace/baidu_img/bottom.png\n\nerr, ok := itemPage.ScrollToTargetImagePosition(imageCoordinates.RandomX, imageCoordinates.RandomY, input.DOWN, "bottom.png", 0.5, time.Minute)\n\nfmt.Println(ok, err)\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Returns"))),(0,o.kt)("p",null,"error, \u8d85\u65f6\u9519\u8bef"),(0,o.kt)("p",null," bool\u3001true\u4e3a\u627e\u5230\u76ee\u6807\u5e76\u4e14\u505c\u6b62\u6eda\u52a8\u3001false\u662f\u505c\u6b62\u6eda\u52a8\u3001\u4f46\u662f\u672a\u627e\u5230\u76ee\u6807"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"SimulateKeyboardInputOnPage \u6a21\u62df\u4eba\u7c7b\u7684\u952e\u76d8\u8f93\u5165"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"text string \u8f93\u5165\u7684\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'itemPage.SimulateKeyboardInputOnPage("luna")\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"ImageSimilarity \u3001\u8ba1\u7b97\u56fe\u7247\u76f8\u4f3c\u5ea6\u3001\u4ed6\u4f1a\u5b9e\u65f6\u622a\u53d6\u4f60\u7684\u9875\u9762\u56fe\u7247\u3001\u5e76\u4e14\u6bd4\u5bf9\u4f60\u4f20\u5165\u7684\u5c0f\u56fe\u3001\u5728\u4f60\u8bbe\u7f6e\u7684\u8d85\u65f6\u9608\u503c\u5185\u3001\u627e\u5230\u6700\u4f73\u7b26\u5408"),(0,o.kt)("p",null,"\u7684\u5339\u914d\u7ed3\u679c\u8fd4\u56de\uff0c\u6216\u8005\u8d85\u65f6\u672a\u627e\u5230\u5339\u914d\u7ed3\u679c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"smallImgPath string \u5c0f\u56fe\u8def\u5f84"),(0,o.kt)("p",null," timeout time.Duration \u8d85\u65f6\u9608\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'//\u627e\u5230\u6309\u94ae\u7684\u4f4d\u7f6e\nerr, imageCoordinates := itemPage.ImageSimilarity("button_01.png", time.Minute)\nif err == nil && imageCoordinates.MatchScore > 0.5 {\n   //\u79fb\u52a8\u5230\u76ee\u6807\u70b9\n   itemPage.SimulateMouseMoveOnPage(targetX, targetY, imageCoordinates.RandomX, imageCoordinates.RandomY)\n  //\u70b9\u51fb\u6309\u94ae\n  itemPage.SimulateMouseClickOnPage(imageCoordinates.RandomX, imageCoordinates.RandomY)\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Returns"))),(0,o.kt)("p",null,"error, \u8d85\u65f6\u9519\u8bef"),(0,o.kt)("p",null,"*input.ImageCoordinates \u662f\u4e00\u4e2a\u7ed3\u6784\u4f53\u3001\u5177\u4f53\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type ImageCoordinates struct {\n   Err         error\n   RandomX     float64 //\u8fd9\u4e2a\u6307\u7684\u662f \u5728\u5927\u56fe\u4e2d\u627e\u5230\u7684\u5c0f\u56fe\u4f4d\u7f6e;\u4f46\u662f\u4ed6\u662f\u4e00\u4e2a\u77e9\u5f62,\u5982\u679c\u6211\u4eec\u70b9\u51fb\u7684\u65f6\u5019\u9700\u8981\u70b9\u51fb\u8fd9\u4e2a\u77e9\u5f62\u7684\u4efb\u610f\u70b9\uff1b\u6240\u4ee5\u8fd9\u4e2a\u662f\u5728\u8fd9\u4e2a\u77e9\u5f62\u5185\u968f\u673a\u4ea7\u751f\u7684\u6a2a\u5750\u6807\uff1b\n   RandomY     float64 //\u540c\u4e0a\uff0c\u53ea\u662f\u662f\u7eb5\u5750\u6807\n   ImageWidth  int64   //\u539f\u59cb\u56fe\u7247\u7684\u771f\u5b9e\u5bbd\u5ea6\n   ImageHeight int64   //\u539f\u59cb\u56fe\u7247\u771f\u5b9e\u9ad8\u5ea6\n   MatchScore  float64 //\u8fd4\u56de\u7684\u76f8\u4f3c\u5ea6,\u4e5f\u5c31\u662f\u4ed6\u627e\u5230\u7684\u5c0f\u56fe\u548c\u5927\u56fe\u4e4b\u95f4\u7684\u76f8\u4f3c\u5ea6\u662f\u591a\u5c11.\u4f60\u53ef\u4ee5\u6839\u636e\u8fd9\u4e2a\u503c\u6765\u8c03\u6574\u8f93\u5165\u53c2\u6570\u7684LunaThreshold\u503c;\n}\n")),(0,o.kt)("p",null,"\u603b\u7ed3\u3001\u4e00\u822c\u4f60\u53ea\u9700\u8981\u5224\u65ad\u662f\u5426err \u4e0d\u4e3anil \u5e76\u4e14 MatchScore \u5339\u914d\u9608\u503c\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\u3001\u7136\u540e\u7528\u4ed6\u7684\u5750\u6807\u8fdb\u884c \u9f20\u6807\u3001\u70b9\u51fb\u3001\u6eda\u52a8\u3001\u952e\u76d8 \u7b49\u540e\u7eed\u64cd\u4f5c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"SimilarityWithMargin \u8ba1\u7b97\u56fe\u7247\u76f8\u4f3c\u5ea6\u3001\u4ed6\u4f1a\u5b9e\u65f6\u622a\u53d6\u4f60\u7684\u9875\u9762\u56fe\u7247\u3001\u5e76\u4e14\u6bd4\u5bf9\u4f60\u4f20\u5165\u7684\u5c0f\u56fe\u3001\u5728\u4f60\u8bbe\u7f6e\u7684\u8d85\u65f6\u9608\u503c\u5185\u3001\u627e\u5230\u6700\u4f73\u7b26\u5408"),(0,o.kt)("p",null,"\u7684\u5339\u914d\u7ed3\u679c\u8fd4\u56de\uff0c\u6216\u8005\u8d85\u65f6\u672a\u627e\u5230\u5339\u914d\u7ed3\u679c\u3002\u548cImageSimilarity\u552f\u4e00\u533a\u522b\u662f\u591a\u4e864\u4e2a\u53c2\u6570,\u4e3b\u8981\u7528\u4e8e\u6bd4\u5982\u8f93\u5165\u6846\u7b49\uff0c\u56fe\u7247\u7279\u5f81\u4e0d\u660e\u663e\u7684\u573a\u666f\u3001\u4f5c\u7528\u5c31\u662f\u7f29\u5c0f\u4f60\u6700\u540e\u5339\u914d\u7684\u56fe\u7247\u77e9\u5f62\u7684\u8303\u56f4\uff0c\u4f7f\u5f97\u4ed6\u53ef\u4ee5\u51c6\u786e\u7684\u6846\u5b9a  \u8f93\u5165\u6846\u7684\u8303\u56f4\u3002"),(0,o.kt)("p",null,"\u8bf4\u4eba\u8bdd\u5c31\u662f\uff1a\u6587\u672c\u6846\u901a\u5e38\u6ca1\u4ec0\u4e48\u7279\u5f81\u3001\u56fe\u7247\u4e0d\u597d\u5339\u914d\u3001\u6240\u4ee5\u4f60\u9700\u8981\u622a\u56fe\u7a0d\u5fae\u8303\u56f4\u5927\u4e00\u70b9\u3001\u4f46\u662f\u622a\u56fe\u5927\u4e86\u540e\u53d1\u73b0\u8d85\u51fa\u4e86\u6587\u672c\u6846\u8303\u56f4"),(0,o.kt)("p",null,"\u6240\u4ee5\u8981\u7ed94\u4e2a\u8fb9\u8ddd\u7684\u8ddd\u79bb\uff0c\u8ba9\u4ed6\u627e\u5230\u5bf9\u5e94\u7684\u6587\u672c\u6846\u5230\u5e95\u5728\u54ea\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"smallImgPath string, \u5c0f\u56fe\u8def\u5f84"),(0,o.kt)("p",null," leftMargin, rightMargin, topMargin, bottomMargin float64,  \u8fb9\u8ddd \u5355\u4f4d\u50cf\u7d20"),(0,o.kt)("p",null,"timeout time.Duration \u8d85\u65f6\u9608\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'//\u793a\u4f8b:\n//"home.png" \u76ee\u6807\u5c0f\u56fe, 50, 200, 10, 10 4\u4e2a\u8fb9\u8ddd, time.Minute \u8d85\u65f6\u9608\u503c\n\nerr, imageCoordinates := itemPage.SimilarityWithMargin("home.png", 50, 200, 10, 10, time.Minute)\nif err == nil && imageCoordinates.MatchScore > 0.5 {\n   targetX, targetY := imageCoordinates.RandomX, imageCoordinates.RandomY\n   itemPage.SimulateMouseMoveOnPage(luna_utils.RandomInRange(-1, devtools.BrowserGlobal.ScreenAvailWidth), -1, targetX, targetY)\n   itemPage.SimulateMouseClickOnPage(targetX, targetY)\n   itemPage.SimulateKeyboardInputOnPage("\u968f\u4fbf")\n   }\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Returns"))),(0,o.kt)("p",null,"error, \u8d85\u65f6\u9519\u8bef"),(0,o.kt)("p",null,"*input.ImageCoordinates \u662f\u4e00\u4e2a\u7ed3\u6784\u4f53\u3001\u5177\u4f53\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type ImageCoordinates struct {\n   Err         error\n   RandomX     float64 //\u8fd9\u4e2a\u6307\u7684\u662f \u5728\u5927\u56fe\u4e2d\u627e\u5230\u7684\u5c0f\u56fe\u4f4d\u7f6e;\u4f46\u662f\u4ed6\u662f\u4e00\u4e2a\u77e9\u5f62,\u5982\u679c\u6211\u4eec\u70b9\u51fb\u7684\u65f6\u5019\u9700\u8981\u70b9\u51fb\u8fd9\u4e2a\u77e9\u5f62\u7684\u4efb\u610f\u70b9\uff1b\u6240\u4ee5\u8fd9\u4e2a\u662f\u5728\u8fd9\u4e2a\u77e9\u5f62\u5185\u968f\u673a\u4ea7\u751f\u7684\u6a2a\u5750\u6807\uff1b\n   RandomY     float64 //\u540c\u4e0a\uff0c\u53ea\u662f\u662f\u7eb5\u5750\u6807\n   ImageWidth  int64   //\u539f\u59cb\u56fe\u7247\u7684\u771f\u5b9e\u5bbd\u5ea6\n   ImageHeight int64   //\u539f\u59cb\u56fe\u7247\u771f\u5b9e\u9ad8\u5ea6\n   MatchScore  float64 //\u8fd4\u56de\u7684\u76f8\u4f3c\u5ea6,\u4e5f\u5c31\u662f\u4ed6\u627e\u5230\u7684\u5c0f\u56fe\u548c\u5927\u56fe\u4e4b\u95f4\u7684\u76f8\u4f3c\u5ea6\u662f\u591a\u5c11.\u4f60\u53ef\u4ee5\u6839\u636e\u8fd9\u4e2a\u503c\u6765\u8c03\u6574\u8f93\u5165\u53c2\u6570\u7684LunaThreshold\u503c;\n}\n")),(0,o.kt)("p",null,"\u603b\u7ed3\u3001\u4e00\u822c\u4f60\u53ea\u9700\u8981\u5224\u65ad\u662f\u5426err \u4e0d\u4e3anil \u5e76\u4e14 MatchScore \u5339\u914d\u9608\u503c\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\u3001\u7136\u540e\u7528\u4ed6\u7684\u5750\u6807\u8fdb\u884c \u9f20\u6807\u3001\u70b9\u51fb\u3001\u6eda\u52a8\u3001\u952e\u76d8 \u7b49\u540e\u7eed\u64cd\u4f5c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"GetElementPositionByXpathOnPage   \u83b7\u53d6xpath\u9009\u62e9\u5668\u7684\u5143\u7d20\u4f4d\u7f6e\u4fe1\u606f\u3001"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"selector string \u3001\u8fd9\u4e2a\u5176\u5b9e\u5c31\u662f\u4f60\u5728\u9875\u9762\u4efb\u610f\u5143\u7d20\u3001\u9f20\u6807\u53f3\u952e\u3001\u590d\u5236\u4ed6\u7684\u5b8c\u6574xpath\u8def\u5f84\u3001\u6216xpath\u8def\u5f84\uff0c\u5c31\u53ef\u4ee5\u627e\u5230\u5bf9\u5e94\u7684xpath"),(0,o.kt)("p",null,"\u5143\u7d20\u4e86"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'//\u793a\u4f8b\n\nerr, x, y := p1.GetElementPositionByXpathOnPage(`//*[@id="hotsearch-content-wrapper"]/li[1]/a/span[2]`)\np1.SimulateMouseClickOnPage(x, y)\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Returns"))),(0,o.kt)("p",null,"err error, \u627e\u4e0d\u5230\u76ee\u6807\u5143\u7d20"),(0,o.kt)("p",null," randomX, randomY float64 \u627e\u5230\u76ee\u6807\u5143\u7d20\u7684\u77e9\u5f62\u5185\u3001\u4efb\u610f\u70b9\u7684x\u3001y\u5750\u6807\u3001\u4ee5\u4fbf\u4e8e\u4f60\u540e\u7eed\u7684\u70b9\u51fb\u3001\u6216\u8005\u9f20\u6807\u79fb\u52a8\u64cd\u4f5c"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"GetElementPositionByCssOnPage \u83b7\u53d6css\u9009\u62e9\u5668\u7684\u5143\u7d20\u4f4d\u7f6e\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nerr, x, y := p1.GetElementPositionByCssOnPage(`#browser-new-page`)\np1.SimulateMouseClickOnPage(x, y)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Arguments"))),(0,o.kt)("p",null,"selector string \u3001\u8fd9\u4e2a\u5176\u5b9e\u5c31\u662f\u4f60\u5728\u9875\u9762\u4efb\u610f\u5143\u7d20\u3001\u9f20\u6807\u53f3\u952e\u3001\u590d\u5236\u4ed6\u7684selector\uff0c\u5c31\u53ef\u4ee5\u627e\u5230\u5bf9\u5e94\u7684xpath"),(0,o.kt)("p",null,"\u5143\u7d20\u4e86"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Returns"))),(0,o.kt)("p",null,"err error, \u627e\u4e0d\u5230\u76ee\u6807\u5143\u7d20"),(0,o.kt)("p",null," randomX, randomY float64 \u627e\u5230\u76ee\u6807\u5143\u7d20\u7684\u77e9\u5f62\u5185\u3001\u4efb\u610f\u70b9\u7684x\u3001y\u5750\u6807\u3001\u4ee5\u4fbf\u4e8e\u4f60\u540e\u7eed\u7684\u70b9\u51fb\u3001\u6216\u8005\u9f20\u6807\u79fb\u52a8\u64cd\u4f5c"),(0,o.kt)("hr",null))}g.isMDXComponent=!0}}]);