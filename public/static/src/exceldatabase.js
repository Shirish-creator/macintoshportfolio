
import * as XLSX from "xlsx";

let table = document.querySelector(".show");
        (
            async() => {

                //fetching from google sheet
                let workbook = XLSX.read(await (await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSmWlRxUZnm3FgsmWeSJXcauQjSFbTbaQ_1b0XI3YnmawmN7q9K0e85gqBMIrwGrDvd4TMOf2VhOpXD/pubhtml?gid=0&single=true")).arrayBuffer());
               
               //fetching all sheets
                let worksheetname = workbook.SheetNames;
                const worksheet=workbook.Sheets[worksheetname]

                //generating all object datas
                const data=XLSX.utils.sheet_to_json(worksheet);
                
                // console.log(data)

                //creating html elements
                let htmlstring="";                
                for( let n=0;n<3;n++){
                    htmlstring+=`<div>
                    <h1>${data[n].Title}</h1>
                    <p>${data[n].Description}</p>
                    <img src=${data[n].ProjectImg}>
                    </div>`
                }

                //generating html
                // table.innerHTML=htmlstring
                
            } )()