const form = document.querySelector("form")
const td = document.querySelector("#td")
const tr = document.querySelector("#tr")
const table = document.querySelector("table")

form.addEventListener('change', function(evt){
    evt.preventDefault();
    table.innerHTML = " ";

    for(let i=0;i<tr.value;i++)
    {
        const tr_element = document.createElement("tr");

        for(let j=0;j<td.value;j++){
            

            const td_element = document.createElement("td");
            const th_element = document.createElement("th");

            td_element.innerHTML = `c${j+1}w${i+1}`;
            th_element.innerHTML = `c${j+1}w${i+1}`;

            if(i==0)
            {
                th_element.classList.add(`c${j+1}w${i+1}`);
                tr_element.append(th_element);
                th_element.addEventListener('click', function(){
                    this.style.background = "red";
                })
            }
            else {
                td_element.classList.add(`c${j+1}w${i+1}`);
                tr_element.append(td_element);
                td_element.addEventListener('click', function(){
                    this.style.background = "yellow";
                })
            }
            table.append(tr_element);
        }
    }
})