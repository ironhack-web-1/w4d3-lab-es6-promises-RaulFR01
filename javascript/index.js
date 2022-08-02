// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks
function makePotatoes() {
  // Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          })
        })
      }) 
    })
  })
    // ...
});
}
// Iteration 2 - using promises
function makeStake() {
  obtainInstruction("steak", 0)
    .then((step0) => {
      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
      return obtainInstruction("steak", 1);
    })
    .then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      return obtainInstruction("steak", 2);
    })
    .then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      return obtainInstruction("steak", 3);
    })
    .then((step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
      return obtainInstruction("steak", 4);
    })
    .then((step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
      return obtainInstruction("steak", 5);
    })
    .then((step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
      return obtainInstruction("steak", 6);
    })
    .then((step6) => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
      return obtainInstruction("steak", 7);
    })
    .then((step7) => {
      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
      return obtainInstruction("steak", 8);
    })
    .then((step8) => {
      document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
    });
}

// Iteration 3 using async/await
async function makeBroccoli() {
  for (let i = 0; i < 8; ++i) {
    const steps = await obtainInstruction("broccoli", i);
    document.querySelector("#broccoli").innerHTML += `<li>${steps}</li>`;
  }
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

async function makeBroussels() {
  for  (let i = 0; i < 9; ++i){
    const steps = await obtainInstruction("brusselsSprouts", i);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps}</li>`;
  }

  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}

const p1 = makePotatoes();
const p2 = makeStake();
const p3 = makeBroccoli();
const p4 = makeBroussels()


Promise.all(p1,p2,p3,p4);
// Bonus 2 - Promise all
// ...
