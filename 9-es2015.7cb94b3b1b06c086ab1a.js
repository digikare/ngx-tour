(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{lBDK:function(t,c,e){"use strict";e.r(c);var o=e("ofXK"),n=e("fXoL"),d=e("tyNb"),r=e("CCc+");const i=["tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],a=["href","http://material.angular.io"],s=["tourAnchor","installation"],u=["href","https://material.angular.io/guide/getting-started"],b=["tourAnchor","usage"],l=["tourAnchor","tourService.start"],h=["href","https://github.com/isaacplmann/ngx-tour/tree/master/src/app/md-menu"],p=["href","https://github.com/isaacplmann/ngx-tour/tree/master/src/app/md-menu/mat-lazy-menu"],U=[1,"table"],m=["tourAnchor","config.anchorId"],g=["tourAnchor","config.enableBackdrop"],f=["tourAnchor","config.route"],v=["tourAnchor","config.nextStep"],y=["tourAnchor","config.buttons.custom"],S=["tourAnchor","hotkeys"],T=["tourAnchor","events"],I=["tourAnchor","template"];let A=(()=>{class t{}return t.ngComponentDef=n.Qb({type:t,selectors:[["docs"]],factory:function(c){return new(c||t)},consts:436,vars:7,template:function(t,c){1&t&&(n.dc(0,"h2"),n.Uc(1,"About"),n.bc(),n.dc(2,"p"),n.Uc(3,"This is a product tour library built with Angular (2+). It's inspired by "),n.dc(4,"a",i),n.Uc(5,"angular-ui-tour"),n.bc(),n.Uc(6,"."),n.bc(),n.dc(7,"p"),n.dc(8,"code"),n.Uc(9,"TourMatMenuModule"),n.bc(),n.Uc(10," is an implementation of the tour ui that uses "),n.dc(11,"a",a),n.Uc(12,"Angular Material"),n.bc(),n.Uc(13," MatMenu to display tour steps."),n.bc(),n.dc(14,"h2",s),n.Uc(15,"Installation"),n.bc(),n.dc(16,"ol"),n.dc(17,"li"),n.dc(18,"code"),n.Uc(19,"npm install ngx-tour-core ngx-tour-md-menu @angular/animations @angular/cdk @angular/http @angular/material"),n.bc(),n.bc(),n.dc(20,"li"),n.Uc(21,"Import "),n.dc(22,"code"),n.Uc(23,"TourMatMenuModule.forRoot()"),n.bc(),n.Uc(24," into your app module"),n.bc(),n.dc(25,"li"),n.Uc(26,"Make sure "),n.dc(27,"code"),n.Uc(28,"RouterModule"),n.bc(),n.Uc(29," is imported in your app module"),n.bc(),n.dc(30,"li"),n.Uc(31,"Make sure Angular Material is "),n.dc(32,"a",u),n.Uc(33,"installed correctly"),n.bc(),n.bc(),n.bc(),n.dc(34,"h2",b),n.Uc(35,"Usage"),n.bc(),n.dc(36,"h4"),n.Uc(37,"Simple project"),n.bc(),n.dc(38,"ol"),n.dc(39,"li"),n.Uc(40,"Add "),n.dc(41,"code"),n.Uc(42,"<tour-step-template></tour-step-template>"),n.bc(),n.Uc(43," to your root app component"),n.bc(),n.dc(44,"li"),n.Uc(45," Define anchor points for the tour steps by adding the "),n.dc(46,"code"),n.Uc(47,"tourAnchor"),n.bc(),n.Uc(48," directive throughout your app. "),n.dc(49,"pre"),n.dc(50,"code"),n.Uc(51,'<div tourAnchor="some.anchor.id">...</div>'),n.bc(),n.bc(),n.bc(),n.dc(52,"li"),n.Uc(53," Define your tour steps using "),n.dc(54,"code"),n.Uc(55,"tourService.initialize(steps)"),n.bc(),n.dc(56,"pre"),n.Uc(57),n.bc(),n.bc(),n.dc(58,"li"),n.Uc(59,"Start the tour with "),n.dc(60,"code",l),n.Uc(61,"tourService.start()"),n.bc(),n.bc(),n.dc(62,"li"),n.Uc(63,"Check out the "),n.dc(64,"a",h),n.Uc(65,"demo source code"),n.bc(),n.Uc(66," for an example."),n.bc(),n.bc(),n.dc(67,"h4"),n.Uc(68,"Lazy loaded modules"),n.bc(),n.dc(69,"ol"),n.dc(70,"li"),n.Uc(71," Add "),n.dc(72,"pre"),n.dc(73,"code"),n.Uc(74,"<tour-step-template></tour-step-template>"),n.bc(),n.bc(),n.Uc(75," to your root app component. "),n.bc(),n.dc(76,"li"),n.Uc(77," Import "),n.dc(78,"pre"),n.dc(79,"code"),n.Uc(80,"TourMatMenuModule.forRoot()"),n.bc(),n.bc(),n.Uc(81," into your app module. "),n.bc(),n.dc(82,"li"),n.Uc(83," Import "),n.dc(84,"pre"),n.dc(85,"code"),n.Uc(86,"TourMatMenuModule"),n.bc(),n.bc(),n.Uc(87," into all lazy loaded modules needing the tour. "),n.bc(),n.dc(88,"li"),n.Uc(89," Import the "),n.dc(90,"pre"),n.dc(91,"code"),n.Uc(92,"TourService"),n.bc(),n.bc(),n.Uc(93," in your highest level eagerly loaded component and initialize all your steps there (even the ones in the lazy loaded modules). "),n.dc(94,"strong"),n.Uc(95,"Note:"),n.bc(),n.Uc(96," Make sure every step object contains its route. For example, if the route to a step is '/home' then your step object should have "),n.dc(97,"code"),n.Uc(98,"route: '/home'"),n.bc(),n.Uc(99," as a member. "),n.bc(),n.dc(100,"li"),n.Uc(101," Define anchor points for your steps by adding the "),n.dc(102,"pre"),n.dc(103,"code"),n.Uc(104,"tourAnchor"),n.bc(),n.bc(),n.Uc(105," directive throughout your modules (any component that requires it at any level). "),n.dc(106,"pre"),n.dc(107,"code"),n.Uc(108,'<div tourAnchor="some.anchor.id">...</div>'),n.bc(),n.bc(),n.bc(),n.dc(109,"li"),n.Uc(110," Start the tour with "),n.dc(111,"pre"),n.dc(112,"code"),n.Uc(113,"tourService.start()"),n.bc(),n.bc(),n.Uc(114," in the same component you initialized your steps. Call this right after the initialization. "),n.bc(),n.dc(115,"li"),n.Uc(116,"Check out the "),n.dc(117,"a",p),n.Uc(118,"demo source code"),n.bc(),n.Uc(119," for an example. "),n.bc(),n.bc(),n.dc(120,"h2"),n.Uc(121,"TourService"),n.bc(),n.dc(122,"p"),n.Uc(123,"The "),n.dc(124,"code"),n.Uc(125,"TourService"),n.bc(),n.Uc(126," controls the tour. Some key functions include:"),n.bc(),n.dc(127,"dl"),n.dc(128,"dt"),n.Uc(129,"start()"),n.bc(),n.dc(130,"dd"),n.Uc(131,"Starts the tour"),n.bc(),n.dc(132,"dt"),n.Uc(133,"startAt(stepId: number | string)"),n.bc(),n.dc(134,"dd"),n.Uc(135,"Start the tour at the step with stepId or at the specified index"),n.bc(),n.dc(136,"dt"),n.Uc(137,"end()"),n.bc(),n.dc(138,"dd"),n.Uc(139,"Ends the tour"),n.bc(),n.dc(140,"dt"),n.Uc(141,"pause()"),n.bc(),n.dc(142,"dd"),n.Uc(143,"Pauses the tour"),n.bc(),n.dc(144,"dt"),n.Uc(145,"resume()"),n.bc(),n.dc(146,"dd"),n.Uc(147,"Resumes the tour"),n.bc(),n.dc(148,"dt"),n.Uc(149,"next()"),n.bc(),n.dc(150,"dd"),n.Uc(151,"Goes to the next step"),n.bc(),n.dc(152,"dt"),n.Uc(153,"prev()"),n.bc(),n.dc(154,"dd"),n.Uc(155,"Goes to the previous step"),n.bc(),n.bc(),n.dc(156,"h2"),n.Uc(157,"Step Configuration"),n.bc(),n.dc(158,"p"),n.Uc(159,"Each step can have the following properties."),n.bc(),n.dc(160,"table",U),n.dc(161,"thead"),n.dc(162,"tr"),n.dc(163,"th"),n.Uc(164,"Name"),n.bc(),n.dc(165,"th"),n.Uc(166,"Type"),n.bc(),n.dc(167,"th"),n.Uc(168,"Default"),n.bc(),n.dc(169,"th"),n.Uc(170,"Description"),n.bc(),n.bc(),n.bc(),n.dc(171,"tbody"),n.dc(172,"tr"),n.dc(173,"td"),n.Uc(174,"stepId"),n.bc(),n.dc(175,"td"),n.Uc(176,"string"),n.bc(),n.dc(177,"td"),n.Uc(178,'""'),n.bc(),n.dc(179,"td"),n.Uc(180,"A unique identifier for the step"),n.bc(),n.bc(),n.dc(181,"tr",m),n.dc(182,"td"),n.Uc(183,"anchorId"),n.bc(),n.dc(184,"td"),n.Uc(185,"string"),n.bc(),n.dc(186,"td"),n.Uc(187,"required"),n.bc(),n.dc(188,"td"),n.Uc(189,"The anchor to which the step will be attached"),n.bc(),n.bc(),n.dc(190,"tr"),n.dc(191,"td"),n.Uc(192,"title"),n.bc(),n.dc(193,"td"),n.Uc(194,"string"),n.bc(),n.dc(195,"td"),n.Uc(196,'""'),n.bc(),n.dc(197,"td"),n.Uc(198,"The title of the tour step"),n.bc(),n.bc(),n.dc(199,"tr"),n.dc(200,"td"),n.Uc(201,"content"),n.bc(),n.dc(202,"td"),n.Uc(203,"string"),n.bc(),n.dc(204,"td"),n.Uc(205,'""'),n.bc(),n.dc(206,"td"),n.Uc(207,"The content text of the tour step"),n.bc(),n.bc(),n.dc(208,"tr",g),n.dc(209,"td"),n.Uc(210,"enableBackdrop"),n.bc(),n.dc(211,"td"),n.Uc(212,"boolean"),n.bc(),n.dc(213,"td"),n.Uc(214,"false"),n.bc(),n.dc(215,"td"),n.Uc(216,"Controls whether to enable active element highlighting"),n.bc(),n.bc(),n.dc(217,"tr",f),n.dc(218,"td"),n.Uc(219,"route"),n.bc(),n.dc(220,"td"),n.Uc(221,"string | UrlSegment[]"),n.bc(),n.dc(222,"td"),n.Uc(223,"undefined"),n.bc(),n.dc(224,"td"),n.Uc(225," The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. "),n.bc(),n.bc(),n.dc(226,"tr",v),n.dc(227,"td"),n.Uc(228,"nextStep"),n.bc(),n.dc(229,"td"),n.Uc(230,"number | string"),n.bc(),n.dc(231,"td"),n.Uc(232,"undefined"),n.bc(),n.dc(233,"td"),n.Uc(234,"The step index or stepId of the next step. If undefined, the next step in the steps array is used."),n.bc(),n.bc(),n.dc(235,"tr"),n.dc(236,"td"),n.Uc(237,"prevStep"),n.bc(),n.dc(238,"td"),n.Uc(239,"number | string"),n.bc(),n.dc(240,"td"),n.Uc(241,"undefined"),n.bc(),n.dc(242,"td"),n.Uc(243,"The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."),n.bc(),n.bc(),n.dc(244,"tr"),n.dc(245,"td"),n.dc(246,"del"),n.Uc(247,"placement"),n.bc(),n.bc(),n.dc(248,"td"),n.Uc(249,"N/A"),n.bc(),n.dc(250,"td"),n.Uc(251,"N/A"),n.bc(),n.dc(252,"td"),n.Uc(253," Ignored by "),n.dc(254,"code"),n.Uc(255,"TourMatMenuModule"),n.bc(),n.bc(),n.bc(),n.dc(256,"tr"),n.dc(257,"td"),n.Uc(258,"preventScrolling"),n.bc(),n.dc(259,"td"),n.Uc(260,"boolean"),n.bc(),n.dc(261,"td"),n.Uc(262,"false"),n.bc(),n.dc(263,"td"),n.Uc(264," Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. "),n.bc(),n.bc(),n.dc(265,"tr",y),n.dc(266,"td"),n.Uc(267,"prevBtnTitle"),n.bc(),n.dc(268,"td"),n.Uc(269,"string"),n.bc(),n.dc(270,"td"),n.Uc(271,"false"),n.bc(),n.dc(272,"td"),n.Uc(273,' Sets a custom prev button title for a given step. Default is "Prev" '),n.bc(),n.bc(),n.dc(274,"tr"),n.dc(275,"td"),n.Uc(276,"nextBtnTitle"),n.bc(),n.dc(277,"td"),n.Uc(278,"string"),n.bc(),n.dc(279,"td"),n.Uc(280,"false"),n.bc(),n.dc(281,"td"),n.Uc(282,' Sets a custom next button title for a given step. Default is "Next" '),n.bc(),n.bc(),n.dc(283,"tr"),n.dc(284,"td"),n.Uc(285,"endBtnTitle"),n.bc(),n.dc(286,"td"),n.Uc(287,"string"),n.bc(),n.dc(288,"td"),n.Uc(289,"false"),n.bc(),n.dc(290,"td"),n.Uc(291,' Sets a custom end button title for a given step. Default is "End" '),n.bc(),n.bc(),n.bc(),n.bc(),n.dc(292,"h2"),n.Uc(293,"Defaults"),n.bc(),n.dc(294,"p"),n.Uc(295,"You can set default values in the "),n.dc(296,"code"),n.Uc(297,"TourService.initialize"),n.bc(),n.Uc(298," function."),n.bc(),n.dc(299,"pre"),n.Uc(300),n.bc(),n.dc(301,"p"),n.Uc(302,"Any value explicitly defined in a step will override the default value."),n.bc(),n.dc(303,"h2",S),n.Uc(304,"Hotkeys"),n.bc(),n.dc(305,"p"),n.Uc(306," Hotkeys are provided using Angular's "),n.dc(307,"code"),n.Uc(308,"@HostListener"),n.bc(),n.Uc(309," decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n"),n.bc(),n.dc(310,"ul"),n.dc(311,"li"),n.dc(312,"strong"),n.Uc(313,"left arrow"),n.bc(),n.dc(314,"span"),n.Uc(315," - previous step"),n.bc(),n.bc(),n.dc(316,"li"),n.dc(317,"strong"),n.Uc(318,"right arrow"),n.bc(),n.dc(319,"span"),n.Uc(320," - next step"),n.bc(),n.bc(),n.dc(321,"li"),n.dc(322,"strong"),n.Uc(323,"esc"),n.bc(),n.dc(324,"span"),n.Uc(325," - end tour"),n.bc(),n.bc(),n.bc(),n.dc(326,"p"),n.Uc(327," You can disable hotkeys by calling "),n.dc(328,"code"),n.Uc(329,"tourService.disableHotkeys()"),n.bc(),n.Uc(330," or re-enable with "),n.dc(331,"code"),n.Uc(332,"tourService.enableHotkeys()"),n.bc(),n.bc(),n.dc(333,"h2",T),n.Uc(334,"Event Observables"),n.bc(),n.dc(335,"p"),n.Uc(336,"The "),n.dc(337,"code"),n.Uc(338,"TourService"),n.bc(),n.Uc(339," emits events that can be subscribed to like this:"),n.bc(),n.dc(340,"pre"),n.Uc(341),n.bc(),n.dc(342,"table",U),n.dc(343,"thead"),n.dc(344,"tr"),n.dc(345,"th"),n.Uc(346,"Name"),n.bc(),n.dc(347,"th"),n.Uc(348,"Payload"),n.bc(),n.dc(349,"th"),n.Uc(350,"Emitted When"),n.bc(),n.bc(),n.bc(),n.dc(351,"tbody"),n.dc(352,"tr"),n.dc(353,"td"),n.Uc(354,"stepShow$"),n.bc(),n.dc(355,"td"),n.Uc(356,"IStepOption"),n.bc(),n.dc(357,"td"),n.Uc(358,"A step is shown"),n.bc(),n.bc(),n.dc(359,"tr"),n.dc(360,"td"),n.Uc(361,"stepHide$"),n.bc(),n.dc(362,"td"),n.Uc(363,"IStepOption"),n.bc(),n.dc(364,"td"),n.Uc(365,"A step is hidden"),n.bc(),n.bc(),n.dc(366,"tr"),n.dc(367,"td"),n.Uc(368,"initialize$"),n.bc(),n.dc(369,"td"),n.Uc(370,"IStepOption[]"),n.bc(),n.dc(371,"td"),n.Uc(372,"The tour is configured with a set of steps"),n.bc(),n.bc(),n.dc(373,"tr"),n.dc(374,"td"),n.Uc(375,"start$"),n.bc(),n.dc(376,"td"),n.Uc(377,"IStepOption"),n.bc(),n.dc(378,"td"),n.Uc(379,"The tour begins"),n.bc(),n.bc(),n.dc(380,"tr"),n.dc(381,"td"),n.Uc(382,"end$"),n.bc(),n.dc(383,"td"),n.Uc(384,"any"),n.bc(),n.dc(385,"td"),n.Uc(386,"The tour ends"),n.bc(),n.bc(),n.dc(387,"tr"),n.dc(388,"td"),n.Uc(389,"pause$"),n.bc(),n.dc(390,"td"),n.Uc(391,"IStepOption"),n.bc(),n.dc(392,"td"),n.Uc(393,"The tour is paused"),n.bc(),n.bc(),n.dc(394,"tr"),n.dc(395,"td"),n.Uc(396,"resume$"),n.bc(),n.dc(397,"td"),n.Uc(398,"IStepOption"),n.bc(),n.dc(399,"td"),n.Uc(400,"The tour resumes"),n.bc(),n.bc(),n.dc(401,"tr"),n.dc(402,"td"),n.Uc(403,"anchorRegister$"),n.bc(),n.dc(404,"td"),n.Uc(405,"string"),n.bc(),n.dc(406,"td"),n.Uc(407,"An anchor is registered with the tour"),n.bc(),n.bc(),n.dc(408,"tr"),n.dc(409,"td"),n.Uc(410,"anchorUnregister$"),n.bc(),n.dc(411,"td"),n.Uc(412,"string"),n.bc(),n.dc(413,"td"),n.Uc(414,"An anchor is unregistered from the tour"),n.bc(),n.bc(),n.bc(),n.bc(),n.dc(415,"h2",I),n.Uc(416,"Custom template"),n.bc(),n.dc(417,"p"),n.Uc(418," You can also customize the tour step template by providing an "),n.dc(419,"code"),n.Uc(420,'<ng-template let-step="step" >'),n.bc(),n.Uc(421," inside the "),n.dc(422,"code"),n.Uc(423,"<tour-step-template>"),n.bc(),n.bc(),n.dc(424,"p"),n.Uc(425," The default template is equivalent to this:\n"),n.bc(),n.dc(426,"pre"),n.dc(427,"code"),n.Uc(428),n.bc(),n.bc(),n.dc(429,"h2"),n.Uc(430,"Styling Active Tour Anchor"),n.bc(),n.dc(431,"p"),n.Uc(432," The currently active tour anchor element has a "),n.dc(433,"code"),n.Uc(434,"touranchor--is-active"),n.bc(),n.Uc(435," class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n"),n.bc()),2&t&&(n.Kc(57),n.Xc("this.tourService.initialize([","{","\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, ","{","\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);"),n.Kc(300),n.Wc("this.tourService.initialize(steps, ","{","\n  route: '',\n  preventScrolling: true,\n});\n"),n.Kc(341),n.Wc("this.tourService.initialize$.subscribe((steps: IStepOption[]) => ","{","\n  console.log('tour configured with these steps:', steps);\n});\n"),n.Kc(428),n.Yc('<tour-step-template>\n  <ng-template let-step="step">\n    <mat-card (click)="$event.stopPropagation()">\n      <mat-card-title>\n        ',"{{","step?.title}}\n      </mat-card-title>\n      <mat-card-content>\n        ","{{",'step?.content}}\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-icon-button [disabled]="!tourService.hasPrev(step)" (click)="tourService.prev()">\n          <mat-icon>chevron_left</mat-icon>\n        </button>\n        <button mat-icon-button [disabled]="!tourService.hasNext(step)" (click)="tourService.next()">\n          <mat-icon>chevron_right</mat-icon>\n        </button>\n        <button mat-button (click)="tourService.end()">',"{{","step?.endBtnTitle}}</button>\n      </mat-card-actions>\n    </mat-card>\n  </ng-template>\n</tour-step-template>\n"))},directives:[r.a],encapsulation:2}),t})();const w=["href","https://github.com/isaacplmann/ng2-tour",1,"btn","btn-default"],k=["tourAnchor","start.tour",1,"btn","btn-primary",2,"cursor","pointer",3,"click"],M=["jsonTemplate",""];function x(t,c){1&t&&(n.Uc(0),n.sc(1,"json")),2&t&&n.Wc(" ",n.tc(1,1,c.step),"\n")}let D=(()=>{class t{constructor(t){this.tourService=t,this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-Tour tour!",placement:"below",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",route:"",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"below",title:"Route Return"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"md-menu"}),this.tourService.start()}}return t.ngComponentDef=n.Qb({type:t,selectors:[["md-menu-route"]],factory:function(c){return new(c||t)(n.Wb(r.c))},consts:8,vars:0,template:function(t,c){1&t&&(n.dc(0,"a",w),n.Uc(1,"View on GitHub"),n.bc(),n.dc(2,"a",k),n.oc("click",(function(t){return c.tourService.toggle()})),n.Uc(3,"Start Demo Tour"),n.bc(),n.Xb(4,"router-outlet"),n.Xb(5,"tour-step-template"),n.Sc(6,x,2,3,"ng-template",null,M,n.Tc))},directives:[r.a,d.f,r.d],pipes:[o.g],encapsulation:2}),t})();const z=["tourAnchor","another.route"];let B=(()=>{class t{}return t.ngComponentDef=n.Qb({type:t,selectors:[["other-route"]],factory:function(c){return new(c||t)},consts:5,vars:0,template:function(t,c){1&t&&(n.dc(0,"p"),n.Uc(1,"This is the "),n.dc(2,"strong",z),n.Uc(3,"another"),n.bc(),n.Uc(4," route"),n.bc())},directives:[r.a],encapsulation:2}),t})();e.d(c,"MdMenuModule",(function(){return C}));let C=(()=>{class t{}return t.ngModuleDef=n.Ub({type:t}),t.ngInjectorDef=n.Tb({factory:function(c){return new(c||t)},imports:[[o.c,r.b.forRoot(),d.e.forChild([{component:D,path:"",children:[{component:A,path:""},{component:B,path:"other"}]}])]]}),t})();r.b.forRoot(),d.e.forChild([{component:D,path:"",children:[{component:A,path:""},{component:B,path:"other"}]}])}}]);