(this.webpackJsonpworkitout=this.webpackJsonpworkitout||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var s,a,c=t(0),i=t.n(c),r=t(16),o=t.n(r),d=t(6),u=t(17),g=t(5),m=t(2),l=t(11),b=t(3),j=t(1),h=b.c.button(s||(s=Object(m.a)(["\n  display: absolute;\n  right: 0;\n"]))),p=b.c.img(a||(a=Object(m.a)(["\n  display: none;\n"])));function S(e){var n=e.showVisitors,t=void 0!==n&&n,s=Object(g.f)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{onClick:function(){return s.push("/settings")},children:Object(j.jsx)(l.c,{})}),Object(j.jsx)("h1",{children:"WorkItOut"}),Object(j.jsxs)("button",{onClick:function(){return s.push("/workouts/0")},children:[Object(j.jsx)("h3",{children:"Full Body Dumbbell"}),Object(j.jsx)("p",{children:"60 min"})]}),t?Object(j.jsx)("img",{src:"https://profile-counter.glitch.me/great-app-sdkjsd-dev-2021-10-05/count.svg",alt:"Visitors"}):Object(j.jsx)(p,{src:"https://profile-counter.glitch.me/great-app-sdkjsd-dev-2021-10-05/count.svg",alt:"Visitors"})]})}var x,O,f=function(e,n){var t=Object(c.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(s){return console.error(s),n}})),s=Object(d.a)(t,2),a=s[0],i=s[1];return[a,function(n){try{var t=n instanceof Function?n(a):n;i(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(s){throw new Error(s)}}]},k=b.c.button(x||(x=Object(m.a)(["\n    border: none;\n"])));function v(){var e=f("sound",!0),n=Object(d.a)(e,2),t=n[0],s=n[1],a=Object(c.useState)(),i=Object(d.a)(a,2),r=i[0],o=i[1],u=Object(g.f)();Object(c.useEffect)((function(){o("production")}),[]);var m=function(e){"yes"===e.target.value?s(!0):s(!1)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{onClick:function(){return u.push("/")},children:Object(j.jsx)(l.a,{})}),Object(j.jsx)("h3",{children:"Settings"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("span",{children:"Sound?"}),Object(j.jsx)("input",{type:"radio",id:"soundYes",name:"sound",value:"yes",checked:t,onChange:m}),Object(j.jsx)("label",{htmlFor:"soundYes",children:"Yes"}),Object(j.jsx)("input",{type:"radio",id:"soundNo",name:"sound",value:"no",checked:!t,onChange:m}),Object(j.jsx)("label",{htmlFor:"soundNo",children:"No"})]}),Object(j.jsx)("button",{onClick:function(){return localStorage.clear()},children:"Clear data"}),Object(j.jsxs)("p",{children:["This app is in ",r," mode."]})]})}function I(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(e.toFixed(n))}var R,B,W,y=b.c.div(O||(O=Object(m.a)(["\n  font-size: 7rem;\n  font-weight: bold;\n  padding: 0.5em;\n"])));function C(e){var n=e.children,t=e.onTimerExpired,s=Object(c.useState)(n),a=Object(d.a)(s,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){var e=setInterval((function(){i>1?r(i-1):(t(),clearInterval(e),r(n))}),1e3);return function(){return clearInterval(e)}}),[n,t,i]),Object(j.jsx)(y,{children:i})}var w,D,F,A,E=b.c.div(R||(R=Object(m.a)(["\n  background-color: #6b82f0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n"]))),P=b.c.h3(B||(B=Object(m.a)(["\n  text-transform: uppercase;\n  font-size: 2rem;\n  margin-bottom: 0;\n"]))),T=b.c.p(W||(W=Object(m.a)(["\n  text-transform: uppercase;\n  margin-bottom: 0;\n"])));function U(e){var n=e.timeInSeconds,t=e.nextExercise,s=e.triggerNext;return Object(j.jsxs)(E,{children:[Object(j.jsx)(P,{children:"Break"}),Object(j.jsx)(C,{onTimerExpired:function(){return s()},children:n}),Object(j.jsx)("p",{children:"Next:"}),Object(j.jsx)(T,{children:t.name}),Object(j.jsx)("p",{children:t.instance})]})}var L,N,z=b.c.div(w||(w=Object(m.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n"]))),J=b.c.button(D||(D=Object(m.a)(["\n  border: none;\n  padding: 24px;\n  border-radius: 8px;\n"]))),M=b.c.p(F||(F=Object(m.a)(["\n    font-size: 4rem;\n    margin: 0;\n"]))),G=b.c.p(A||(A=Object(m.a)(["\n    text-transform: uppercase;\n    margin: 0;\n"])));function V(e){var n=e.label,t=e.value,s=e.onChange,a=e.unit,c=e.step,i=void 0===c?1:c,r=e.min,o=void 0===r?0:r;if(void 0===t)return null;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:n}),Object(j.jsxs)(z,{children:[Object(j.jsx)(J,{onClick:function(e){e.stopPropagation(),t-i>=o&&s(t-i)},disabled:t<=o,children:Object(j.jsx)(l.d,{})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(M,{children:t}),Object(j.jsx)(G,{children:a})]}),Object(j.jsx)(J,{onClick:function(e){e.stopPropagation(),s(t+i)},children:Object(j.jsx)(l.e,{})})]})]})}var Y,q,H,K,$,Q,X=b.c.button(L||(L=Object(m.a)(["\n  background-color: #fe4042;\n  color: white;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: none;\n"]))),Z=b.c.h3(N||(N=Object(m.a)(["\n  text-transform: uppercase;\n  font-size: 2rem;\n  margin-bottom: 0;\n  text-align: center;\n"])));function _(e){var n=e.children,t=e.triggerNext,s=Object(c.useState)(n.suggestedReps),a=Object(d.a)(s,2),i=a[0],r=a[1],o=Object(c.useState)(n.suggestedWeight),u=Object(d.a)(o,2),g=u[0],m=u[1];return Object(j.jsxs)(X,{onClick:function(){var e=n;e.suggestedReps&&(e.suggestedReps=i),e.suggestedWeight&&(e.suggestedWeight=g),t(e)},children:[Object(j.jsx)(Z,{children:n.name}),Object(j.jsx)("p",{children:n.instance}),n.timeInSeconds?Object(j.jsx)(C,{onTimerExpired:function(){return t()},children:n.timeInSeconds}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:"Info Card here"}),Object(j.jsx)(V,{label:"Amount of completed repetitions:",value:i,onChange:r,unit:"reps"}),Object(j.jsx)(V,{label:"Applied weight:",value:g,onChange:m,unit:"kg",step:2.5,min:2})]})]})}var ee=b.c.div(Y||(Y=Object(m.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),ne=Object(b.b)(q||(q=Object(m.a)(["\n  background: transparent;\n  border: 0;\n  color: white;\n  font-size: 40px;\n  padding: 0.2em; \n"]))),te=b.c.button(H||(H=Object(m.a)(["\n  ","\n  position: absolute;\n"])),ne),se=b.c.button(K||(K=Object(m.a)(["\n  ","\n"])),ne),ae=b.c.div($||($=Object(m.a)(["\n  position: absolute;\n  right: 0;\n"]))),ce=b.c.div(Q||(Q=Object(m.a)(["\n  position: absolute;\n  left: 40px;\n"])));function ie(e){var n=e.addCompletedWorkout,t=e.children,s=Object(c.useState)(0),a=Object(d.a)(s,2),i=a[0],r=a[1],o=f("sound",!0),u=Object(d.a)(o,1)[0],m=Object(c.useState)([]),b=Object(d.a)(m,2),h=b[0],p=b[1],S=Object(g.f)(),x=new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t[i];if(i+1===t.length&&k(h.concat(e)),p(h.concat(e)),u){var n=x.play();n&&n.catch((function(e){"NotAllowedError"!==e.name&&"NotSupportedError"!==e.name||console.error(e.name)}))}navigator.vibrate&&navigator.vibrate(1e3),r(i+1)},k=function(e){alert("Congratulations. You finished this workout!"),S.push("/"),n(e)};return Object(j.jsxs)(ee,{children:[Object(j.jsx)(te,{onClick:function(){window.confirm("Do you really want to stop this workout?")&&S.push("/")},children:Object(j.jsx)(l.f,{})}),Object(j.jsxs)(ce,{children:[I((i+1)/t.length*100,0),"%"]}),Object(j.jsxs)(ae,{children:[Object(j.jsx)(se,{onClick:function(){return r(i-1)},children:Object(j.jsx)(l.a,{})}),Object(j.jsx)(se,{onClick:function(){return O()},children:Object(j.jsx)(l.b,{})})]}),"Break"===t[i].name?Object(j.jsx)(U,{timeInSeconds:t[i].timeInSeconds||20,nextExercise:t[i+1],triggerNext:O}):Object(j.jsx)(_,{triggerNext:O,children:t[i]})]})}var re=[{name:"Jumping Rope",instance:"Warm Up",timeInSeconds:20},{name:"Jumping Jacks",instance:"Warm Up",timeInSeconds:20},{name:"Running on the stand and circling arms (front/back)",instance:"Warm Up",timeInSeconds:20},{name:"Circle Shoulder",instance:"Warm Up",timeInSeconds:20},{name:"Turn Body to the Left and Right",instance:"Warm Up",timeInSeconds:20},{name:"Legs Circles",instance:"Warm Up",timeInSeconds:20},{name:"Knee Circles",instance:"Warm Up",timeInSeconds:20},{name:"Wrist and Ankle Circles",instance:"Warm Up",timeInSeconds:20},{name:"Break",timeInSeconds:20},{name:"Goblet Squats",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Goblet Squats",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Goblet Squats",instance:"Set 3",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:60},{name:"Romanian Deadlift",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Romanian Deadlift",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Romanian Deadlift",instance:"Set 3",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:60},{name:"Dumbbell Push Ups",instance:"Set 1",suggestedReps:6},{name:"Break",timeInSeconds:20},{name:"Dumbbell Push Ups",instance:"Set 2",suggestedReps:6},{name:"Break",timeInSeconds:20},{name:"Dumbbell Push Ups",instance:"Set 3",suggestedReps:6},{name:"Break",timeInSeconds:60},{name:"Advanced Military Press",instance:"Set 1",suggestedReps:6},{name:"Break",timeInSeconds:20},{name:"Advanced Military Press",instance:"Set 2",suggestedReps:6},{name:"Break",timeInSeconds:20},{name:"Advanced Military Press",instance:"Set 3",suggestedReps:6},{name:"Break",timeInSeconds:60},{name:"Close Bench Press",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Close Bench Press",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Close Bench Press",instance:"Set 3",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:60},{name:"Dumbbell Rows Right",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Dumbbell Rows Right",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Dumbbell Rows Right",instance:"Set 3",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:60},{name:"Dumbbell Rows Left",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Dumbbell Rows Left",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Dumbbell Rows Left",instance:"Set 3",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:60},{name:"Dumbbell Glute Bridge",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Dumbbell Glute Bridge",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Dumbbell Glute Bridge",instance:"Reverse Plank Variation",suggestedReps:6},{name:"Break",timeInSeconds:60},{name:"Lying Triceps Extensions",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Lying Triceps Extensions",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Lying Triceps Extensions",instance:"Set 3",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:60},{name:"Scotsman Curls",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Scotsman Curls",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Scotsman Curls",instance:"Set 3",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:60},{name:"Alternating Biceps Curls",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Alternating Biceps Curls",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Alternating Biceps Curls",instance:"Set 3",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:60},{name:"Side Lateral Raises",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Side Lateral Raises",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Side Lateral Raises",instance:"Set 3",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:60},{name:"Butterfly Reverse",instance:"Set 1",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Butterfly Reverse",instance:"Set 2",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Butterfly Reverse",instance:"Set 3",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:60},{name:"Calf Raises",instance:"Right",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Calf Raises",instance:"Left",suggestedReps:6,suggestedWeight:4.5},{name:"Break",timeInSeconds:20},{name:"Calf Raises",instance:"Both",timeInSeconds:40},{name:"Break",timeInSeconds:60},{name:"Alternating Toe Touches",instance:"Sixpack",timeInSeconds:30},{name:"Hip Thrusts",instance:"Sixpack",timeInSeconds:30},{name:"Roll Ins Left",instance:"Sixpack",timeInSeconds:30},{name:"Roll Ins Mid",instance:"Sixpack",timeInSeconds:30},{name:"Roll Ins Right",instance:"Sixpack",timeInSeconds:30},{name:"Crunches",instance:"Sixpack",timeInSeconds:30},{name:"Alternating Crunches",instance:"Sixpack",timeInSeconds:30},{name:"Toe Touch Hold",instance:"Sixpack",timeInSeconds:30}];function oe(){var e=f("fullbodyDumbbell",[re]),n=Object(d.a)(e,2),t=n[0],s=n[1];console.log(t);return Object(j.jsx)(u.a,{children:Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{exact:!0,path:"/",component:S}),Object(j.jsx)(g.a,{exact:!0,path:"/visitors",children:Object(j.jsx)(S,{showVisitors:!0})}),Object(j.jsx)(g.a,{exact:!0,path:"/workouts/0",children:Object(j.jsx)(ie,{addCompletedWorkout:function(e){s(t.concat([e]))},children:t[t.length-1]})}),Object(j.jsx)(g.a,{exact:!0,path:"/settings",component:v}),Object(j.jsx)(g.a,{component:S})]})})}var de=t(15),ue=t(21),ge=t.n(ue),me=t(27);function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(n){return setTimeout((function(){return n({data:e})}),500)}))}var be,je=Object(de.b)("counter/fetchCount",function(){var e=Object(me.a)(ge.a.mark((function e(n){var t;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),he=Object(de.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}},extraReducers:function(e){e.addCase(je.pending,(function(e){e.status="loading"})).addCase(je.fulfilled,(function(e,n){e.status="idle",e.value+=n.payload}))}}),pe=he.actions,Se=(pe.increment,pe.decrement,pe.incrementByAmount,he.reducer),xe=Object(de.a)({reducer:{counter:Se}}),Oe=t(28);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=Object(b.a)(be||(be=Object(m.a)(['\n  :root {\n    --clr-accent: #AD09D7;\n    --clr-primary: #F4F3F6;\n    --clr-secondary: #FFFFFF;\n    --clr-text: #363636;\n    --clr-label: #9C9C9C;\n    --br-card: 20px;\n    --br-button: 4px;\n    \n    --card-box-shadow: 0 8px 16px 0 rgb(0 0 0 / 4%);\n    --card-border: 1px solid rgba(0, 0, 0, .2);\n    --hover-transition: 0.2s ease;\n    --anm-size: 50px;\n    --anm-border: 4px;\n    --anm-time: 1.3s;\n  }\n  \n  * {\n    box-sizing: border-box;\n    font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,\n      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n  \n  html,\n  body {\n    margin: 0;\n    paddding: 0;\n  }\n  \n  html,\n  body,\n  #root {\n    height: 100%;\n  }\n'])));o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsxs)(Oe.a,{store:xe,children:[Object(j.jsx)(fe,{}),Object(j.jsx)(oe,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.9d18564c.chunk.js.map