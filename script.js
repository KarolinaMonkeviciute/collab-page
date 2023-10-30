function isChecked(){
    const elements = document.getElementsByClassName('price');
    const yearlyElement = document.getElementById('yearly');
    const monthlyElement = document.getElementById('monthly');
    if(document.getElementById('toggle').checked){
       for (let i = 0; i < elements.length; i++){
        elements[i].textContent = 'Rs.4500';
       } 
       yearlyElement.style.fontWeight = 'bold';
       yearlyElement.style.color = '#333';
       monthlyElement.style.fontWeight = 'normal';
       monthlyElement.style.color = '#A79D9D';
    } else {
        for (let i = 0; i < elements.length; i++){
        elements[i].textContent = 'Rs.5000';
    }
    yearlyElement.style.fontWeight = 'normal';
    yearlyElement.style.color = '#A79D9D';
    monthlyElement.style.fontWeight = 'bold';
    monthlyElement.style.color = '#333';
}
}