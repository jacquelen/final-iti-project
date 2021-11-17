const cards =[
    {
        id:'card-1',
        title:'making tea',
        label:[{
          text:"front",
          color:"cyan"
        }],
        tasks:[{
            id:"",
            title:"one",
        }],
        des:"des",
        date:new Date()
    },
    {
        id:'card-2',
        title:'making milk',
    },
    {
        id:'card-3',
        title:'making water',
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

export default data
