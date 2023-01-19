import $ from "jquery";
import * as bootstrap from 'bootstrap';
const route="https://node-js-test-9u9r.onrender.com/";
const members=$("#members");

$(document).ready(async ()=>{
    getPresentMembers();
})

async function getPresentMembers()
{   
    let response=await $.get(route+"get-present")
    members.text("");
    for(let i in response.data)
    {
        let member=response.data[i];
        let col=`<div class="col-4 my-2"><div class="card"><div class="card-body text-center">${member.name}</div></div> </div>`;
        members.append(col);
    }
}

setInterval(getPresentMembers, 2000);
