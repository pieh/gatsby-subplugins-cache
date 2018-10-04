module.exports = async ({ markdownAST, cache }) => {
  console.log('getting cache value from cache', cache.name)
  const val = await cache.get('bootstrap-test')
  // val is undefined, because it's set on different cache instance
  console.log('val', val)
}
