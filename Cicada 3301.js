const home = document.querySelector('.btthome')
const lastn = document.querySelector('.bttlastn')

function go(antes,depois)
{
    let dNone, dinLine;
    
    if(antes==1)
    {
        dNone = home;
    }
    else
    {
        dNone = lastn;
    }

    dNone.style.display = 'none'

    if(depois==1)
    {
        dinLine = home;
    }
    else
    {
        dinLine = lastn;
    }

    dinLine.style.display = 'inLine'
}