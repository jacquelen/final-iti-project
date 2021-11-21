const d= new Date();

const cards =[
    {
        id:'card-1',
        title:'making tea',
        date:d.toLocaleString(),
        taskdate:"",
       
    },
    {
        id:'card-2',
        title:'making milk',
        date:d.toLocaleString(),
        taskdate:"",
        

    },
    {
        id:'card-3',
        title:'making water',
        date:d.toLocaleString(),
        taskdate:"",
        
    },
]
 const data={
    lists:{
        'list-1':{
            id:'list-1',
            title:'todo',
            cards,
        },
        'list-2':{
            id:'list-2',
            title:'doing',
            cards:[],
        },

    },

    listIds:['list-1','list-2'],

}

 export  const unit={
     cards,
     data
 }
