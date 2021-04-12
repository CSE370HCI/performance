// we want to refresh our deals every few seconds, so that people always see the latest ones!
function refreshme(){
  setInterval(function(){
    window.location.reload();
  },4000);
}
