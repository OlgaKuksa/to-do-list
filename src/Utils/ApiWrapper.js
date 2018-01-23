let id=Date.now();

export const getId=_=>id++;

export const getTasks=()=>new Promise(resolve=>setTimeout(resolve,0,([{isDone:true,
    title:'swimming pool Vania',
    priority:'Major',
    date:'01-18-2018',
},
{ isDone:false,
    title:'training',
    priority:'Medium',
    date:'01-22-2018',
}
].map(item=>({...item,id:getId()})))))
