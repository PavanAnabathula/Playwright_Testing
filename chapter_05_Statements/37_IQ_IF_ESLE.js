//true

if ('hello') console.log('hello is truthy')
if (42) console.log('Number is truthy')
if ({}) console.log('Empty object is truthy')
if ([]) console.log('Empty array is truthy')

//else

if ('') console.log("Won't print") //--> falsy return
if (null) console.log("Won't print")
if (undefined) console.log("Won't print")
if (NaN) console.log("Won't print")
if (0) console.log("Won't print")
