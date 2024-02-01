const fibonacci = function(n) {
    let a = b= 1;
    let fibo = 0;

    if(typeof(n)==='string')
    {
        n = Number(n);
        if(typeof(n) != "number")
        {
            return "ERROR";
        }
    }
    if(n >= 0)
    {
        if (n==1 || n==2)
        {
            return 1;
        }
        else if (n==0)
        {
            return 0;
        }
        else 
        {
            while (n-2 > 0)
            {
                b = a + b;
                a = b - a;
                n--;
            }
            return b;
        }
    }
    else 
    {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
