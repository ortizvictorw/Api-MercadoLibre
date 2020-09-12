

let form = document.getElementById('formulario').addEventListener('submit',function(e){
    e.preventDefault();
        const capa = document.getElementById("contenedorGeneral").innerHTML = "";
        document.getElementById('search').addEventListener('change',(e)=>{
        console.log(e.target.value);

        let url =`https://api.mercadolibre.com/sites/MLM/search?q=${e.target.value}`
        console.log(url)
        fetch(url)
        .then( resp => resp.json() )
        .then( (data) => {

            
            console.log(data.results[0]);
            const {results}=data;
    
            
            results.forEach(produc => {
            const capa = document.getElementById("contenedorGeneral");   
            const div = document.createElement("div");
            div.innerHTML = 
            
                                `
                                <div  class="card">
                                        <img src="${produc.thumbnail}" class="card-img-top mx-1 " style="width: 5rem;" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title">${JSON.stringify(produc.attributes[0].value_name)}</h5>
                                        <p class="card-text">
                                        
                                        Seller ID: ${JSON.stringify(produc.seller.id)}<br>
                                        Seller Name:${JSON.stringify(produc.seller.currency_id)}<br>
                                        Envió Gratis (True/False):${JSON.stringify(produc.shipping.free_shipping)}<br>
                                        Precio: $${JSON.stringify(produc.price)}<br>
                                        Tipo de Logística: ${JSON.stringify(produc.shipping.logistic_type)}<br>
                                        Condición del articulo:${JSON.stringify(produc.attributes[1].value_name)}<br>
                                        Rango de Precios:N/A<br></p>
    
                                        
                                    </div>
                                    
                                </div>    `  
                                    
                                    capa.appendChild(div);
            
            });
    
            
        })
        
})


            
    })

    




    


    