const inputs = document.querySelectorAll('.controls');

function handleevent(){
    // console.log(this.dataset.size);

    const suffix = this.dataset.size || '';
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input => input.addEventListener('mousemove',handleevent));
inputs.forEach(input => input.addEventListener('change',handleevent));