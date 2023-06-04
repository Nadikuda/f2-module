let container=document.getElementById("menu-container");

function getMenu() {
    container.innerHTML=""
   let response= fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");

   let result= response.then(response => response.json());
      result.then(data => {
        for(let i=0;i<data.length;i++){
            // console.log(data[i]);

            let item=document.createElement("div");
            item.className="item";
            item.innerHTML=`
            <img class="image" src="${data[i].imgSrc}" alt="">
            <div class="name">${data[i].id}. ${data[i].name}  price:${data[i].price}</div>
            `;
            container.append(item);
        } 
      })
      .catch(error => {
        console.log("Error fetching menu:", error);
      });
  }

  function takeOrder(){
    return new Promise(resolve => {
        setTimeout(() => {
          const burgers = ["Cheeseburger", "Chicken Burger", "Veggie Burger"];
          const order = {
            burgers: burgers.sort(() => 0.5 - Math.random()).slice(0, 3) // Select 3 random burgers
          };
          container.innerHTML=""
          let div=document.createElement("div");
          div.className="orderedItem";
          div.innerHTML=`
              <h2> Item You Have ordered</h2>
              <p> 1.${burgers[0]}</p>
              <p> 2.${burgers[1]}</p>
              <p> 3.${burgers[2]}</p>
             
          `;
          container.append(div);
          resolve(order);
        }, 2500);
      });
  }
  

  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: false
        };
        let div=document.createElement("div");
        div.className="orderedItem";
        div.innerHTML=`
            <h2>Order preparation</h2>
            <p> Order status: Accepted</p>
            <p> Payment status: pending</p>
           
        `;
        container.append(div);
        resolve(orderStatus);
      }, 1500);
    });
  }

  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: true
        };
        let div=document.createElement("div");
        div.className="orderedItem";
        div.innerHTML=`
            <h2>Pay your Order</h2>
            <p> Order status: Accepted</p>
            <p> Payment status: paid</p>
           
        `;
        container.append(div);
        resolve(orderStatus);
      }, 1000);
    });
  }

  function thankYou() {
    alert('Thank you for eating with us today!');
  }


function orderFood(){
    takeOrder().then((order)=>{
        console.log(order);
        return orderPrep();
      })
      .then((orderResult)=>{
        console.log(orderResult);
        return payOrder();
      })
      .then((payOrderResult)=>{
        console.log(payOrderResult);
        thankYou();
      })
      .catch((error=>{
        console.log("Something went wrong");
      }))

}
