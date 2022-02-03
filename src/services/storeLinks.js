// Buscar links salvos.
export async function getLinkSave(key){
  const myLinks = await localStorage.getItem(key)
  let linksSaves = JSON.parse(myLinks) || []
  return linksSaves
}


// Salvar link no localStorage.
export async function saveLink(key, newLink){
  let linksStored = await getLinkSave(key)

  //se já tem link salvo com algum id nao deixa duplicar
  const hasLink = linksStored.some((link) => link.id === newLink.id)
  if(hasLink){
    console.log("Esse link já está na lista salva!")
    return
  }

  //adicionar novo link na lista
  linksStored.unshift(newLink)
  await localStorage.setItem(key, JSON.stringify(linksStored))
  console.log("Link salvo com sucesso!")
}


// Deletar link salvo.

export function deleteLink(links, id){
  let myLinks = links.filter((link) => {
    return (link.id !== id)
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
  return myLinks
}