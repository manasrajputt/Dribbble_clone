var no_of_buttons=document.querySelectorAll('.button').length;
console.log(no_of_buttons);

for( var i=0; i < no_of_buttons; i++)
{
    document.querySelectorAll('.button')[i].addEventListener('click',function(){
        var buttonstyle=this.innerHTML;
        playvideo(buttonstyle);
        console.log(buttonstyle);
    });
}

function playvideo(key)
{      
    // console.log(key);
    switch(key)
    {
        case "Discover":
            var v1=  document.querySelector('video');
            v1.src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906";
            v1.play();
            break;
        case "Animation":
                var v2=  document.querySelector('video');
                v2.src="https://cdn.dribbble.com/uploads/39487/original/a9c52fb5f7c325b8714faadd7bcb1856.mp4?1657906886";
                v2.play();
                break;
        case "Branding":
            var v3= document.querySelector('video');
            v3.src="https://cdn.dribbble.com/uploads/39491/original/42949afae0b33b289365b3bea18c4b97.mp4?1657907965";
            v3.play();
            break;
        case "Illustration":
            var v4=document.querySelector('video');
            v4.src="https://cdn.dribbble.com/uploads/39500/original/b7e4e7e6796157dbd64e75cda5572da9.mp4?1657909968";
            v4.play();
            break;
        case "Mobile":
            var v4=document.querySelector('video');
            v4.src='https://cdn.dribbble.com/uploads/39510/original/820260ec84c9a17acc2f34668d932adf.mp4?1657910724';
            v4.play();
            break;
        case "Print":
            var v5=document.querySelector('video');
            v5.src='https://cdn.dribbble.com/uploads/39518/original/2795de14c38b75d9926a9d756e6b38b0.mp4?1657912172';
            v5.play();
            break;   
        case "Product Desgin":
            var v6=document.querySelector('video');
            v6.src='https://cdn.dribbble.com/uploads/39526/original/c222f2f55b363d2001239b3289b54c1e.mp4?1657913110';
            v6.play();
            break;
        case "Typography":
            var v7=document.querySelector('video');
            v7.src='https://cdn.dribbble.com/uploads/39530/original/d7d272f84f41ade54123dd96e9bcfef6.mp4?1657913839';
            v7.play();
            break;
        case "Web Design":
            var v8=document.querySelector('video');
            v8.src='https://cdn.dribbble.com/uploads/39542/original/a9a0b5491d66a191558ab9cee910a2e8.mp4?1657914435';
            v8.play();
            break;
    }
}