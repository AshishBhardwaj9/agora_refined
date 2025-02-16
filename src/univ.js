let pageName=window.location.href.split('agora_refined/')[1].length>0?window.location.href.split('shoplane_sample_website/')[1].split('.html')[0] : 'credIndex';
let pageUrl=window.location.href;
let pageInfo={
  pageName,pageUrl
}
let credEmail = localStorage.getItem("credEmail");
let txnId = sessionStorage.getItem("txnId");
window.adobeDataLayer = window.adobeDataLayer || [];

function adlPushEvent(payload){
  // console.log("Payload : "+payload.event)
  var eventInfo=payload.event;
  if (
    credEmail != null && credEmail.length > 0
  ) {
    window.adobeDataLayer.push({
      ...payload,
      eventInfo,
      login_status: 1,
      userInfo:{
        email:credEmail
      }
    });
  } else {
    window.adobeDataLayer.push({
      ...payload,
      eventInfo,
      login_status: 0
    });
  }
}
