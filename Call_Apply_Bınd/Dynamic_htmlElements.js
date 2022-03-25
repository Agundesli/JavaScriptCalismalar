const para=document.createElement("p")
const attr= document.createAttribute('class')
attr.value='myStyle'
para.setAttributeNode(attr)
const body=document.body
body.appendChild(para)
