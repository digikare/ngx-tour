(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{aiOZ:function(t,e,n){"use strict";n.d(e,"b",function(){return S}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return h}),n.d(e,"a",function(){return c});var r=n("ZYCi"),i=n("K9Ia"),s=n("p0ib"),o=n("67Y/"),u=n("VnD/"),p=n("P6uZ"),h=function(){var t={OFF:0,ON:1,PAUSED:2};return t[t.OFF]="OFF",t[t.ON]="ON",t[t.PAUSED]="PAUSED",t}(),a=function(){function t(t){this.router=t,this.stepShow$=new i.a,this.stepHide$=new i.a,this.initialize$=new i.a,this.start$=new i.a,this.end$=new i.a,this.pause$=new i.a,this.resume$=new i.a,this.anchorRegister$=new i.a,this.anchorUnregister$=new i.a,this.events$=Object(s.a)(this.stepShow$.pipe(Object(o.a)(function(t){return{name:"stepShow",value:t}})),this.stepHide$.pipe(Object(o.a)(function(t){return{name:"stepHide",value:t}})),this.initialize$.pipe(Object(o.a)(function(t){return{name:"initialize",value:t}})),this.start$.pipe(Object(o.a)(function(t){return{name:"start",value:t}})),this.end$.pipe(Object(o.a)(function(t){return{name:"end",value:t}})),this.pause$.pipe(Object(o.a)(function(t){return{name:"pause",value:t}})),this.resume$.pipe(Object(o.a)(function(t){return{name:"resume",value:t}})),this.anchorRegister$.pipe(Object(o.a)(function(t){return{name:"anchorRegister",value:t}})),this.anchorUnregister$.pipe(Object(o.a)(function(t){return{name:"anchorUnregister",value:t}}))),this.steps=[],this.anchors={},this.status=h.OFF,this.isHotKeysEnabled=!0}return t.prototype.initialize=function(t,e){t&&t.length>0&&(this.status=h.OFF,this.steps=t.map(function(t){return Object.assign({},e,t)}),this.initialize$.next(this.steps))},t.prototype.disableHotkeys=function(){this.isHotKeysEnabled=!1},t.prototype.enableHotkeys=function(){this.isHotKeysEnabled=!0},t.prototype.start=function(){this.startAt(0)},t.prototype.startAt=function(t){var e=this;this.status=h.ON,this.goToStep(this.loadStep(t)),this.start$.next(),this.router.events.pipe(Object(u.a)(function(t){return t instanceof r.d}),Object(p.a)()).subscribe(function(){e.currentStep&&e.currentStep.hasOwnProperty("route")&&e.hideStep(e.currentStep)})},t.prototype.end=function(){this.status=h.OFF,this.hideStep(this.currentStep),this.currentStep=void 0,this.end$.next()},t.prototype.pause=function(){this.status=h.PAUSED,this.hideStep(this.currentStep),this.pause$.next()},t.prototype.resume=function(){this.status=h.ON,this.showStep(this.currentStep),this.resume$.next()},t.prototype.toggle=function(t){t?this.currentStep?this.pause():this.resume():this.currentStep?this.end():this.start()},t.prototype.next=function(){this.hasNext(this.currentStep)&&this.goToStep(this.loadStep(this.currentStep.nextStep||this.steps.indexOf(this.currentStep)+1))},t.prototype.hasNext=function(t){return t?void 0!==t.nextStep||this.steps.indexOf(t)<this.steps.length-1:(console.warn("Can't get next step. No currentStep."),!1)},t.prototype.prev=function(){this.hasPrev(this.currentStep)&&this.goToStep(this.loadStep(this.currentStep.prevStep||this.steps.indexOf(this.currentStep)-1))},t.prototype.hasPrev=function(t){return t?void 0!==t.prevStep||this.steps.indexOf(t)>0:(console.warn("Can't get previous step. No currentStep."),!1)},t.prototype.goto=function(t){this.goToStep(this.loadStep(t))},t.prototype.register=function(t,e){if(this.anchors[t])throw new Error("anchorId "+t+" already registered!");this.anchors[t]=e,this.anchorRegister$.next(t)},t.prototype.unregister=function(t){delete this.anchors[t],this.anchorUnregister$.next(t)},t.prototype.getStatus=function(){return this.status},t.prototype.isHotkeysEnabled=function(){return this.isHotKeysEnabled},t.prototype.goToStep=function(t){var e=this;if(!t)return console.warn("Can't go to non-existent step"),void this.end();var n=new Promise(function(t){return t(!0)});void 0!==t.route&&"string"==typeof t.route?n=this.router.navigateByUrl(t.route):t.route&&Array.isArray(t.route)&&(n=this.router.navigate(t.route)),n.then(function(n){!1!==n&&setTimeout(function(){return e.setCurrentStep(t)})})},t.prototype.loadStep=function(t){return"number"==typeof t?this.steps[t]:this.steps.find(function(e){return e.stepId===t})},t.prototype.setCurrentStep=function(t){var e=this;this.currentStep&&this.hideStep(this.currentStep),this.currentStep=t,this.showStep(this.currentStep),this.router.events.pipe(Object(u.a)(function(t){return t instanceof r.d}),Object(p.a)()).subscribe(function(t){e.currentStep&&e.currentStep.hasOwnProperty("route")&&e.hideStep(e.currentStep)})},t.prototype.showStep=function(t){var e=this.anchors[t&&t.anchorId];if(!e)return console.warn("Can't attach to unregistered anchor with id "+t.anchorId),void this.end();e.showTourStep(t),this.stepShow$.next(t)},t.prototype.hideStep=function(t){var e=this.anchors[t&&t.anchorId];e&&(e.hideTourStep(),this.stepHide$.next(t))},t}(),c=function(){function t(t){this.tourService=t}return t.prototype.onEscapeKey=function(){this.tourService.getStatus()===h.ON&&this.tourService.isHotkeysEnabled()&&this.tourService.end()},t.prototype.onArrowRightKey=function(){this.tourService.getStatus()===h.ON&&this.tourService.hasNext(this.tourService.currentStep)&&this.tourService.isHotkeysEnabled()&&this.tourService.next()},t.prototype.onArrowLeftKey=function(){this.tourService.getStatus()===h.ON&&this.tourService.hasPrev(this.tourService.currentStep)&&this.tourService.isHotkeysEnabled()&&this.tourService.prev()},t}(),S=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[a]}},t}()}}]);