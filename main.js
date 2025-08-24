async function completeTask(taskId){
    const response = await fetch('/tasks/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: window.tgUserId, taskId })
    });
    const data = await response.json();
    if(data.success){
        alert(Task completed! Coins: ${data.coins});
    }
}
