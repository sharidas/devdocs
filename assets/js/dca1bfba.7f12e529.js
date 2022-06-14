"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[29425],{67886:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),n=r(13904),i=["components"],l={title:"Moodle 3.6.6",tags:["Release notes","Moodle 3.6"],sidebar_position:6,moodleVersion:"3.6.6"},d=void 0,m={unversionedId:"releases/3.6/3.6.6",id:"releases/3.6/3.6.6",title:"Moodle 3.6.6",description:"Release date: 9 September 2019",source:"@site/general/releases/3.6/3.6.6.md",sourceDirName:"releases/3.6",slug:"/releases/3.6/3.6.6",permalink:"/devdocs/general/releases/3.6/3.6.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.6/3.6.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.6",permalink:"/devdocs/general/tags/moodle-3-6"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655203822,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:6,frontMatter:{title:"Moodle 3.6.6",tags:["Release notes","Moodle 3.6"],sidebar_position:6,moodleVersion:"3.6.6"},sidebar:"releaseNotes",previous:{title:"Moodle 3.6.5",permalink:"/devdocs/general/releases/3.6/3.6.5"},next:{title:"Moodle 3.6.7",permalink:"/devdocs/general/releases/3.6/3.6.7"}},p={},u=[{value:"Fixes and improvements",id:"fixes-and-improvements",level:3},{value:"Security fixes and improvements",id:"security-fixes-and-improvements",level:3},{value:"Security fixes",id:"security-fixes",level:4},{value:"Security improvements",id:"security-improvements",level:4},{value:"See also",id:"see-also",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:l},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 September 2019"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.6.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.6.6"),"."),(0,s.kt)("h3",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59911"},"MDL-59911")," - Unoconv doesn't work after the scheduled task conversion_cleanup_task has run"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65219"},"MDL-65219")," - Broken link in messages contact request notification"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58026"},"MDL-58026")," - Regrading a quiz in progress causes student to lose data"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66071"},"MDL-66071")," - Cannot update user profile with non-internal auth method such as LDAP"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63458"},"MDL-63458"),' - Do not display "Send a message" option in course participants list if messaging is disabled site-wide'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33884"},"MDL-33884")," - Export of questions with lots of images as Moodle XML runs out of memory"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66136"},"MDL-66136")," - Online text assignment error when attempting to submit an image only (with no text)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64598"},"MDL-64598")," - Emojis are very big in forum notification emails"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35939"},"MDL-35939")," - Quiz page title does not tell the user where they are in the quiz"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65555"},"MDL-65555")," - Course restore excluding groups still restores quiz overrides resulting in extra calendar events"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65517"},"MDL-65517")," - Manually completed course activities showing in Timeline"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65925"},"MDL-65925")," - Grade page is broken if submission other than PDF was deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66110"},"MDL-66110")," - Error reading from database after upgrade to 3.7.1 (MySQL 8.0.2)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65679"},"MDL-65679")," - Expanding/collapsing PDF comments causes other annotations to change position"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57342"},"MDL-57342"),' - "Is this your first time here?" shows when self registration disabled and no message  in auth_instructions'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65116"},"MDL-65116")," - Assignment due date does not update for group selection"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65908"},"MDL-65908")," - Annotated PDF - Comments can't be added and viewed in RTL user interface"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65749"},"MDL-65749")," - Upgrade PHPMailer"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50472"},"MDL-50472")," - Maintenance Mode messages don't appear with Force Login enabled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52849"},"MDL-52849")," - File picker error messages are not read out in assignment to screen reader users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66272"},"MDL-66272")," - Custom theme favicon on LTI provider site breaks LTI authentication"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66230"},"MDL-66230")," - Deleting a user tour causes error in privacy data export"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65975"},"MDL-65975")," - Mobile features should reflect new features supported by Moodle App version 3.7 (backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61199"},"MDL-61199"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66120"},"MDL-66120")," - Remove community finder block - as part of ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Sunsetting_moodle.net"},"Sunsetting moodle.net")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66072"},"MDL-66072")," - Remove course-sharing functionality - as part of ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Sunsetting_moodle.net"},"Sunsetting moodle.net")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65595"},"MDL-65595")," - Multiple choice question text not wrapped in Lesson")),(0,s.kt)("h3",{id:"security-fixes-and-improvements"},"Security fixes and improvements"),(0,s.kt)("h4",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=391030"},"MSA-19-0018")," JavaScript injection possible in some Mustache templates via recursive rendering from contexts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=391031"},"MSA-19-0019")," Course creation did not check the creator's role assignment capability before automatically assigning them as a teacher in the course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=391032"},"MSA-19-0020")," Python Machine Learning dependency versions bumped"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=391035"},"MSA-19-0021")," Activity :addinstance capabilities were not respected when creating a course in single activity format"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=391036"},"MSA-19-0022")," Open redirect in the mobile launch endpoint could be used to expose mobile access tokens"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=391037"},"MSA-19-0023")," Forum subscribe link contained an open redirect if forced subscription mode was enabled")),(0,s.kt)("h4",{id:"security-improvements"},"Security improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65443"},"MDL-65443")," - Context freezing not logged")),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/general/releases/3.6/3.6.5"},"Moodle 3.6.5 release notes"))),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.6.6"},"Notes de mise \xe0 jour de Moodle 3.6.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.6.6"},"Notas de Moodle 3.6.6"))))}k.isMDXComponent=!0}}]);