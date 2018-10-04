exports.onPreBootstrap = async ({ cache }) => {
  console.log('setting cache value in cache', cache.name)
  await cache.set('bootstrap-test', `value from bootstrap`)
}
