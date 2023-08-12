function calculatetip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let servicequality = document.getElementById('servicequality').value;
    let peoplenum = document.getElementById('peoplenum').value;

    if(bill == '' | servicequality == 0) {
        alert('Por favor, preencha os valores.')
        return
    }

    if(peoplenum == '' | peoplenum <= 1) {
        peoplenum = 1;
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'
    }

    let total = (bill * servicequality) / peoplenum;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display = 'block';
}

document.getElementById('totaltip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsform').addEventListener('submit', calculatetip);