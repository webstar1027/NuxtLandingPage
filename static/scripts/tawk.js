document.addEventListener("DOMContentLoaded", () => {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script")
  var scripts = document.getElementsByTagName("script")
  var s0=scripts[scripts.length-1];
  s1.async=true;
  s1.onload=function(){
    setTimeout(function() {
      var els = document.querySelectorAll('[title="chat widget"]')
      els.forEach((el) => {
        /*
        if (el.style.borderRadius === '50%') {
          el.style.display = 'none'
          return
        }

        el.style.minHeight = '75px'
        el.style.maxHeight = '75px'
        el.style.height = '75px'
        el.style.minWidth = '75px'
        el.style.maxWidth = '75px'
        el.style.width = '75px'
        */
      })
    }, 500)
  };
  s1.src='https://embed.tawk.to/56578f385d0ca158310f6947/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  document.body.appendChild(s1);
  })()
})