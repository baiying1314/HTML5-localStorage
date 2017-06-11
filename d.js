function dragstart(ev){
    event.dataTransfer.effectAllowed = 'link';
    ev.dataTransfer.setData("text", event.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,0,0);
    return true;
}

function dragenter(event){
    event.preventDefault();
    return true;
}

function dragover(event){
    return false;
}

function drop(ev){
    var src = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(src));
    ev.stopPropagation();
    return false;
}
