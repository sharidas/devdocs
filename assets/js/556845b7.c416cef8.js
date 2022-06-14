"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[26618],{8285:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return h}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=n(13904),s=n(11239),l=["components"],d={title:"String deprecation",tags:["Language","Deprecation"]},c=void 0,p={unversionedId:"projects/api/string-deprecation",id:"projects/api/string-deprecation",title:"String deprecation",description:"<ProjectSummary",source:"@site/general/projects/api/string-deprecation.md",sourceDirName:"projects/api",slug:"/projects/api/string-deprecation",permalink:"/devdocs/general/projects/api/string-deprecation",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/projects/api/string-deprecation.md",tags:[{label:"Language",permalink:"/devdocs/general/tags/language"},{label:"Deprecation",permalink:"/devdocs/general/tags/deprecation"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655203822,formattedLastUpdatedAt:"14/06/2022",frontMatter:{title:"String deprecation",tags:["Language","Deprecation"]},sidebar:"projects",previous:{title:"DevDocs Migration",permalink:"/devdocs/general/projects/docs/migration"},next:{title:"AMOS",permalink:"/devdocs/general/projects/api/amos"}},m={},h=[{value:"Removing strings which are no longer used",id:"removing-strings-which-are-no-longer-used",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Why and when should a string be deprecated?",id:"why-and-when-should-a-string-be-deprecated",level:3},{value:"When should a string be removed?",id:"when-should-a-string-be-removed",level:3},{value:"How to deprecate a string",id:"how-to-deprecate-a-string",level:2},{value:"What to do if you get a debugging message",id:"what-to-do-if-you-get-a-debugging-message",level:2},{value:"See also",id:"see-also",level:2}],u={toc:h};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,(0,a.Z)({frontMatter:d},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)(s.ci,{projectName:"api/string-deprecation",mdxType:"ProjectSummary"}),(0,o.kt)("h2",{id:"removing-strings-which-are-no-longer-used"},"Removing strings which are no longer used"),(0,o.kt)("p",null,"From Moodle 2.8 onwards, strings can be deprecated in a way very similar to how functions are  deprecated. This feature allows us to safely remove strings once we are reasonably sure they are no longer used. The process should help to remove unnecessary strings from the language packs, so translators do not waste valuable time  translating them, while protecting us from accidentally removing a string that is still being used somewhere."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"There is a file with the list of deprecated strings. When a deprecated string is used (typically via the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_string()")," call), a warning message is displayed, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"String [identifier,component] is deprecated. Either you should no longer be using that string,\nor the string has been incorrectly deprecated, in which case you should report this as a bug.\nPlease refer to String deprecation developer docs.\n")),(0,o.kt)("p",null,"Note that this warning is displayed at the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG_DEVELOPER")," level only (which is what Moodle developers should have selected). See below for info on what to do if you see this message."),(0,o.kt)("h3",{id:"why-and-when-should-a-string-be-deprecated"},"Why and when should a string be deprecated?"),(0,o.kt)("p",null,"The most common case is that you realize that a string is not used any more in standard Moodle code. You will probably search the whole moodle.git for the string identifier and the only relevant place found is the string definition itself. Even if it seems that the given string is not used any more in the standard Moodle code, it's possible that some additional (contributed) plugins still rely on it. This is typical for semantically general strings provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"moodle.php"),' (core) component such as "Yes", "Continue", "Hidden" etc.'),(0,o.kt)("p",null,"Beware that searching for the string identifier only may sometimes lead to false negatives. Imagine you have a suspicion that a hypothetical string ",(0,o.kt)("inlineCode",{parentName:"p"},"actionloginremote")," is no longer used any more as there is no code that would actually use this ",(0,o.kt)("inlineCode",{parentName:"p"},"stringid"),". However, there can be places like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$action = optional_param('action', 'loginremote', PARAM_ALPHA);\nprint_string('action'.$action);\n")),(0,o.kt)("p",null,"that are harder to detect. So, instead of simply removing the string ",(0,o.kt)("inlineCode",{parentName:"p"},"actionloginremote")," you would put it to the list of deprecated strings."),(0,o.kt)("p",null,"Another scenario may be that a semantically identical string was defined twice or it was put into the wrong component. If you think there may be places that rely on the wrong location (component), you should deprecate it. Copy the string to a new location (do not forget to use ",(0,o.kt)("a",{parentName:"p",href:"/general/projects/api/amos"},"CPY instruction for AMOS")," to replay the change in all existing translations) and deprecate the old one."),(0,o.kt)("p",null,"Also, it may turn out that some strings are only vaguely defined and do not have a clear and unique context / semantics. Ideally, Moodle code should use context-sensitive strings rather than rely on one general string covering all cases. Things like ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Grammatical_gender"},"grammatical gender"),' play an important role in many languages. For example, in Czech, "a role" or "a question" are of feminine gender and the correct translation of "hidden" in this case is ',(0,o.kt)("inlineCode",{parentName:"p"},"skryt\xe1"),', while "a badge" is of masculine gender and the correct translation is ',(0,o.kt)("inlineCode",{parentName:"p"},"skryt\xfd"),". So it would be better to have separate strings like ",(0,o.kt)("inlineCode",{parentName:"p"},"hiddenrole"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"hiddenquestion")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hiddenbadge"),' even if they all read just "Hidden" in the English language pack. When you are about to split existing string into a couple of specific ones, you may wish to deprecate the general one at the end too (also, do not forget to use the ',(0,o.kt)("a",{parentName:"p",href:"/general/projects/api/amos"},"CPY")," again)."),(0,o.kt)("h3",{id:"when-should-a-string-be-removed"},"When should a string be removed?"),(0,o.kt)("p",null,"There are situations where deprecation does not make sense. For example when a whole functionality is being removed, or a very specific string (such as error message) is no longer used by the code. If it is very unlikely that the string is not used by any other code, it can simply be removed without the full deprecation process."),(0,o.kt)("p",null,"The same logic applies to cases when a very specific string is to be moved or renamed. In this situation, it is valid to just move it (together with the matching ",(0,o.kt)("a",{parentName:"p",href:"/general/projects/api/amos"},"MOV instruction in the AMOScript"),")."),(0,o.kt)("h2",{id:"how-to-deprecate-a-string"},"How to deprecate a string"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When deprecating a core string from ",(0,o.kt)("inlineCode",{parentName:"p"},"lang/en/xxxx.php")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"fullcomponentname")," should be ",(0,o.kt)("inlineCode",{parentName:"p"},"core_xxxx"),", except for ",(0,o.kt)("inlineCode",{parentName:"p"},"lang/en/moodle.php")," which has ",(0,o.kt)("inlineCode",{parentName:"p"},"fullcomponentname")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"core")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Strings can be deprecated and removed on the ",(0,o.kt)("inlineCode",{parentName:"li"},"master")," branch only."),(0,o.kt)("li",{parentName:"ul"},"Locate or create a file ",(0,o.kt)("inlineCode",{parentName:"li"},"deprecated.txt")," either in ",(0,o.kt)("inlineCode",{parentName:"li"},"lang/en/")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"componentfullpath/lang/en/")),(0,o.kt)("li",{parentName:"ul"},"Add a line ",(0,o.kt)("inlineCode",{parentName:"li"},"identifier,fullcomponentname")," to the end of this file"),(0,o.kt)("li",{parentName:"ul"},"Move the string inside the existing language file to the end of the file under the comment ",(0,o.kt)("inlineCode",{parentName:"li"},"// Deprecated since Moodle X.Y.")," (this comment will help removing deprecated strings later)."),(0,o.kt)("li",{parentName:"ul"},"For final deprecation (4 major versions later), delete the string from both ",(0,o.kt)("inlineCode",{parentName:"li"},"deprecated.txt")," and respective lang file.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before Moodle 3.0, final deprecation was 2 major versions later. With 3.0 the policy switched to 4 major releases later."))),(0,o.kt)("p",null,"Take care when deprecating a string within a few weeks of ",(0,o.kt)("inlineCode",{parentName:"p"},"en_fix")," being merged with ",(0,o.kt)("inlineCode",{parentName:"p"},"en"),", as it can result in a conflict (as happened in ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-52315"},"MDL-52315"),")."),(0,o.kt)("h2",{id:"what-to-do-if-you-get-a-debugging-message"},"What to do if you get a debugging message"),(0,o.kt)("p",null,"There are two possibilities. Either the code that uses the deprecated string must be fixed, or the string should not have been deprecated and must be removed from the list."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"git-blame")," tool on the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"lang/en/deprecated.txt")," and find the commit/issue that deprecated the string. It should give you enough information to decide on the most appropriate action."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you think the string was deprecated by mistake, create a new issue in the tracker to remove it from the list (on all supported branches, not only on master)."),(0,o.kt)("li",{parentName:"ul"},"If the string was renamed or moved, you will probably want to fix the caller to use the new name/location of the string."),(0,o.kt)("li",{parentName:"ul"},"You may as well copy the string to your own plugin scope and make it context-specific.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Git blame")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blame/master/lang/en/deprecated.txt"},"git blame lang/en/deprecated.txt"),(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blame/master/mod/quiz/lang/en/deprecated.txt"},"git blame mod/quiz/lang/en/deprecated.txt")))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64905"},"MDL-64905")," comments regarding introducing a new string and deprecating the old one")))}g.isMDXComponent=!0},11239:function(e,t,n){n.d(t,{ci:function(){return m},e5:function(){return u}});var a=n(67294),i=n(39960),o=n(70891),r=n(18987),s=n(69661),l=n(98181);function d(e){return a.createElement("div",{key:"Person:"+e.name},function(e){return e.githubUsername?a.createElement(o.ZP,{alignItems:"flex-start",key:e.key},a.createElement(r.Z,null,a.createElement(s.Z,{src:"https://avatars.githubusercontent.com/"+e.githubUsername})),a.createElement(i.Z,{to:"https://github.com/"+e.githubUsername},a.createElement(l.Z,{primary:e.name,secondary:e.githubUsername}))):a.createElement(a.Fragment,null,e.name)}(e))}var c="projecttable_Zy3x",p=n(78462);function m(e){return t=u(e.projectName),a.createElement("table",{className:c},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,"Owners"),a.createElement("td",null,(s=t.owners)?a.createElement(p.Z,null,s):null)),a.createElement("tr",null,a.createElement("th",null,"Status"),a.createElement("td",null,(r=t.status,a.createElement(a.Fragment,null,r)))),(null==(n=t.discussionLinks)?void 0:n.length)>0&&a.createElement("tr",null,a.createElement("th",null,"Links"),a.createElement("td",null,t.discussionLinks.map((function(e){var t=e.link,n=e.title;return a.createElement("div",{key:n},a.createElement(i.Z,{to:t},n))})))),(null==(o=t.issueLinks)?void 0:o.length)>0&&a.createElement("tr",null,a.createElement("th",null,"Issues"),a.createElement("td",null,t.issueLinks.map((function(e){var t=e.link,n=e.title;return a.createElement("div",{key:n},a.createElement(i.Z,{to:t},n))}))))));var t,n,o,r,s}var h=JSON.parse('{"q":{"docs/migration":{"title":"Dev Docs Migration","status":"In Progress","owners":[{"name":"Andrew Lyons","githubUsername":"andrewnicols"},{"name":"Sara Arjona","githubUsername":"sarjona"}],"discussionLinks":[{"link":"https://moodle.org/mod/forum/discuss.php?d=433613","title":"Announcement"}]},"api/string-deprecation":{"title":"String deprecation","status":"Complete","owners":[{"name":"Marina Glancy","githubUsername":"marinaglancy"}],"issueLinks":[{"link":"https://tracker.moodle.org/browse/MDL-46585","title":"MDL-46585"}]},"api/amos":{"title":"Automated Manipulation of Strings (AMOS)","status":"Complete","owners":[{"name":"David Mudrak","githubUsername":"mudrd8mz"}],"discussionLinks":[{"link":"http://moodle.org/mod/forum/discuss.php?d=118707#p542197","title":"Discussion"}],"issueLinks":[{"link":"https://tracker.moodle.org/browse/MDL-18797","title":"MDL-18797"}]}}}'),u=function(e){if(!h.q[e])throw new Error("Unknown project "+e);var t=h.q[e];return{projectName:e,title:t.title,owners:t.owners.map((function(e){return d(e)})),status:t.status,issueLinks:t.issueLinks,discussionLinks:t.discussionLinks}}}}]);