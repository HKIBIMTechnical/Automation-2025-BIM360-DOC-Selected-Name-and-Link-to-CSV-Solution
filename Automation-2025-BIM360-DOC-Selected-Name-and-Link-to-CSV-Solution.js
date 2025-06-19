const shareLinkDiv = document.querySelector('.ShareLinkV2Modal__link-row-container');

if (shareLinkDiv) {
    console.log('Div found:', shareLinkDiv);
} else {
    console.log('Div not found');
}

const shareLinkDiv_row=shareLinkDiv.querySelectorAll(".ShareLinkV2Modal__link-row")
const data=[]
shareLinkDiv_row.forEach(row=>{
    const name=row.querySelector(".ShareLinkV2Modal__link-row-name").textContent
    const link=row.querySelector(".TextInput__text-field--single-line").querySelector("input").value

    data.push({name, link}) 
})

const csvContent = "data:text/csv;charset=utf-8," 
    + data.map(e => `${e.name},${e.link}`).join("\n");

// Create a downloadable link
const encodedUri = encodeURI(csvContent);
const downloadLink = document.createElement("a");
downloadLink.setAttribute("href", encodedUri);
downloadLink.setAttribute("download", "data.csv");
document.body.appendChild(downloadLink);
downloadLink.click();

