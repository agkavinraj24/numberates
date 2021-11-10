let ran=Math.floor(Math.random()*101);
console.log(ran);
let count = 10;
function check(num)
{
    console.log(num);
    if(count>1)
    {
        if(num == ran)
        {
            location.href="pass.html";
        }
        else
        {
            count = count -1;
        }
        document.getElementById("attempts").innerHTML=count;
    }
    else 
    {
        location.href="fail.html";
    }
}
