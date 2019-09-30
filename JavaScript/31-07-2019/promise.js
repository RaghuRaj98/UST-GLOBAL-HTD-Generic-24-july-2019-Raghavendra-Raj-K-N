/*let result=new  Promise(function(resolve,reject){
    if(10>10){
       reject('Failed');
    }
    else{
        resolve("success");

    }
});

result.then((data)=>{
    console.log('then block'+data);
}).catch((error)=>{
    console.log('catch block=' +error);
})*/

                                                //catch
let employeeData=new  Promise(function(resolve,reject){
    const employee=[
        {
            name:"shahrkh",
            age:60
        },
        {
            name:"akshy"
            ,age:50
        }
    

    ];
    if(10>10){
       reject('failed');
    }
    else{
        resolve(employee);

    }
});

employeeData.then((data)=>{
    console.log('Enployee'+data);
    return data;
}).catch((error)=>{
    console.log('Employee=' +error);
}).then(function(data1){
    console.log('this  is then block',data1)
})



