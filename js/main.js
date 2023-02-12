const lineInfo = document.querySelectorAll('.line-info');

getData()

async function getData() {
    const response = await fetch('/assets/data.json');
    const data = await response.json();
    data.forEach(eachDay =>{
        lineInfo.forEach(line => {
            let day = line.nextElementSibling
            if (day.classList.contains(eachDay.day)) {
                line.innerHTML = `$${eachDay.amount}`
            }
        })
    })
}

