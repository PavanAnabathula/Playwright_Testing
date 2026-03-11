let s1=160,s2=1450,s3=140;

if(s1==s2&&s1==s3){
    console.log("The triangle is equilateral.");
}

else if (s1==s2||s1==s3||s2==s1||s2==s3||s3==s1||s3==s2){
        console.log("The triangle is Isosceles.");

}
else{
            console.log("The triangle is Scalene.");

}