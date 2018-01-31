// IE polyfills
if (Promise) {
  var promisePoly = document.createElement('script')
  promisePoly.src = '/promise.min.js'
  document.head.appendChild(promisePoly)
}
if (Object.assign) {
  var assignPoly = document.createElement('script')
  assignPoly.src = '/object-assign-auto.min.js'
  document.head.appendChild(assignPoly)
}
