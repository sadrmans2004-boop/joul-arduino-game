const id = document.getElementById("drawflow");
const editor = new Drawflow(id);
editor.start();

// وظيفة السحب من القائمة
function drag(ev) {
    ev.dataTransfer.setData("node", ev.target.getAttribute('data-node'));
}

id.addEventListener('drop', function(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("node");
    addNodeToEditor(data, e.clientX, e.clientY);
});

id.addEventListener('dragover', function(e) { e.preventDefault(); });

function addNodeToEditor(name, pos_x, pos_y) {
    pos_x = pos_x * (editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)) - (editor.precanvas.getBoundingClientRect().x * (editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)));
    pos_y = pos_y * (editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)) - (editor.precanvas.getBoundingClientRect().y * (editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)));

    if(name === 'arduino') {
        editor.addNode('arduino', 1, 1, pos_x, pos_y, 'arduino', {}, 'Arduino Uno');
    } else if(name === 'led') {
        editor.addNode('led', 1, 1, pos_x, pos_y, 'led', {}, 'Red LED');
    }
}
