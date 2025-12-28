let section1 = document.querySelector('#s1')
let section2 = document.querySelector('#s2')
let section3 = document.querySelector('#s3')

document.addEventListener('keydown', function(event){
    console.log(event.key)
    if(event.key === '1')
    {
        section1.scrollIntoView({behaviour:'auto'})
    
    }
    else if(event.key === '2')
    {
        section2.scrollIntoView({behaviour:'auto'})
    }
    else if(event.key === '3')
    {
        section3.scrollIntoView({behaviour:'auto'})
    }
    else if(event.key === 't' || event.key === 'T')
    {
        window.scrollTo({top:0, behaviour:'auto'})
    }
    else if(event.key === 'b' || event.key === 'B')
    {
        window.scrollTo({top:document.body.scrollHeight, behaviour:'auto'})
    }


})

 






