// Expanding images
document.querySelectorAll('.drawing').forEach(drawing => {
        let isExpanded = false;
        const expandedImg = document.getElementById('expanded-img');
        const overlayDiv = document.getElementById('overlay');
    drawing.onclick = () => {
        if(!isExpanded){
            overlayDiv.classList.add('overlay');
            isExpanded = true;
            expandedImg.src = drawing.src;
            expandedImg.alt = drawing.alt;
            console.log(expandedImg, isExpanded);
        };
    };
    if(!isExpanded){
        overlayDiv.onclick = () => {
            overlay.classList.remove('overlay');
            expandedImg.src ='';
            expandedImg.alt ='';
            isExpanded = false;
        };
    };
});
document.querySelectorAll('.delete-button').forEach(button => {
button.onclick = () => confirm('Do you really want to delete this drawing? It can\'t be undone.')
});
document.querySelectorAll('.publish-button').forEach(button => {
button.onclick = () => confirm('Do you really want to publish this drawing? It can\'t be undone.')
});
