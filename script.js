const tasks = [
    { id: 1, title: "???? ??? LED", requiredCode: "digitalWrite(13, HIGH)" },
    { id: 2, title: "???? ???????", requiredCode: "analogRead(A0)" }
];

let currentTaskIndex = 0;
const canvas = document.getElementById('canvas');

document.querySelectorAll('.component').forEach(comp => {
    comp.addEventListener('dragstart', (e) => e.dataTransfer.setData('text', e.target.id));
});

canvas.addEventListener('dragover', (e) => e.preventDefault());

canvas.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const el = document.getElementById(id).cloneNode(true);
    el.style.position = 'absolute';
    el.style.left = (e.clientX - canvas.offsetLeft - 50) + 'px';
    el.style.top = (e.clientY - canvas.offsetTop - 20) + 'px';
    canvas.appendChild(el);
});

document.getElementById('run-btn').addEventListener('click', () => {
    const userCode = document.getElementById('code-editor').value;
    const feedback = document.getElementById('feedback');
    if (userCode.includes(tasks[currentTaskIndex].requiredCode)) {
        feedback.style.color = '#2ecc71';
        feedback.innerText = "??! ?????? ???.";
        setTimeout(() => {
            currentTaskIndex++;
            if(currentTaskIndex < tasks.length) {
                document.getElementById('current-task-num').innerText = currentTaskIndex + 1;
                feedback.innerText = "";
                document.getElementById('code-editor').value = "";
            }
        }, 2000);
    } else {
        feedback.style.color = '#e74c3c';
        feedback.innerText = "????? ????? ??? ???!";
    }
});