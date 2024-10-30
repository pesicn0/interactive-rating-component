let rates = document.querySelectorAll('.single-rate');
let successPage = document.querySelector('.success-container');
let mainPage = document.querySelector('#main-page');
let results = document.querySelector('.results p');
let finalRate = 0;
let currentRate = null;
rates.forEach(rate => {
    rate.addEventListener('click', e => {
        if(currentRate) {
            currentRate.classList.remove('selected');
        }
        currentRate = e.target.closest('.single-rate');
        let rateValue = currentRate.innerText;
        currentRate.classList.add('selected');
        finalRate = rateValue;
    })
})
const submit = () => {
    successPage.style.display = 'inline-block';
    mainPage.style.display = 'none';
    results.innerHTML = `You selected ${finalRate} of 5`
}

