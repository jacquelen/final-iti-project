const d= new Date();

const cards =[
    {
        id:'1',
        title:'making tea',
        date:d.toLocaleString(),
        taskdate:"mn ",
        priority:"HIGH ",
        typecard:"#FA8072 ",
       
    },
    {
        id:'2',
        title:'making milk',
        date:d.toLocaleString(),
        taskdate:" mn",
        priority:"LOW ",
        typecard:"#B0E0E6 ",        

    },
    {
        id:'3',
        title:'making water',
        date:d.toLocaleString(),
        taskdate:"mn ",
        priority:"HIGH ",
        typecard:"#FA8072 ",
        
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
