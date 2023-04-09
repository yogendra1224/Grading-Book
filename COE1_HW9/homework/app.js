const root = document.getElementById('root');
const tweetItems = document.getElementById('tweetItems');
const modifyItem = document.getElementById('modifyItem');
const button = document.querySelector('.addTweet');
const header = document.getElementById('modifyItemHeader');
const gotoLiked = document.getElementById('gotoLiked');
const list = document.getElementById('list');
const likedTweets = document.getElementById('likedTweets');
const backButton = document.getElementById('backButton');
const list1 = document.getElementById('list1');
backButton.addEventListener('click',() => {
    tweetItems.style.display = 'flex';
    likedTweets.style.display = 'none';
})
gotoLiked.addEventListener('click', () => {
    tweetItems.style.display = 'none';
    updateList(list1);
    likedTweets.style.display = 'flex';
})
const route = (event) => {
    event = event||window.event;
    event.preventDefault();
    history.pushState({},'',event.target.value)
}
button.addEventListener('click',() => {
    header.innerText = 'Add Tweet';
    tweetItems.style.display = 'none';
    modifyItem.style.display = 'flex';
})
const saveItem = document.getElementById('saveModifiedItem');
const modifyItemInput = document.getElementById('modifyItemInput');
const alertMessageText = document.getElementById('alertMessageText');
const alertMessage = document.getElementById('alertMessage');
saveItem.addEventListener('click',() => {
    const t=location.hash?location.hash.slice(1):'';
    if(t){
        const prev = JSON.parse(localStorage.getItem(t));
        if(prev.title===modifyItemInput.value){
            alertMessageText.innerText = "Error! You can't tweet about this"
            alertMessage.style.display = 'block';
            setTimeout(() => {
                alertMessage.style.display = 'none';
            },'2000');
        }else{
            localStorage.setItem(t,JSON.stringify({'title':modifyItemInput.value,'isLiked':prev.isLiked}));
            modifyItemInput.value ='';
            modifyItem.style.display= 'none';
            updateList(list);
            tweetItems.style.display = 'flex';
            window.location=''
        }
        
    }else if(modifyItemInput.value!==''){
        let flag=false;
        for(let i=0;i<localStorage.length;i++){
            let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if(data.title===modifyItemInput.value){
                flag=true;
                break;
            }
        }
        if(flag){
            alertMessageText.innerText = "Error! You can't tweet about this"
            alertMessage.style.display = 'block';
            setTimeout(() => {
                alertMessage.style.display = 'none';
            },'2000');
        }else{
            localStorage.setItem(Date.now(),JSON.stringify({'title':modifyItemInput.value,'isLiked':false}));
            modifyItemInput.value ='';
            modifyItem.style.display= 'none';
            updateList(list);
            tweetItems.style.display = 'flex';
        }
    }
})
const navigationButtons = document.getElementById('navigationButtons');
const cancel = document.getElementById('cancelModification');
cancel.addEventListener('click',() => {
    modifyItem.style.display= 'none';
    tweetItems.style.display = 'flex';
    window.location=''
});
function updateList(lst){
    lst.innerHTML='';
    for(let i=0;i<localStorage.length;i++){
        let key= localStorage.key(i);
        let data = JSON.parse(localStorage.getItem(key))
        if(lst.id==='list'||lst.id==='list1'&&data.isLiked===true){
            let ele = document.createElement('li');
            let dv = document.createElement('div');
            ele.className= 'tweet';
            ele.id = key;
            let dv1=document.createElement('div');
            dv1.innerText=data.title;
            dv1.id='editor'
            dv1.addEventListener('click',() => {
                handleEdit(key);
            })
            ele.appendChild(dv1);
            let b1=document.createElement('button');
            let b2=document.createElement('button');
            b1.addEventListener('click',() => {
                handleRemove(key);
            })
            b2.addEventListener('click',() => {
                handleLike(key);
            })
            b1.innerText='remove';
            b2.innerText=data.isLiked?'unlike':'like';
            dv.appendChild(b1);
            dv.appendChild(b2);
            ele.appendChild(dv);
            lst.appendChild(ele);
        }
    }
}

function handleRemove(id){
    localStorage.removeItem(id);
    updateList(list);
}
function handleLike(id){
    let data = JSON.parse(localStorage.getItem(id));
    data.isLiked = !data.isLiked;
    localStorage.setItem(id,JSON.stringify(data));
    if(data.isLiked){
        alertMessageText.innerText = 'Hooray! You liked tweet with id1 ';
    }else{
        alertMessageText.innerText = 'Sorry you no longer like tweet with id1';
    }
    alertMessage.style.display = 'block';
    setTimeout(() => {
        alertMessage.style.display = 'none';
    },'2000');
    updateList(list);
}
function handleEdit(id){
    let data = JSON.parse(localStorage.getItem(id));
    window.location='#'+id;
    modifyItemInput.value = data.title;
    header.innerText = 'Edit Tweet';
    tweetItems.style.display = 'none';
    modifyItem.style.display = 'flex';
}
updateList(list);