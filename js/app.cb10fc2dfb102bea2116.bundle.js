(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const i=a(89),{lightningChart:n,AxisTickStrategies:s,UIElementBuilders:o,UIOrigins:d,ImageFill:r,emptyLine:l,ImageFitMode:m,emptyFill:c,Themes:h}=i,g=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:h[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle(""),p=g.getDefaultAxisY().setTitle("Atmospheric Carbon Dioxide (ppm)"),y=g.addAxisY({opposite:!0}).setTitle("Temperature Anomaly Index (°C)").setTickStrategy(s.Numeric,(e=>e.setMinorTickStyle((e=>e.setGridStrokeStyle(l))).setMajorTickStyle((e=>e.setGridStrokeStyle(l))))),u=g.getDefaultAxisX().setTickStrategy(s.DateTime);fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0026/anomaly-data.json").then((e=>e.json())).then((e=>{const{temperature:t,co2:a}=e,i=(g.addLineSeries({yAxis:p}).setName("Atmospheric Carbon Dioxide (ppm)").add(a.map(((e,t)=>({y:e,x:new Date(1880+t,0,1,0,0,0,0).getTime()})))),g.addLineSeries({yAxis:y,automaticColorIndex:2}).setName("Temperature Anomaly Index (°C)").add(t.map(((e,t)=>({y:e,x:new Date(1880+t,0,1,0,0,0,0).getTime()})))),g.addLegendBox(void 0,{x:u,y:p}).add(g).setOrigin(d.LeftTop).setMargin(4)),n=()=>i.setPosition({x:u.getInterval().start,y:p.getInterval().end});n(),u.onIntervalChange(n),p.onIntervalChange(n);const s=document.createElement("video");s.crossOrigin="",s.autoplay=!0,s.muted=!0,s.loop=!0,s.src=new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0026/thundercloud.webm",s.load(),s.addEventListener("loadeddata",(e=>{s.play();const t=[{x:new Date(1962,0,1).getTime(),y:.15},{x:new Date(1999,0,1).getTime(),y:.7}],a=s.videoWidth,i={x:100,y:s.videoHeight/a*100};t.forEach((e=>{g.addUIElement(o.TextBox,{x:u,y}).setPosition(e).setOrigin(d.CenterBottom).setTextFillStyle(c).setPadding({left:i.x,top:i.y}).setBackground((e=>e.setStrokeStyle(l).setFillStyle(new r({source:s,fitMode:m.Fit}))))}))}))}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);