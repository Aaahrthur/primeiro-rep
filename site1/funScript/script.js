var fig = document.getElementsByTagName('figcaption')[0]
    function onmouse(){
       
        fig.style.opacity = '1'
}
    function onmouse2(){
        fig.style.opacity = '0'
    }
    function mudafoto(foto){
        
      document.getElementById('icone').src = foto
    }