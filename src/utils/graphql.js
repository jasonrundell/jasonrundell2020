export function edgesToObject(edgesData) {
  const nodes = edgesData.map(item => {
    return item.node
  })
  const finalObject = nodes.map(item => {
    return item
  })

  return finalObject
}
